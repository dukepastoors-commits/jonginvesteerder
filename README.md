# JongInvesteerder.nl

Next.js 14 vergelijkingssite voor beleggingsapps, gericht op Nederlandse jongeren (18-30).

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** voor styling
- **Supabase** voor data (met automatische fallback naar mock-data zonder env vars)
- **TradingView gratis embed widgets** voor de markt-pagina
- Sitemap + robots.txt automatisch gegenereerd via Next metadata API

## Installatie

```bash
npm install
cp .env.example .env.local   # vul Supabase keys in (optioneel)
npm run dev
```

Open http://localhost:3000

Zonder Supabase env vars draait de site op mock-data uit `lib/mockData.ts`. Zodra
je `NEXT_PUBLIC_SUPABASE_URL` en `NEXT_PUBLIC_SUPABASE_ANON_KEY` invult, schakelt
`lib/data.ts` automatisch over op de live database.

## Supabase setup

1. Maak een nieuw Supabase project (gratis tier is voldoende).
2. Open de SQL editor en voer `supabase/schema.sql` uit. Dit maakt de drie tabellen
   aan (`apps`, `nieuws_artikelen`, `blog_artikelen`), zet row-level security op
   read-only voor anon, en seedt placeholder data.
3. Kopieer de project URL en de anon key naar `.env.local`.

## Pagina's

| Route | Beschrijving |
|-------|--------------|
| `/` | Homepage met hero, top 3 apps, hoe werkt het, nieuws en FAQ |
| `/vergelijk` | Vergelijkingstabel met filters |
| `/app/[slug]` | App review pagina (dynamisch) |
| `/markt` | Live beurskoersen via TradingView |
| `/nieuws` + `/nieuws/[slug]` | Nieuws overzicht + detail |
| `/blog` + `/blog/[slug]` | Blog overzicht + detail |
| `/over-ons` | Statische over-pagina |

## Python scraper koppelen aan Supabase

Wanneer je later een Python scraper bouwt (bijvoorbeeld om dagelijks actuele
kosten en beoordelingen op te halen), kun je deze op twee manieren laten
schrijven naar Supabase:

### Optie A: directe REST API (aanbevolen voor scrapers)

Gebruik je **service role key** (niet de anon key — die kan alleen lezen) en de
PostgREST endpoint van je project:

```python
import os, requests

SUPABASE_URL = os.environ["SUPABASE_URL"]
SERVICE_KEY  = os.environ["SUPABASE_SERVICE_ROLE_KEY"]

headers = {
    "apikey": SERVICE_KEY,
    "Authorization": f"Bearer {SERVICE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "resolution=merge-duplicates",  # upsert
}

payload = {
    "slug": "degiro",
    "naam": "DEGIRO",
    "minimale_inleg": 0.01,
    "transactiekosten": "€1 - €3",
    "beoordeling": 4.5,
    "laatste_update": "2026-05-20",
}

r = requests.post(
    f"{SUPABASE_URL}/rest/v1/apps?on_conflict=slug",
    json=payload,
    headers=headers,
)
r.raise_for_status()
```

### Optie B: `supabase-py` SDK

```bash
pip install supabase
```

```python
from supabase import create_client
client = create_client(SUPABASE_URL, SERVICE_KEY)
client.table("apps").upsert(payload, on_conflict="slug").execute()
```

### Tips

- **Service role key NOOIT** in je frontend of Next.js client bundle gebruiken.
  Bewaar 'm in een `.env`-bestand op de scraper-host (bv. Vercel cron, Railway,
  een VPS, of GitHub Actions secret).
- Run de scraper bij voorkeur dagelijks via cron of GitHub Actions schedule.
- Updates verschijnen direct op de site — Next.js haalt data op via Server
  Components met fresh fetches (geen extra revalidate-call nodig in dev; voor
  productie kun je `revalidate` toevoegen aan de page exports).

## Deploy naar Vercel

1. Push naar GitHub.
2. Importeer in Vercel.
3. Voeg env vars toe: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `NEXT_PUBLIC_SITE_URL`.
4. Deploy. `vercel.json` zet region naar Frankfurt voor lage latency richting NL.

## Affiliate disclosure

Alle affiliate links hebben `target="_blank"` en `rel="nofollow sponsored"`
zoals vereist door de Nederlandse wetgeving en Google guidelines. De cookie
banner verschijnt bij eerste bezoek.
