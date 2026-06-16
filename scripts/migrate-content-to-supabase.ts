/**
 * One-time migration: load the file-based content in `content/` into Supabase.
 *
 * Usage:
 *   1. Create the schema first (run supabase/schema.sql in the Supabase SQL editor).
 *   2. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 *   3. npm run migrate:content
 *
 * Safe to re-run — every write is an upsert keyed by slug/key.
 */
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const root = process.cwd();
const pagesDir = path.join(root, "content/pages");
const categoriesDir = path.join(root, "content/categories");
const blogDir = path.join(root, "content/blog");

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

async function migratePages() {
  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".json"));
  const rows = files.map((file) => ({
    key: file.replace(/\.json$/, ""),
    content: JSON.parse(fs.readFileSync(path.join(pagesDir, file), "utf8")),
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase.from("pages").upsert(rows, { onConflict: "key" });
  if (error) throw error;
  console.log(`✓ pages: ${rows.length} (${rows.map((r) => r.key).join(", ")})`);
}

async function migrateCategories() {
  if (!fs.existsSync(categoriesDir)) return;
  const files = fs.readdirSync(categoriesDir).filter((f) => f.endsWith(".md"));
  const rows = files.map((file) => {
    const { data } = matter(fs.readFileSync(path.join(categoriesDir, file), "utf8"));
    const slug = asString(data.slug, file.replace(/\.md$/, ""));
    return { slug, name: asString(data.name, slug), updated_at: new Date().toISOString() };
  });

  const { error } = await supabase
    .from("categories")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ categories: ${rows.length}`);
}

async function migrateBlog() {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  const rows = files.map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(blogDir, file), "utf8"));
    const fallbackSlug = file.replace(/\.md$/, "");
    const categories = Array.isArray(data.categories)
      ? data.categories.map((c: unknown) => asString(c)).filter(Boolean)
      : data.categories
        ? [asString(data.categories)]
        : [];

    return {
      slug: asString(data.slug, fallbackSlug),
      title: asString(data.title, "Untitled post"),
      date: asString(data.date) || new Date().toISOString(),
      categories,
      featured_image:
        asString(data.featuredImage) ||
        "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
      body: content.trim(),
      updated_at: new Date().toISOString(),
    };
  });

  const { error } = await supabase
    .from("blog_posts")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`✓ blog_posts: ${rows.length}`);
}

async function main() {
  await migratePages();
  await migrateCategories();
  await migrateBlog();
  console.log("\nMigration complete.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
