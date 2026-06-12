import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CtaSection } from "@/components/sections/CtaSection";

const allCategories = [
  { name: "Experience", slug: "experience" },
  { name: "Sushi Culture", slug: "sushi-culture" },
  { name: "Cocktails", slug: "cocktails" },
  { name: "Miami Nightlife", slug: "miami-nightlife" },
  { name: "Chef Stories", slug: "chef-stories" },
  { name: "Events", slug: "events" },
  { name: "South Beach", slug: "south-beach" },
];

export function BlogPageLayout({ page, categorySlug }: { page: number; categorySlug?: string }) {
  const allPosts = getAllBlogPosts();
  const posts = categorySlug
    ? allPosts.filter((p) => p.categories.some((c) => c.toLowerCase().replace(/\s+/g, "-") === categorySlug))
    : allPosts;

  return (
    <div className="overflow-x-hidden bg-[#160206] text-white">
      <ScrollReveal>
        <section className="relative isolate overflow-hidden">
          <Image
            src="/pictures/blog-list-bg.png"
            alt="Tokyo Club Sushi Speakeasy dining atmosphere"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
          <div className="container-shell relative flex flex-col items-start justify-start gap-6 pb-16 pt-[200px] md:pb-[120px]">
            <div className="relative z-10">
              <span className="eyebrow text-[#ad6d25]">TOKYO JOURNAL</span>
            </div>
            <div className="relative z-10 flex max-w-[570px] flex-col items-start justify-start gap-4">
              <h1 className="font-['Lora'] text-[2.5rem] font-normal leading-[1.2] text-white md:text-[4rem]">
                <span className="text-highlight-underline-amber italic" style={{ color: "#FFC107" }}>Stories</span> from the<br />Speakeasy.
              </h1>
              <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white">
                Inside Tokyo Club — from sushi craftsmanship and cocktail rituals to South Beach nightlife, Japanese dining culture, and after-dark experiences.
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="container-shell flex flex-wrap items-start justify-between gap-8 pb-12 pt-12 md:pb-20 md:pt-20">
          <div className="flex w-full flex-col items-start justify-start gap-4 md:w-[322px]">
            <Link href="/blog" className={`btn-glow flex h-14 w-full items-center justify-between px-6 py-[17px] ${!categorySlug ? "bg-[#ad6d25]" : "outline outline-1 outline-offset-[-1px] outline-[#cfa638]/40"}`}>
              <div className={`font-['Outfit'] text-base font-normal uppercase leading-[22.40px] tracking-[2.56px] ${!categorySlug ? "text-white" : "text-[#ad6d25]"}`}>ALL</div>
              {!categorySlug && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.417 10H4.16699" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.833 15L15.833 10L10.833 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
            {allCategories.map((cat) => {
              const isActive = categorySlug === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className={`nav-hover flex h-14 w-full items-center justify-start gap-1 px-6 py-[17px] ${isActive ? "bg-[#ad6d25]" : "outline outline-1 outline-offset-[-1px] outline-[#cfa638]/40"}`}
                >
                  <div className={`font-['Outfit'] text-base font-normal uppercase leading-[22.40px] tracking-[2.56px] ${isActive ? "text-white" : "text-[#ad6d25]"}`}>{cat.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-1 flex-col items-center justify-start gap-16">
            <BlogGrid posts={posts} page={page} categorySlug={categorySlug} />
          </div>
        </div>
      </ScrollReveal>

      <CtaSection />
    </div>
  );
}
