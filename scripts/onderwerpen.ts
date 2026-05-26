/**
 * Evergreen blog-onderwerpen voor automatische generatie.
 * Wordt cyclisch afgewerkt: dag 1 = onderwerp 0, dag 4 = onderwerp 1, etc.
 * Voeg gerust onderwerpen toe — het script pakt automatisch alleen wat nog niet bestaat.
 */
export const BLOG_ONDERWERPEN: { titel: string; category: string; angle: string }[] = [
  { titel: "Wat is dividend en hoe werkt het?", category: "ETF", angle: "Uitleg van dividend met concrete voorbeelden voor beginners" },
  { titel: "Pensioenopbouw als jongere — moet ik nu al beginnen?", category: "Strategie", angle: "Waarom op je 20e starten met pensioen lonend is" },
  { titel: "Hoe spaar je voor een huis terwijl je belegt?", category: "Beginners", angle: "Balans tussen sparen voor eigen huis en lange-termijn beleggen" },
  { titel: "Wat is FIRE en kan dat in Nederland?", category: "Strategie", angle: "Financial Independence Retire Early uitgelegd voor NL situatie" },
  { titel: "Actief vs passief beleggen — wat is het verschil?", category: "Strategie", angle: "Voor- en nadelen van beide stijlen voor beginners" },
  { titel: "Wat zijn obligaties en wanneer interessant?", category: "Beginners", angle: "Obligaties uitgelegd voor jonge beleggers" },
  { titel: "Hoe lees je de cijfers van een bedrijf?", category: "Strategie", angle: "Eenvoudige uitleg van koers/winst, dividendrendement, etc." },
  { titel: "Wat is een aandelensplitsing?", category: "Aandelen", angle: "Wat gebeurt er met je aandelen bij een stock split" },
  { titel: "Vermogensbelasting box 3 — verwacht voor 2027", category: "Strategie", angle: "Actuele veranderingen in box 3 en wat het betekent" },
  { titel: "Crypto staking uitgelegd voor beginners", category: "Crypto", angle: "Wat is staking, hoeveel verdien je, risico's" },
  { titel: "Bitcoin halving — wat is het en wat betekent het?", category: "Crypto", angle: "Uitleg van het halving-event en historische impact" },
  { titel: "Hoe kies je tussen IWDA en VWRL?", category: "ETF", angle: "Vergelijking van twee populaire wereld-ETF's" },
  { titel: "Wat is een REIT en hoe beleg je in vastgoed?", category: "ETF", angle: "Vastgoed-aandelen voor wie geen huis kan kopen" },
  { titel: "Sparen of beleggen — wat past bij jou?", category: "Beginners", angle: "Beslisboom om te bepalen of beleggen past bij je situatie" },
  { titel: "Wat is een short positie en waarom is dat gevaarlijk?", category: "Strategie", angle: "Shorten uitgelegd en waarom beginners het moeten vermijden" },
  { titel: "Wat is een limit order vs market order?", category: "Beginners", angle: "Verschillende ordertypes en wanneer welke gebruiken" },
  { titel: "Wat zijn opties en zijn ze iets voor jou?", category: "Strategie", angle: "Opties uitgelegd, met waarschuwing voor beginners" },
  { titel: "Hoe werkt inflatie op je beleggingen?", category: "Strategie", angle: "Waarom beleggen tegen inflatie beschermt" },
  { titel: "Wat als de beurs crasht? Een actieplan", category: "Strategie", angle: "Wat te doen tijdens een marktdaling van 30%+" },
  { titel: "Lijfrente — slim voor jongeren?", category: "Strategie", angle: "Pensioen-aftrek voor jongeren onder 30" },
  { titel: "Wat is duurzaam beleggen (ESG)?", category: "Strategie", angle: "ESG uitgelegd, voor- en nadelen, populaire ETF's" },
  { titel: "Goud, zilver en andere edelmetalen", category: "Strategie", angle: "Beleggen in goud — hedge of overbodig?" },
  { titel: "Hoe werkt de Nederlandse beurs (Euronext Amsterdam)?", category: "Aandelen", angle: "Geschiedenis en werking van de AEX" },
  { titel: "5 grootste bedrijven van Nederland — moet je ze kopen?", category: "Aandelen", angle: "Analyse ASML, Shell, ING, Heineken, Adyen" },
  { titel: "Wat is een marktkapitalisatie en waarom belangrijk?", category: "Aandelen", angle: "Marktcap uitgelegd en hoe het de markt beïnvloedt" },
  { titel: "Verkopen of vasthouden? De holdregel", category: "Strategie", angle: "Wanneer is verkopen verstandig, wanneer niet" },
  { titel: "Belasting op crypto in 2026", category: "Crypto", angle: "Complete uitleg crypto in box 3 voor NL" },
  { titel: "DeFi uitgelegd voor jongeren", category: "Crypto", angle: "Decentralized Finance — uitleg en risico's" },
  { titel: "NFTs in 2026 — hype voorbij?", category: "Crypto", angle: "Stand van zaken NFTs, lessen geleerd" },
  { titel: "Hoe vermijd je beleggings-scams?", category: "Beginners", angle: "Red flags herkennen en jezelf beschermen" },
  { titel: "Welke broker past bij jouw stijl?", category: "Apps", angle: "Beslisboom om de juiste broker te kiezen" },
  { titel: "Hoe werkt fractioneel beleggen?", category: "Beginners", angle: "0,1 aandeel Apple kopen — hoe en waarom" },
  { titel: "Wat is een 'value' aandeel?", category: "Aandelen", angle: "Value investing van Buffett uitgelegd" },
  { titel: "Growth aandelen — kansen en risico's", category: "Aandelen", angle: "Tegenovergestelde van value, hoe te herkennen" },
  { titel: "Hoe bepaal je je risicoprofiel?", category: "Beginners", angle: "Test jezelf en bepaal wat bij jou past" },
  { titel: "Wereldwijd beleggen vs alleen Nederland", category: "Strategie", angle: "Home bias — waarom niet alles op NL gokken" },
  { titel: "Wat is een bear market en hoe overleef je 'm?", category: "Strategie", angle: "Definitie + psychologie + actieplan" },
  { titel: "Beleggen tijdens een recessie", category: "Strategie", angle: "Wat doe je als economie krimpt" },
  { titel: "Het 4% rule voor financiële onafhankelijkheid", category: "Strategie", angle: "Hoeveel moet je hebben om te stoppen met werken" },
  { titel: "Beleggen met €25 per maand — heeft dat zin?", category: "Beginners", angle: "Compound interest met kleine bedragen" },
  { titel: "Hoe vermijd je dubbele kosten in je portefeuille?", category: "Strategie", angle: "Overlap tussen ETF's en wanneer wel/niet" },
  { titel: "Spaarrente vs beleggingsrendement — vergelijking", category: "Beginners", angle: "Concrete cijfers, 10 jaar simulatie" },
  { titel: "AI-aandelen — slim om in te beleggen?", category: "Aandelen", angle: "Analyse van NVIDIA, Microsoft, en AI-thema-ETF's" },
  { titel: "Tesla aandeel — koop, hold of verkoop?", category: "Aandelen", angle: "Eerlijke analyse Tesla anno nu" },
  { titel: "Hoe werkt automatisch beleggen?", category: "Beginners", angle: "AutoInvest, spaarplannen, periodiek inleggen" },
  { titel: "Crypto wallet kiezen — software vs hardware", category: "Crypto", angle: "Welke wallet wanneer gebruiken" },
  { titel: "Wat is een stablecoin?", category: "Crypto", angle: "USDT, USDC, DAI uitgelegd + risico's" },
  { titel: "Beleggen voor je kind — kan dat?", category: "Strategie", angle: "Beleggingsrekening minderjarige in NL" },
  { titel: "Hoe word je miljonair voor je 40e?", category: "Strategie", angle: "Realistische berekening met inleg + rendement" },
  { titel: "Aandelen kopen met salaris vs spaargeld", category: "Beginners", angle: "Beste moment in de maand om te beleggen" },
  { titel: "Wat doe je bij ontslag — beleggingen aanraken?", category: "Strategie", angle: "Noodbuffer vs beleggingen tijdens crisis" },
  { titel: "Top 5 boeken over beleggen voor beginners", category: "Beginners", angle: "Lijst plus korte beschrijving per boek" },
  { titel: "Sparen voor sabbatical of wereldreis", category: "Beginners", angle: "Hoe combineer je doelen op middellange termijn" },
  { titel: "Mythes over beleggen die jongeren tegenhouden", category: "Beginners", angle: "Veelgehoorde misvattingen ontkrachten" },
  { titel: "Wat is een 'bubble' en hoe herken je 'm?", category: "Strategie", angle: "Bubbles uit het verleden + hoe herkennen" },
  { titel: "Beleggen vs eigen huis — wat is slimmer?", category: "Strategie", angle: "De vergelijking gemaakt met cijfers" },
  { titel: "Belasting op buitenlandse dividenden terugvragen", category: "Strategie", angle: "Hoe werkt teruggave van bronbelasting" },
  { titel: "Wat zijn aandelenoptie-programma's (RSU's)?", category: "Aandelen", angle: "Voor jonge professionals die aandelen krijgen van werkgever" },
  { titel: "Beleggen met een studieschuld — verstandig?", category: "Strategie", angle: "Aflossen of beleggen, de optimale keuze" },
  { titel: "Hoe gebruik je een beleggings-rendement-calculator?", category: "Beginners", angle: "Welke factoren tellen mee, welke veelgemaakte fouten" }
];

/**
 * Pakt het volgende onderwerp uit de lijst dat nog niet als blog-artikel in de database staat.
 */
export function kiesVolgendeBlogOnderwerp(
  bestaandeSlugs: Set<string>
): typeof BLOG_ONDERWERPEN[number] | null {
  for (const onderwerp of BLOG_ONDERWERPEN) {
    const slug = slugify(onderwerp.titel);
    if (!bestaandeSlugs.has(slug)) {
      return onderwerp;
    }
  }
  return null; // alle onderwerpen op
}

export function slugify(titel: string): string {
  return titel
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
