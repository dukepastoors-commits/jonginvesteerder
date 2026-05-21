import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Stars from "@/components/Stars";
import AffiliateButton from "@/components/AffiliateButton";
import AppLogo from "@/components/AppLogo";
import { getApp, getApps } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const apps = await getApps();
  return apps.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = await getApp(params.slug);
  if (!app) return { title: "App niet gevonden" };
  return {
    title: `${app.naam} review 2026 — ervaringen, kosten & voor wie?`,
    description: `Onze eerlijke review van ${app.naam}. ${app.beschrijving.slice(0, 130)}`,
    alternates: { canonical: `/app/${app.slug}` },
    openGraph: {
      title: `${app.naam} review`,
      description: app.beschrijving
    }
  };
}

export default async function AppReview({ params }: Props) {
  const app = await getApp(params.slug);
  if (!app) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/vergelijk" className="text-ji-teal text-sm hover:underline">← Terug naar vergelijking</Link>

      <header className="mt-6 mb-10 flex flex-wrap items-center gap-6">
        <AppLogo src={app.logo_url} naam={app.naam} size={80} />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold">{app.naam}</h1>
          <Stars rating={app.beoordeling} />
        </div>
        <AffiliateButton href={app.affiliate_link}>Open account</AffiliateButton>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Overzicht</h2>
        <p className="text-slate-700 leading-relaxed">{app.beschrijving}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-ji-light rounded-xl p-5">
          <h3 className="font-semibold text-ji-dark mb-3">Kosten</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            <li><strong>Minimale inleg:</strong> €{app.minimale_inleg}</li>
            <li><strong>Transactiekosten:</strong> {app.transactiekosten}</li>
            <li><strong>Maandelijkse kosten:</strong> {app.maandelijkse_kosten}</li>
          </ul>
        </div>
        <div className="bg-ji-light rounded-xl p-5">
          <h3 className="font-semibold text-ji-dark mb-3">Eigenschappen</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>Geschikt voor beginners: {app.geschikt_voor_beginners ? "Ja" : "Nee"}</li>
            <li>Crypto beschikbaar: {app.crypto_beschikbaar ? "Ja" : "Nee"}</li>
            <li>Laatste update: {new Date(app.laatste_update).toLocaleDateString("nl-NL")}</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Voor wie?</h2>
        <p className="text-slate-700">{app.voor_wie}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-700">Voordelen</h2>
          <ul className="space-y-2">
            {app.voordelen.map((v, i) => (
              <li key={i} className="flex gap-2 text-slate-700"><span>✓</span>{v}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 text-red-700">Nadelen</h2>
          <ul className="space-y-2">
            {app.nadelen.map((v, i) => (
              <li key={i} className="flex gap-2 text-slate-700"><span>×</span>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ji-dark text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Eindoordeel</h2>
        <div className="flex justify-center mb-3"><Stars rating={app.beoordeling} /></div>
        <p className="text-slate-300 max-w-xl mx-auto mb-6">
          {app.naam} is {app.beoordeling >= 4.3 ? "een sterke keuze" : "een degelijke optie"} voor {app.voor_wie.toLowerCase()}
        </p>
        <AffiliateButton href={app.affiliate_link}>Open een {app.naam} account</AffiliateButton>
      </section>
    </article>
  );
}
