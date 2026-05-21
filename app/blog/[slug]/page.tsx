import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleBody from "@/components/ArticleBody";
import { getBlog, getBlogItem } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const items = await getBlog();
  return items.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getBlogItem(params.slug);
  if (!item) return { title: "Artikel niet gevonden" };
  return {
    title: item.titel,
    description: item.samenvatting,
    alternates: { canonical: `/blog/${item.slug}` },
    openGraph: {
      title: item.titel,
      description: item.samenvatting,
      type: "article",
      publishedTime: item.gepubliceerd_op
    }
  };
}

export default async function BlogArtikel({ params }: Props) {
  const item = await getBlogItem(params.slug);
  if (!item) notFound();
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-ji-teal text-sm hover:underline">← Terug naar blog</Link>
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
    </article>
  );
}
