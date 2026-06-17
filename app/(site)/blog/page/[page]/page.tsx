import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

const PER_PAGE = 4;

export const revalidate = 60;

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  return createPageMetadata({
    path: `/blog/page/${page}`,
    title: `Tokyo Sushi Speakeasy Blog - Page ${page} | Sushi, Cocktails, and South Beach Nights`,
    description: `Page ${page} of the Tokyo Sushi Speakeasy blog — read stories, guides, and updates from the South Beach sushi speakeasy.`,
    image: pageOgImages.home,
  });
}

export default async function BlogPagePaginated({ params }: Props) {
  const { page } = await params;
  const pageNum = Number(page);

  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();

  const posts = await getAllBlogPosts();
  const totalPages = Math.ceil(posts.length / 4);
  if (pageNum > totalPages) notFound();

  return <BlogPageLayout page={pageNum} />;
}
