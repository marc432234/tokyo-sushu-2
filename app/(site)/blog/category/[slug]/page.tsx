import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  const categories = new Set<string>();
  posts.forEach((p) =>
    p.categories.forEach((c) => categories.add(c.toLowerCase().replace(/\s+/g, "-")))
  );
  return Array.from(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return createPageMetadata({
    path: `/blog/category/${slug}`,
    title: `${name} — Tokyo Club Blog | Sushi, Cocktails, and South Beach Nights`,
    description: `Read ${name} stories on the Tokyo Club blog.`,
    image: pageOgImages.home,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const posts = getAllBlogPosts();
  const hasPosts = posts.some((p) =>
    p.categories.some((c) => c.toLowerCase().replace(/\s+/g, "-") === slug)
  );
  if (!hasPosts) notFound();

  return <BlogPageLayout page={1} categorySlug={slug} />;
}
