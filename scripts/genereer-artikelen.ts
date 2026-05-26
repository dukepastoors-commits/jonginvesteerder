/**
 * Dagelijkse artikel-generator.
 * Wordt aangeroepen door GitHub Actions cron (.github/workflows/dagelijks.yml).
 *
 * Stappen:
 * 1. Haal RSS-feeds op (NU.nl Economie, IEX, Investing.com NL)
 * 2. Filter op beleggings-relevante items, sla over wat al bestaat
 * 3. Vraag Gemini 3 herschreven nieuwsartikelen te genereren in eigen stijl
 * 4. Plaats in Supabase tabel `nieuws_artikelen`
 * 5. Elke 3e dag: genereer ook 1 blog-artikel uit de evergreen-lijst
 */

import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { XMLParser } from "fast-xml-parser";
import { BLOG_ONDERWERPEN, kiesVolgendeBlogOnderwerp, slugify } from "./onderwerpen";

// ----- Config -----
const RSS_FEEDS = [
  "https://www.nu.nl/rss/Economie",
  "https://www.iex.nl/rss/algemeen.aspx",
  "https://nl.investing.com/rss/news.rss"
];

const NIEUWS_PER_DAG = 3;
const BLOG_ELKE_X_DAGEN = 3;

const ONDERWERP_FILTERS = [
  "beleggen", "belegger", "beurs", "aandeel", "aandelen", "etf", "fonds",
  "crypto", "bitcoin", "ethereum", "asml", "shell", "ing", "rabobank",
  "abn", "amro", "dividend", "rente", "ecb", "fed", "nvidia", "tesla",
  "apple", "microsoft", "amazon", "inflatie", "recessie", "obligatie",
  "pensioen", "spaar", "broker", "degiro", "trading 212", "bitvavo",
  "trade republic", "scalable", "etoro", "bux", "lynx", "interactive brokers"
];

// Unsplash foto-ID's per categorie voor variatie
const FOTOS_PER_CATEGORIE: Record<string, string[]> = {
  Aandelen: ["1611974789855-9c2a0a7236a3", "1590283603385-17ffb3a7f29f", "1559526324-4b87b5e36e44", "1543286386-713bdd548da4"],
  ETF: ["1551288049-bebda4e38f71", "1554224155-6726b3ff858f", "1559526324-4b87b5e36e44"],
  Crypto: ["1518546305927-5a555bb7020d", "1639762681485-074b7f938ba0"],
  Apps: ["1579621970795-87facc2f976d", "1554224154-22dec7ec8818", "1551836022-d5d88e9218df"],
  Beginners: ["1450101499163-c8848c66ca85", "1554224155-6726b3ff858f", "1554224154-22dec7ec8818"],
  Strategie: ["1554224154-22dec7ec8818", "1620228885847-9eab2a1adddc", "1450101499163-c8848c66ca85"]
};

function imgVoorCategorie(cat: string): string {
  const pool = FOTOS_PER_CATEGORIE[cat] ?? FOTOS_PER_CATEGORIE.Aandelen;
  const id = pool[Math.floor(Math.random() * pool.length)];
  return `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`;
}

// ----- Setup -----
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const GEMINI_KEY = process.env.GEMINI_API_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY || !GEMINI_KEY) {
  console.error("Ontbrekende environment variables: SUPABASE_URL, SUPABASE_SERVICE_KEY, GEMINI_API_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const gemini = new GoogleGenerativeAI(GEMINI_KEY);
const model = gemini.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
});

// ----- Types -----
type RssItem = { titel: string; samenvatting: string; link: string };

type GegenereerdArtikel = {
  titel: string;
  samenvatting: string;
  inhoud: string;
  category: "Aandelen" | "ETF" | "Crypto" | "Apps" | "Strategie";
};

