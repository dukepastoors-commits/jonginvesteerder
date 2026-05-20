import { supabase, hasSupabase } from "./supabase";
import { mockApps, mockBlog, mockNieuws } from "./mockData";
import type { App, Artikel } from "./types";

export async function getApps(): Promise<App[]> {
  if (!hasSupabase || !supabase) return mockApps;
  const { data, error } = await supabase
    .from("apps")
    .select("*")
    .order("beoordeling", { ascending: false });
  if (error || !data?.length) return mockApps;
  return data as App[];
}

export async function getApp(slug: string): Promise<App | null> {
  if (!hasSupabase || !supabase) return mockApps.find(a => a.slug === slug) ?? null;
  const { data } = await supabase.from("apps").select("*").eq("slug", slug).maybeSingle();
  return (data as App) ?? mockApps.find(a => a.slug === slug) ?? null;
}

export async function getNieuws(limit?: number): Promise<Artikel[]> {
  const items = (!hasSupabase || !supabase)
    ? mockNieuws
    : (await supabase.from("nieuws_artikelen").select("*").order("gepubliceerd_op", { ascending: false })).data as Artikel[] | null ?? mockNieuws;
  return limit ? items.slice(0, limit) : items;
}

export async function getNieuwsItem(slug: string): Promise<Artikel | null> {
  if (!hasSupabase || !supabase) return mockNieuws.find(a => a.slug === slug) ?? null;
  const { data } = await supabase.from("nieuws_artikelen").select("*").eq("slug", slug).maybeSingle();
  return (data as Artikel) ?? mockNieuws.find(a => a.slug === slug) ?? null;
}

export async function getBlog(limit?: number): Promise<Artikel[]> {
  const items = (!hasSupabase || !supabase)
    ? mockBlog
    : (await supabase.from("blog_artikelen").select("*").order("gepubliceerd_op", { ascending: false })).data as Artikel[] | null ?? mockBlog;
  return limit ? items.slice(0, limit) : items;
}

export async function getBlogItem(slug: string): Promise<Artikel | null> {
  if (!hasSupabase || !supabase) return mockBlog.find(a => a.slug === slug) ?? null;
  const { data } = await supabase.from("blog_artikelen").select("*").eq("slug", slug).maybeSingle();
  return (data as Artikel) ?? mockBlog.find(a => a.slug === slug) ?? null;
}
