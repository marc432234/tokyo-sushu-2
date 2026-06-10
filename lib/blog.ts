import fs from "fs";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  featuredImage: string;
  body: string;
  excerpt: string;
};

type FrontmatterValue = string | string[];

function parseFrontmatter(source: string): {
  data: Record<string, FrontmatterValue>;
  body: string;
} {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, body: source.trim() };
  }

  const [, rawFrontmatter, body] = match;
  const data: Record<string, FrontmatterValue> = {};
  const lines = rawFrontmatter.split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (!keyValue) {
      continue;
    }

    const [, key, rawValue] = keyValue;

    if (rawValue === "") {
      const values: string[] = [];

      while (lines[index + 1]?.startsWith("  - ")) {
        index += 1;
        values.push(cleanValue(lines[index].replace(/^  - /, "")));
      }

      data[key] = values;
      continue;
    }

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((item) => cleanValue(item))
        .filter(Boolean);
      continue;
    }

    data[key] = cleanValue(rawValue);
  }

  return { data, body: body.trim() };
}

function cleanValue(value: string): string {
  return value.trim().replace(/^["']|["']$/g, "");
}

function toStringValue(value: FrontmatterValue | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function toArrayValue(value: FrontmatterValue | undefined): string[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function createExcerpt(body: string): string {
  return body
    .replace(/^#+\s+/gm, "")
    .replace(/[*_`]/g, "")
    .split(/\n{2,}/)[0]
    ?.trim()
    .slice(0, 180) ?? "";
}

function readPost(fileName: string): BlogPost {
  const source = fs.readFileSync(path.join(blogDirectory, fileName), "utf8");
  const { data, body } = parseFrontmatter(source);
  const fallbackSlug = fileName.replace(/\.md$/, "");

  return {
    title: toStringValue(data.title) || "Untitled post",
    slug: toStringValue(data.slug) || fallbackSlug,
    date: toStringValue(data.date) || new Date().toISOString(),
    categories: toArrayValue(data.categories),
    featuredImage: toStringValue(data.featuredImage) || "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    body,
    excerpt: createExcerpt(body),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .sort((first, second) => {
      return new Date(second.date).getTime() - new Date(first.date).getTime();
    });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
