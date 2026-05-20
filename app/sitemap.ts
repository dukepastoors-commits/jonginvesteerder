import type { MetadataRoute } from "next";
import { getApps, getBlog, getNieuws } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonginvesteerder.nl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [apps, nieuws, blog] = await Promise.all([getApps(), getNieuws(), getBlog()]);
  const now = new Date();

  const staticRoutes = ["", "/vergelijk", "/markt", "/nieuws", "/blog", "/over-ons"].map(p => ({
    url: `${base}${p}`,
    lastModified: now
  }));

  return [
    ...staticRoutes,
    ...apps.map(a => ({ url: `${base}/app/${a.slug}`, lastModified: new Date(a.laatste_update) })),
    ...nieuws.map(n => ({ url: `${base}/nieuws/${n.slug}`, lastModified: new Date(n.gepubliceerd_op) })),
    ...blog.map(b => ({ url: `${base}/blog/${b.slug}`, lastModified: new Date(b.gepubliceerd_op) }))
  ];
}
