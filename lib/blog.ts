import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

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
  try {
    const { data, error } = await getSupabaseClient()
      .from("blog_posts")
      .select("title, slug, date, categories, featured_image, body")
      .order("date", { ascending: false });

    if (error) {
      throw new Error(`Failed to load blog posts: ${error.message}`);
    }

    return (data ?? []).map(toPost);
  } catch {
    // TEMPORARY: fall back to local markdown so pages render without Supabase.
    return getAllBlogPostsLocal();
  }
});

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const { data, error } = await getSupabaseClient()
      .from("blog_posts")
      .select("title, slug, date, categories, featured_image, body")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to load blog post "${slug}": ${error.message}`);
    }

    return data ? toPost(data) : undefined;
  } catch {
    // TEMPORARY: fall back to local markdown so pages render without Supabase.
    const posts = await getAllBlogPostsLocal();
    return posts.find((p) => p.slug === slug);
  }
}

/**
 * TEMPORARY: loads blog posts from the local `content/blog/*.md` files so the
 * blog renders without Supabase. Remove once Supabase is configured.
 */
async function getAllBlogPostsLocal(): Promise<BlogPost[]> {
  const dir = path.join(process.cwd(), "content/blog");
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const { data, content } = matter(await fs.readFile(path.join(dir, file), "utf8"));
      const fallbackSlug = file.replace(/\.md$/, "");
      const categories = Array.isArray(data.categories)
        ? data.categories.map((c: unknown) => asString(c)).filter(Boolean)
        : data.categories
          ? [asString(data.categories)]
          : [];
      const body = content.trim();
      return {
        title: asString(data.title, "Untitled post"),
        slug: asString(data.slug, fallbackSlug),
        date: asString(data.date) || new Date().toISOString(),
        categories,
        featuredImage:
          asString(data.featuredImage) || "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
        body,
        excerpt: createExcerpt(body),
      };
    }),
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
