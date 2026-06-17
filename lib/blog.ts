import { cache } from "react";

import { getSupabaseClient } from "./supabase";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  featuredImage: string;
  body: string;
  excerpt: string;
};

type BlogPostRow = {
  title: string | null;
  slug: string;
  date: string | null;
  categories: string[] | null;
  featured_image: string | null;
  body: string | null;
};

function createExcerpt(body: string): string {
  // Bodies may be HTML (rich editor) or legacy Markdown. Strip both kinds of
  // markup, then take the first block of prose.
  const plain = body
    .replace(/<\/(p|h[1-6]|li|blockquote|div)>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/&nbsp;/gi, " ");

  return (
    plain
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .find((block) => block !== "")
      ?.slice(0, 180) ?? ""
  );
}

function toPost(row: BlogPostRow): BlogPost {
  const body = row.body ?? "";

  return {
    title: row.title || "Untitled post",
    slug: row.slug,
    date: row.date || new Date().toISOString(),
    categories: row.categories ?? [],
    featuredImage: row.featured_image || "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    body,
    excerpt: createExcerpt(body),
  };
}

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const { data, error } = await getSupabaseClient()
    .from("blog_posts")
    .select("title, slug, date, categories, featured_image, body")
    .order("date", { ascending: false });

  if (error) {
    throw new Error(`Failed to load blog posts: ${error.message}`);
  }

  return (data ?? []).map(toPost);
});

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const { data, error } = await getSupabaseClient()
    .from("blog_posts")
    .select("title, slug, date, categories, featured_image, body")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load blog post "${slug}": ${error.message}`);
  }

  return data ? toPost(data) : undefined;
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
