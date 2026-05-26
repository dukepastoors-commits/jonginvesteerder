import Link from "next/link";
import type { Metadata } from "next";
import AppCard from "@/components/AppCard";
import FAQ from "@/components/FAQ";
import { getApps, getNieuws } from "@/lib/data";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Beste Beleggingsapp voor Beginners 2026",
  description:
    "Vergelijk de beste beleggingsapps voor jongeren in 2026. Eerlijk, actueel en zonder jargon. Start vandaag met beleggen.",
  alternates: { canonical: "/" }
};

export default async function Home() {
  const [apps, nieuws] = await Promise.all([getApps(), getNieuws(3)]);
  const top3 = apps.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-ji-dark text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welke beleggingsapp <span className="text-ji-teal">past bij jou</span>?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Beleggen voor jongeren begint hier. Vergelijk apps, lees eerlijke reviews en
            start vandaag — zonder jargon.
          </p>
          <Link
            href="/vergelijk"
            className="inline-block bg-ji-teal text-ji-dark font-bold px-8 py-4 rounded-md hover:opacity-90 text-lg"
          >
            Vergelijk beleggingsapps
          </Link>
        </div>
      </section>

      {/* TOP 3 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">De 3 populairste apps</h2>
          <p className="text-slate-600 mb-10 text-center">
            Onze top picks voor beginnende beleggers in 2026.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {top3.map(a => <AppCard key={a.id} app={a} />)}
          </div>
        </div>
      </section>

      {/* HOE WERKT HET */}
      <section className="bg-ji-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe werkt het?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "1", t: "Vergelijk apps", d: "Filter op kosten, minimale inleg en wat bij jou past." },
              { n: "2", t: "Lees onze review", d: "Eerlijke voor- en nadelen, gebaseerd op echte ervaring." },
              { n: "3", t: "Open je account", d: "Klik door, open een account en begin met klein bedrag." }
            ].map(s => (
              <div key={s.n} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-ji-teal text-ji-dark font-bold grid place-items-center text-xl mb-4">
                  {s.n}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.t}</h3>
                <p className="text-slate-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAATSTE NIEUWS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Laatste nieuws</h2>
            <Link href="/nieuws" className="text-ji-teal font-semibold hover:underline">
              Alle nieuws →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {nieuws.map(n => (
              <Link
                key={n.id}
                href={`/nieuws/${n.slug}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-video bg-ji-light overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={n.afbeelding_url}
                    alt={n.titel}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="inline-block bg-ji-teal/10 text-ji-teal text-xs font-semibold px-2 py-1 rounded mb-2 self-start">
                    {n.category}
                  </span>
                  <h3 className="font-bold text-ji-dark mb-2">{n.titel}</h3>
                  <p className="text-sm text-slate-600 mb-3 flex-1">{n.samenvatting}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(n.gepubliceerd_op).toLocaleDateString("nl-NL")} · {n.leestijd_minuten} min lezen
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ji-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Veelgestelde vragen</h2>
          <FAQ />
        </div>
      </section>
    </>
  );
}