// ----- RSS scraping -----
async function fetchRssItems(url: string): Promise<RssItem[]> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 JongInvesteerderBot" } });
    if (!res.ok) {
      console.warn(`RSS ${url} gaf status ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);
    const items = parsed?.rss?.channel?.item ?? [];
    const arr = Array.isArray(items) ? items : [items];
    return arr
      .filter((it: any) => it && it.title)
      .map((it: any) => ({
        titel: String(it.title ?? "").trim(),
        samenvatting: String(it.description ?? "").replace(/<[^>]*>/g, "").trim().slice(0, 500),
        link: String(it.link ?? "").trim()
      }));
  } catch (e) {
    console.warn(`RSS ${url} mislukt:`, e);
    return [];
  }
}

function isRelevant(item: RssItem): boolean {
  const tekst = (item.titel + " " + item.samenvatting).toLowerCase();
  return ONDERWERP_FILTERS.some(f => tekst.includes(f));
}

// ----- Gemini prompting -----
async function herSchrijfNieuws(item: RssItem): Promise<GegenereerdArtikel | null> {
  const prompt = `Je bent een journalist voor JongInvesteerder.nl, een vergelijkingssite over beleggingsapps gericht op Nederlandse jongeren tussen 18-30 jaar.

Herschrijf het volgende nieuws-item in een toegankelijk artikel voor deze doelgroep. Schrijf in normaal Nederlands, zonder jargon. Leg financiële termen kort uit als ze voorkomen. Wees feitelijk — verzin geen cijfers die niet in het bron-item staan.

Bron-titel: ${item.titel}
Bron-samenvatting: ${item.samenvatting}

Lever je antwoord als JSON met EXACT deze velden:
{
  "titel": "Pakkende Nederlandse titel, max 80 tekens",
  "samenvatting": "Korte samenvatting van 1-2 zinnen, max 200 tekens",
  "inhoud": "Volledig artikel in markdown. Begin met '## Wat is er gebeurd?' Daarna 4-6 secties met '## Kopje'. Gebruik **bold** voor accenten en '- ' voor bulletpoints. Sluit af met '## Wat betekent dit voor jou?' Lengte: 400-600 woorden.",
  "category": "Aandelen | ETF | Crypto | Apps | Strategie"
}

Antwoord ALLEEN met de JSON, geen extra tekst. Geen markdown code blocks om de JSON heen.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    // strip eventuele markdown code blocks
    const json = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
    const artikel = JSON.parse(json);
    if (!artikel.titel || !artikel.inhoud) return null;
    return artikel;
  } catch (e) {
    console.warn("Gemini herschrijf mislukt:", e);
    return null;
  }
}

