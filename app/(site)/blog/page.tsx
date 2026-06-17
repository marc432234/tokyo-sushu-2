import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

export const revalidate = 60;

export const metadata = createPageMetadata({
  path: "/blog",
  title: "Tokyo Sushi Speakeasy Blog | Sushi, Cocktails, and South Beach Nights",
  description:
    "Read the latest Tokyo Sushi Speakeasy stories, guides, and updates from the South Beach sushi speakeasy.",
  image: pageOgImages.home,
});

export default async function BlogPage() {
  return <BlogPageLayout page={1} />;
}
