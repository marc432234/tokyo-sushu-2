import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

const PER_PAGE = 4;

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  return createPageMetadata({
    path: `/blog/page/${page}`,
    title: `Tokyo Club Blog - Page ${page} | Sushi, Cocktails, and South Beach Nights`,
    description: `Page ${page} of the Tokyo Club blog — read stories, guides, and updates from the South Beach sushi speakeasy.`,
    image: pageOgImages.home,
  });
}

export default async function BlogPagePaginated({ params }: Props) {
  const { page } = await params;
  const pageNum = Number(page);

  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();

  const posts = getAllBlogPosts();
  const totalPages = Math.ceil(posts.length / 4);
  if (pageNum > totalPages) notFound();

  return <BlogPageLayout page={pageNum} />;
}
