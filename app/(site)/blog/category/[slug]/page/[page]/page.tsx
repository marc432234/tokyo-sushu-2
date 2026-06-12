import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

const PER_PAGE = 4;

type Props = {
  params: Promise<{ slug: string; page: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const categories = new Map<string, number>();
  posts.forEach((p) =>
    p.categories.forEach((c) => {
      const slug = c.toLowerCase().replace(/\s+/g, "-");
      categories.set(slug, (categories.get(slug) ?? 0) + 1);
    })
  );
  const params: { slug: string; page: string }[] = [];
  categories.forEach((count, slug) => {
    const totalPages = Math.ceil(count / PER_PAGE);
    for (let i = 2; i <= totalPages; i++) {
      params.push({ slug, page: String(i) });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug, page } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return createPageMetadata({
    path: `/blog/category/${slug}/page/${page}`,
    title: `${name} — Page ${page} | Tokyo Club Blog`,
    description: `Page ${page} of ${name} stories on the Tokyo Club blog.`,
    image: pageOgImages.home,
  });
}

export default async function BlogCategoryPagePaginated({ params }: Props) {
  const { slug, page } = await params;
  const pageNum = Number(page);

  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();

  const posts = getAllBlogPosts();
  const filtered = posts.filter((p) =>
    p.categories.some((c) => c.toLowerCase().replace(/\s+/g, "-") === slug)
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  if (pageNum > totalPages) notFound();

  return <BlogPageLayout page={pageNum} categorySlug={slug} />;
}