async function schrijfBlog(onderwerp: { titel: string; category: string; angle: string }): Promise<GegenereerdArtikel | null> {
  const prompt = `Je bent een schrijver voor JongInvesteerder.nl, een educatieve site over beleggen gericht op Nederlandse jongeren van 18-30 jaar.

Schrijf een grondig blog-artikel over het volgende onderwerp:

Titel: ${onderwerp.titel}
Invalshoek: ${onderwerp.angle}

Schrijf in toegankelijk Nederlands. Gebruik concrete voorbeelden met cijfers. Behandel zowel voor- als nadelen. Geef praktisch advies. Geen jargon zonder uitleg.

Lever je antwoord als JSON met EXACT deze velden:
{
  "titel": "${onderwerp.titel}",
  "samenvatting": "Korte samenvatting van 1-2 zinnen, max 200 tekens",
  "inhoud": "Volledig artikel in markdown met 5-8 secties via '## Kopje'. Gebruik **bold**, '### subkopjes' en '- ' voor lijsten. Sluit af met '## Conclusie'. Lengte: 600-900 woorden.",
  "category": "${onderwerp.category}"
}

Antwoord ALLEEN met de JSON, geen extra tekst. Geen markdown code blocks om de JSON heen.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const json = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
    const artikel = JSON.parse(json);
    if (!artikel.titel || !artikel.inhoud) return null;
    return artikel;
  } catch (e) {
    console.warn("Gemini blog-schrijf mislukt:", e);
    return null;
  }
}

// ----- Database -----
async function bestaandeSlugs(tabel: "nieuws_artikelen" | "blog_artikelen"): Promise<Set<string>> {
  const { data, error } = await supabase.from(tabel).select("slug");
  if (error) {
    console.error(`Kon bestaande slugs van ${tabel} niet ophalen:`, error);
    return new Set();
  }
  return new Set((data ?? []).map((r: any) => r.slug));
}

async function plaatsNieuws(artikel: GegenereerdArtikel) {
  const datum = new Date().toISOString().slice(0, 10);
  const slug = `${slugify(artikel.titel)}-${datum}`;
  const woorden = artikel.inhoud.split(/\s+/).length;
  const leestijd = Math.max(2, Math.round(woorden / 200));

  const { error } = await supabase.from("nieuws_artikelen").insert({
    titel: artikel.titel,
    slug,
    samenvatting: artikel.samenvatting,
    inhoud: artikel.inhoud,
    afbeelding_url: imgVoorCategorie(artikel.category),
    category: artikel.category,
    gepubliceerd_op: datum,
    leestijd_minuten: leestijd,
    gerelateerde_apps: []
  });

  if (error) {
    console.error("Plaatsen nieuws mislukt:", error);
  } else {
    console.log(`✓ Nieuws geplaatst: ${artikel.titel}`);
  }
}

async function plaatsBlog(artikel: GegenereerdArtikel) {
  const datum = new Date().toISOString().slice(0, 10);
  const slug = slugify(artikel.titel);
  const woorden = artikel.inhoud.split(/\s+/).length;
  const leestijd = Math.max(3, Math.round(woorden / 200));

  const { error } = await supabase.from("blog_artikelen").insert({
    titel: artikel.titel,
    slug,
    samenvatting: artikel.samenvatting,
    inhoud: artikel.inhoud,
    afbeelding_url: imgVoorCategorie(artikel.category),
    category: artikel.category,
    gepubliceerd_op: datum,
    leestijd_minuten: leestijd
  });

  if (error) {
    console.error("Plaatsen blog mislukt:", error);
  } else {
    console.log(`✓ Blog geplaatst: ${artikel.titel}`);
  }
}

// ----- Main -----
async function main() {
  console.log(`=== Artikel-generator gestart ${new Date().toISOString()} ===`);

  // 1. Verzamel RSS items
  const alleItems: RssItem[] = [];
  for (const feed of RSS_FEEDS) {
    const items = await fetchRssItems(feed);
    console.log(`RSS ${feed}: ${items.length} items`);
    alleItems.push(...items);
  }

  // 2. Filter op relevantie en deduplicaat op titel
  const relevant = alleItems.filter(isRelevant);
  const gezienTitels = new Set<string>();
  const uniek = relevant.filter(it => {
    const key = it.titel.toLowerCase().slice(0, 50);
    if (gezienTitels.has(key)) return false;
    gezienTitels.add(key);
    return true;
  });

  console.log(`Relevant en uniek: ${uniek.length} items`);

  // 3. Skip wat al recent gepubliceerd is (op basis van titel-similar)
  const bestaandeNieuwsSlugs = await bestaandeSlugs("nieuws_artikelen");
  const teGebruiken: RssItem[] = [];
  for (const item of uniek) {
    const baseSlug = slugify(item.titel);
    const alBestaat = [...bestaandeNieuwsSlugs].some(s => s.startsWith(baseSlug.slice(0, 30)));
    if (!alBestaat) teGebruiken.push(item);
    if (teGebruiken.length >= NIEUWS_PER_DAG) break;
  }

  console.log(`Te genereren nieuws-artikelen: ${teGebruiken.length}`);

  // 4. Genereer nieuws
  for (const item of teGebruiken) {
    const artikel = await herSchrijfNieuws(item);
    if (artikel) await plaatsNieuws(artikel);
    // korte pauze om rate limits te respecteren
    await new Promise(r => setTimeout(r, 1500));
  }

  // 5. Eens per X dagen: ook een blog
  const dagvanjaar = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const moetBlog = dagvanjaar % BLOG_ELKE_X_DAGEN === 0;

  if (moetBlog) {
    const blogSlugs = await bestaandeSlugs("blog_artikelen");
    const onderwerp = kiesVolgendeBlogOnderwerp(blogSlugs);
    if (onderwerp) {
      console.log(`Blog onderwerp van de dag: ${onderwerp.titel}`);
      const blog = await schrijfBlog(onderwerp);
      if (blog) await plaatsBlog(blog);
    } else {
      console.log("Geen nieuwe blog-onderwerpen meer beschikbaar — voeg er toe in scripts/onderwerpen.ts");
    }
  } else {
    console.log(`Geen blog vandaag (dag ${dagvanjaar} % ${BLOG_ELKE_X_DAGEN} != 0)`);
  }

  console.log("=== Artikel-generator klaar ===");
}

main().catch(err => {
  console.error("Onverwachte fout:", err);
  process.exit(1);
});
