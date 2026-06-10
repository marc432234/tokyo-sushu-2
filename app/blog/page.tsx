import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";
import { BlogPageLayout } from "@/components/blog/BlogPageLayout";

export const metadata = createPageMetadata({
  path: "/blog",
  title: "Tokyo Club Blog | Sushi, Cocktails, and South Beach Nights",
  description:
    "Read the latest Tokyo Club stories, guides, and updates from the South Beach sushi speakeasy.",
  image: pageOgImages.home,
});

export default function BlogPage() {
  return <BlogPageLayout page={1} />;
}
