import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CtaSection } from "@/components/sections/CtaSection";

const allCategories = ["Experience", "Sushi Culture", "Cocktails", "Miami Nightlife", "Chef Stories", "Events", "South Beach"];

export function BlogPageLayout({ page }: { page: number }) {
  const posts = getAllBlogPosts();

  return (
    <div className="overflow-x-hidden bg-[#160206] text-white">
      <ScrollReveal>
        <section className="relative isolate overflow-hidden">
          <Image
            src="/pictures/blog-list-bg.png"
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
          <div className="container-shell relative flex flex-col items-start justify-start gap-6 px-4 pb-16 pt-[200px] md:px-10 md:pb-[120px]">
            <div className="relative z-10">
              <span className="eyebrow text-[#ad6d25]">TOKYO JOURNAL</span>
            </div>
            <div className="relative z-10 flex max-w-[570px] flex-col items-start justify-start gap-4">
              <div>
                <span className="font-['Lora'] text-3xl font-normal leading-[76.80px] text-[#ffc107] md:text-5xl lg:text-[64px]">Stories</span>
                <span className="font-['Lora'] text-3xl font-normal leading-[76.80px] text-white md:text-5xl lg:text-[64px]"> from the<br />Speakeasy.</span>
              </div>
              <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white">
                Inside Tokyo Club — from sushi craftsmanship and cocktail rituals to South Beach nightlife, Japanese dining culture, and after-dark experiences.
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-start justify-between gap-8 px-4 pb-12 md:px-10 md:pb-20">
          <div className="flex w-full flex-col items-start justify-start gap-4 md:w-[322px]">
            <div className="btn-glow flex h-14 w-full items-center justify-between bg-[#ad6d25] px-6 py-[17px]">
              <div className="font-['Outfit'] text-base font-normal uppercase leading-[22.40px] tracking-[2.56px] text-white">ALL</div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.417 10H4.16699" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M10.833 15L15.833 10L10.833 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
              </svg>
            </div>
            {allCategories.map((cat) => (
              <div key={cat} className="nav-hover flex h-14 w-full items-center justify-start gap-1 px-6 py-[17px] outline outline-1 outline-offset-[-1px] outline-[#cfa638]/40">
                <div className="font-['Outfit'] text-base font-normal uppercase leading-[22.40px] tracking-[2.56px] text-[#ad6d25]">{cat}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col items-center justify-start gap-16">
            <BlogGrid posts={posts} page={page} />
          </div>
        </div>
      </ScrollReveal>

      <CtaSection />
    </div>
  );
}
