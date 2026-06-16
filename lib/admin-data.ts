import "server-only";

import { getSupabaseClient } from "./supabase";

export type PageRow = {
  key: string;
  content: unknown;
  updated_at: string;
};

export type BlogRow = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  featured_image: string | null;
  body: string;
  updated_at: string;
};

export type CategoryRow = {
  slug: string;
  name: string;
};

export async function listPages(): Promise<PageRow[]> {
  const { data, error } = await getSupabaseClient()
    .from("pages")
    .select("key, content, updated_at")
    .order("key");
  if (error) throw new Error(error.message);
  return (data ?? []) as PageRow[];
}

export async function getPage(key: string): Promise<PageRow | null> {
  const { data, error } = await getSupabaseClient()
    .from("pages")
    .select("key, content, updated_at")
    .eq("key", key)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as PageRow) ?? null;
}

export async function savePage(key: string, content: unknown): Promise<void> {
  const { error } = await getSupabaseClient()
    .from("pages")
    .upsert({ key, content, updated_at: new Date().toISOString() }, { onConflict: "key" });
  if (error) throw new Error(error.message);
}

export async function listPosts(): Promise<BlogRow[]> {
  const { data, error } = await getSupabaseClient()
    .from("blog_posts")
    .select("slug, title, date, categories, featured_image, body, updated_at")
    .order("date", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as BlogRow[];
}

export async function getPost(slug: string): Promise<BlogRow | null> {
  const { data, error } = await getSupabaseClient()
    .from("blog_posts")
    .select("slug, title, date, categories, featured_image, body, updated_at")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as BlogRow) ?? null;
}

export async function savePost(post: {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  featured_image: string | null;
  body: string;
}): Promise<void> {
  const client = getSupabaseClient();

  const { error: postError } = await client
    .from("blog_posts")
    .upsert({ ...post, updated_at: new Date().toISOString() }, { onConflict: "slug" });
  if (postError) throw new Error(postError.message);

  const { error: delError } = await client
    .from("post_categories")
    .delete()
    .eq("post_slug", post.slug);
  if (delError) throw new Error(delError.message);

  if (post.categories.length > 0) {
    const { error: catError } = await client
      .from("post_categories")
      .insert(post.categories.map((cat) => ({ post_slug: post.slug, category_slug: cat })));
    if (catError) throw new Error(catError.message);
  }
}

export async function deletePost(slug: string): Promise<void> {
  const { error } = await getSupabaseClient().from("blog_posts").delete().eq("slug", slug);
  if (error) throw new Error(error.message);
}

export async function listCategories(): Promise<CategoryRow[]> {
  const { data, error } = await getSupabaseClient()
    .from("categories")
    .select("slug, name")
    .order("name");
  if (error) throw new Error(error.message);
  return (data ?? []) as CategoryRow[];
}
