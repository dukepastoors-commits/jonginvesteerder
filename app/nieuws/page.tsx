import type { Metadata } from "next";
import Link from "next/link";
import { getNieuws } from "@/lib/data";

export const metadata: Metadata = {
  title: "Laatste Beursnieuws voor Beginners",
  description:
    "Actueel beursnieuws, uitgelegd voor beginnende beleggers. Aandelen, ETF's, crypto en apps.",
  alternates: { canonical: "/nieuws" }
};

export default async function NieuwsPage() {
  const items = await getNieuws();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-3">Nieuws</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Actueel beursnieuws in begrijpelijke taal. Wat gebeurt er en wat betekent
        het voor jou?
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(n => (
          <Link
            key={n.id}
            href={`/nieuws/${n.slug}`}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="aspect-video bg-ji-light grid place-items-center text-ji-teal text-4xl font-bold">
              {n.category[0]}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="inline-block bg-ji-teal/10 text-ji-teal text-xs font-semibold px-2 py-1 rounded mb-2 self-start">
                {n.category}
              </span>
              <h2 className="font-bold text-ji-dark mb-2">{n.titel}</h2>
              <p className="text-sm text-slate-600 mb-3 flex-1">{n.samenvatting}</p>
              <p className="text-xs text-slate-400">
                {new Date(n.gepubliceerd_op).toLocaleDateString("nl-NL")} · {n.leestijd_minuten} min lezen
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
