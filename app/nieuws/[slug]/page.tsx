import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleBody from "@/components/ArticleBody";
import AffiliateButton from "@/components/AffiliateButton";
import { getApps, getNieuws, getNieuwsItem } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const items = await getNieuws();
  return items.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getNieuwsItem(params.slug);
  if (!item) return { title: "Artikel niet gevonden" };
  return {
    title: item.titel,
    description: item.samenvatting,
    alternates: { canonical: `/nieuws/${item.slug}` },
    openGraph: {
      title: item.titel,
      description: item.samenvatting,
      type: "article",
      publishedTime: item.gepubliceerd_op
    }
  };
}

export default async function NieuwsArtikel({ params }: Props) {
  const item = await getNieuwsItem(params.slug);
  if (!item) notFound();
  const apps = await getApps();
  const related = apps.filter(a => item.gerelateerde_apps?.includes(a.slug));

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/nieuws" className="text-ji-teal text-sm hover:underline">← Terug naar nieuws</Link>

      <div className="aspect-video bg-ji-light rounded-xl mt-6 mb-8 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.afbeelding_url}
          alt={item.titel}
          className="w-full h-full object-cover"
        />
      </div>

      <span className="inline-block bg-ji-teal/10 text-ji-teal text-xs font-semibold px-2 py-1 rounded mb-3">
        {item.category}
      </span>
      <h1 className="text-4xl font-extrabold mb-3">{item.titel}</h1>
      <p className="text-sm text-slate-500 mb-8">
        {new Date(item.gepubliceerd_op).toLocaleDateString("nl-NL")} · {item.leestijd_minuten} min lezen
      </p>

      <ArticleBody markdown={item.inhoud} />

      {related.length > 0 && (
        <section className="mt-12 bg-ji-light rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Gerelateerde apps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map(a => (
              <div key={a.id} className="bg-white rounded-lg p-4 flex items-center justify-between gap-3">
                <div>
                  <Link href={`/app/${a.slug}`} className="font-semibold text-ji-dark hover:text-ji-teal">{a.naam}</Link>
                  <p className="text-xs text-slate-500">Vanaf €{a.minimale_inleg}</p>
                </div>
                <AffiliateButton href={a.affiliate_link}>Open account</AffiliateButton>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
