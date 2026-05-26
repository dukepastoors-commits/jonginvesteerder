/**
 * Eenmalig seed-script.
 * Pompt alle data uit lib/mockData.ts naar Supabase.
 * Gebruikt upsert op `slug` — bestaande rijen worden bijgewerkt, niet gedupliceerd.
 *
 * Gebruik (lokaal):
 *   PowerShell:
 *     $env:SUPABASE_URL="https://xxx.supabase.co"
 *     $env:SUPABASE_SERVICE_KEY="eyJ..."
 *     npx tsx scripts/seed-supabase.ts
 */

import { createClient } from "@supabase/supabase-js";
import { mockApps, mockNieuws, mockBlog } from "../lib/mockData";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

if (!url || !key) {
  console.error("Zet SUPABASE_URL en SUPABASE_SERVICE_KEY environment variables.");
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  console.log(`Seed start — ${mockApps.length} apps, ${mockNieuws.length} nieuws, ${mockBlog.length} blog`);

  // Apps — strip id zodat Supabase een eigen uuid genereert
  const appsPayload = mockApps.map(({ id, ...rest }) => rest);
  const { error: appsErr, count: appsCount } = await supabase
    .from("apps")
    .upsert(appsPayload, { onConflict: "slug", count: "exact" });
  if (appsErr) console.error("Apps fout:", appsErr);
  else console.log(`✓ Apps geüpsert: ${appsCount ?? appsPayload.length}`);

  // Nieuws
  const nieuwsPayload = mockNieuws.map(({ id, ...rest }) => rest);
  const { error: nErr, count: nCount } = await supabase
    .from("nieuws_artikelen")
    .upsert(nieuwsPayload, { onConflict: "slug", count: "exact" });
  if (nErr) console.error("Nieuws fout:", nErr);
  else console.log(`✓ Nieuws geüpsert: ${nCount ?? nieuwsPayload.length}`);

  // Blog
  const blogPayload = mockBlog.map(({ id, ...rest }) => rest);
  const { error: bErr, count: bCount } = await supabase
    .from("blog_artikelen")
    .upsert(blogPayload, { onConflict: "slug", count: "exact" });
  if (bErr) console.error("Blog fout:", bErr);
  else console.log(`✓ Blog geüpsert: ${bCount ?? blogPayload.length}`);

  console.log("Seed klaar.");
}

main().catch(err => {
  console.error("Onverwachte fout:", err);
  process.exit(1);
});
