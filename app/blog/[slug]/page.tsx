import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug, formatPostDate } from "@/lib/blog";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import ScrollReveal from "@/components/ScrollReveal";
import { Carousel } from "@/components/ui/Carousel";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const otherPosts = getAllBlogPosts().filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <div className="overflow-x-hidden bg-[#160206] text-white">
      <ScrollReveal>
        <div className="container-shell relative">
          <div className="flex flex-col items-start justify-between gap-12 px-10 pb-10 pt-[200px] md:flex-row">
          <div className="flex w-full max-w-[652px] flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="inline-flex items-center justify-center bg-[#ad6d25] px-2 py-[5px]">
                <div className="font-['Outfit'] text-xs font-normal uppercase leading-4 tracking-widest text-black">
                  {post.categories[0] || "Blog"}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/60">
                  {formatPostDate(post.date)}
                </div>
                <div className="font-['Lora'] text-2xl font-normal leading-[56px] text-white md:text-[40px]">
                  {post.title}
                </div>
                <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/60">
                  {post.excerpt}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full shrink-0 md:w-[480px]">
            <img className="w-full rounded-lg border border-white/16 object-cover" src={post.featuredImage} alt={post.title} />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto flex max-w-[898px] flex-col items-start justify-start gap-10 px-4">
        <article className="w-full prose prose-invert max-w-none">
          <MarkdownContent content={post.body} />
        </article>
      </div>

      {otherPosts.length > 0 && (
        <ScrollReveal>
          <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-start gap-12 px-4 py-20 md:px-10">
            <Carousel
              visibleCount={3}
              eyebrow="BLOGS"
              title={<>Continue <span className="text-[#cf183c]">the Ritual</span></>}
              description="Inside Tokyo Club — from sushi craftsmanship and cocktail rituals to South Beach nightlife, Japanese dining culture, and after-dark experiences."
            >
              {otherPosts.map((article, i) => (
                <div key={i} className="flex w-full flex-col items-start justify-start gap-6 rounded-lg bg-white/5 p-6 outline outline-1 outline-white/10 card-hover">
                  <div className="img-zoom relative h-48 w-full overflow-hidden rounded-lg bg-white md:h-[300px]">
                    <img className="h-full w-full object-cover" src={article.featuredImage} alt="" />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-4">
                    <div className="flex w-full flex-col items-start justify-start gap-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                        {article.categories.map((cat) => (
                          <span key={cat} className="inline-flex items-center justify-center bg-[#ad6d25] px-2 py-[5px]">
                            <span className="font-['Outfit'] text-xs font-normal uppercase leading-4 tracking-widest text-black">{cat}</span>
                          </span>
                        ))}
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-3">
                        <div className="font-['Lora'] text-2xl font-normal leading-[33.60px] text-white">{article.title}</div>
                        <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/60">{article.excerpt}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
