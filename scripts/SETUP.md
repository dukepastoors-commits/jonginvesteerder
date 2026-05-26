# Setup — automatische dagelijkse artikelen

Dit document leidt je door de eenmalige setup om dagelijks automatisch artikelen te laten publiceren.

## Wat krijg je hiermee

- **3 nieuwsartikelen per dag** — gescrapet van NU.nl, IEX en Investing.com, herschreven door Gemini voor de jongeren-doelgroep
- **1 blogartikel per 3 dagen** — uit een lijst van 60+ evergreen onderwerpen
- Volledig automatisch via GitHub Actions cron, om 07:00-08:00 NL-tijd

Totale kosten: **€0**. Alles binnen gratis tiers.

---

## Stap 1 — Supabase project opzetten (5 min)

1. Ga naar https://supabase.com → **Start your project** → log in met je GitHub.
2. **New Project**:
   - Naam: `jonginvesteerder`
   - Database password: kies een sterk wachtwoord, bewaar in een password manager
   - Regio: **Frankfurt** (eu-central-1) — lage latency
3. Wacht 1-2 min tot het project klaar is.
4. Links in zijbalk → **SQL Editor** → **New query** → kopieer de inhoud van [`supabase/schema.sql`](../supabase/schema.sql) en klik **Run**.
5. **Settings** (tandwiel linksonder) → **API** → kopieer:
   - **Project URL** (bv. `https://abcdxyz.supabase.co`)
   - **service_role** secret key (niet de anon key — die mag alleen lezen)
6. Bewaar deze twee, je hebt ze zo nodig.

⚠️ **Belangrijk**: de service_role key mag NOOIT in je frontend of git komen. Hij gaat alleen in GitHub Secrets en draait op de server.

---

## Stap 2 — Google Gemini API key (3 min)

1. Ga naar https://aistudio.google.com/app/apikey → log in met je Google account.
2. Klik **Create API key** → **Create API key in new project**.
3. Kopieer de key (begint met `AIza...`).
4. Het free tier geeft je 1500 requests/dag — meer dan genoeg voor 4 artikelen per dag.

---

## Stap 3 — GitHub Secrets toevoegen (2 min)

1. Ga naar je repo: https://github.com/dukepastoors-commits/jonginvesteerder
2. **Settings** (bovenin de repo) → **Secrets and variables → Actions**.
3. Klik **New repository secret** en voeg drie secrets toe:

| Name | Value |
|---|---|
| `SUPABASE_URL` | je Project URL uit stap 1 (bv. `https://abcdxyz.supabase.co`) |
| `SUPABASE_SERVICE_KEY` | de service_role key uit stap 1 |
| `GEMINI_API_KEY` | de Gemini key uit stap 2 |

---

## Stap 4 — Site verbinden met Supabase

Voeg dezelfde twee Supabase secrets ook toe aan Vercel zodat de site uit Supabase leest:

1. Vercel dashboard → `jonginvesteerder` project → **Settings → Environment Variables**.
2. Voeg toe (allemaal voor Production + Preview + Development):
   - `NEXT_PUBLIC_SUPABASE_URL` = je Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = je **anon** key uit Supabase (NIET de service key — deze is publiek veilig)
3. Tab **Deployments** → laatste deployment → drie puntjes → **Redeploy**.

Vanaf nu leest de site automatisch uit Supabase in plaats van mock-data. De mock-data uit `lib/mockData.ts` blijft als fallback bestaan (handig voor lokale dev).

---

## Stap 5 — Test de generator handmatig

Voordat we wachten op de cron, kunnen we de workflow handmatig draaien:

1. Ga naar je repo op GitHub → tab **Actions**.
2. Linker zijbalk → **Dagelijkse artikel generatie** → klik **Run workflow** → groene knop.
3. Na 1-2 min zie je het resultaat. Klik op de run om de logs te bekijken.

Bij succes zie je iets als:
```
RSS https://www.nu.nl/rss/Economie: 25 items
Relevant en uniek: 8 items
Te genereren nieuws-artikelen: 3
✓ Nieuws geplaatst: ECB verlaagt rente met 0,25%
✓ Nieuws geplaatst: ASML verslaat verwachtingen Q1
✓ Nieuws geplaatst: Bitcoin breekt door $100k
Geen blog vandaag (dag 142 % 3 != 0)
```

4. Ga naar je site `https://jonginvesteerder.nl/nieuws` — de nieuwe artikelen verschijnen binnen 30 min (Vercel revalidatie).

---

## Stap 6 — Klaar! De cron draait nu vanzelf

GitHub Actions draait elke ochtend om 06:00 UTC (= 07:00-08:00 NL-tijd) automatisch. Je hoeft niets meer te doen.

---

## Aanpassen / monitoren

### Onderwerpen toevoegen voor blogs

Edit [`scripts/onderwerpen.ts`](./onderwerpen.ts) en voeg items toe aan `BLOG_ONDERWERPEN`. Push naar GitHub, klaar.

### RSS-bronnen aanpassen

In [`scripts/genereer-artikelen.ts`](./genereer-artikelen.ts) kun je de `RSS_FEEDS` array aanpassen.

### Aantal artikelen wijzigen

Constants bovenaan `genereer-artikelen.ts`:

```ts
const NIEUWS_PER_DAG = 3;
const BLOG_ELKE_X_DAGEN = 3;
```

### Tijdstip aanpassen

In [`.github/workflows/dagelijks.yml`](../.github/workflows/dagelijks.yml) → `cron` value. Het formaat is UTC.

Voorbeelden:
- `0 6 * * *` = elke dag 06:00 UTC (07:00-08:00 NL)
- `0 4 * * *` = elke dag 04:00 UTC (05:00-06:00 NL)
- `0 6 * * 1-5` = alleen werkdagen 06:00 UTC

### Een gegenereerd artikel verwijderen

Ga naar Supabase → **Table Editor** → `nieuws_artikelen` of `blog_artikelen` → klik het record → delete.

### Workflow uit-/aanzetten

GitHub repo → **Actions** → **Dagelijkse artikel generatie** → drie puntjes → **Disable workflow**.

---

## Troubleshooting

### "Gemini herschrijf mislukt"

Meestal: rate limit overschreden of API key fout. Check de Actions logs.

### Geen relevante items uit RSS

Soms heeft NU.nl/IEX op één dag weinig over beleggen. De script slaat die dag dan over (geen artikelen). De volgende dag pakt-ie weer op.

### Site toont oude artikelen

Cache duurt max 30 min. Wachten, of forceer redeploy in Vercel.

### Foutmelding "duplicate key value"

Het script controleert al op duplicates, maar in zeldzame gevallen kan een titel hetzelfde zijn. Geen actie nodig — volgende run gaat goed.
