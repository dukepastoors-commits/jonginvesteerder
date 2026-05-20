import type { Metadata } from "next";
import { getApps } from "@/lib/data";
import VergelijkClient from "./VergelijkClient";

export const metadata: Metadata = {
  title: "Beleggingsapps Vergelijken 2026 — Eerlijk & Actueel",
  description:
    "Vergelijk de beste beleggingsapps van Nederland in 2026. Filter op kosten, minimale inleg, crypto en geschikt voor beginners.",
  alternates: { canonical: "/vergelijk" }
};

export default async function VergelijkPage() {
  const apps = await getApps();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-3">Beleggingsapps vergelijken</h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        Vergelijk in één oogopslag op kosten, minimale inleg en functies. Gebruik de
        filters om te vinden wat bij jou past.
      </p>
      <VergelijkClient apps={apps} />
    </div>
  );
}
