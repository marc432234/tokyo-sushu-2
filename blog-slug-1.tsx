import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/sections/CtaSection";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { formatPostDate, getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | ${siteConfig.shortName}`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-(--header-offset)">
      <article>
        <header className="section-space pb-10">
          <div className="container-shell">
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-[0.2em] text-(--accent-gold) hover:text-stone-100"
            >
              Back to Blog
            </Link>
            <div className="mt-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {post.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              <h1 className="mt-5 font-display text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">{post.excerpt}</p>
            </div>
          </div>
        </header>

        <div className="container-shell">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[0.5rem] border border-white/10 group">
            <Image
              src={post.featuredImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        <section className="section-space pt-12">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl">
              <MarkdownContent content={post.body} />
            </div>
          </div>
        </section>
      </article>
      <CtaSection />
    </main>
  );
}
