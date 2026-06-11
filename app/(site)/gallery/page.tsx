import { CtaSection } from "@/components/sections/CtaSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("gallery");

export const metadata = createPageMetadata({
  path: "/gallery",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Gallery"
        path="/gallery"
        image={pageOgImages.gallery}
        description="Browse the gallery of Tokyo Club Sushi Speakeasy — premium sushi, craft cocktails, and moody interior shots from our South Beach hidden bar."
      />

      <Reveal>
        <section className="relative isolate overflow-hidden bg-[#170307] pb-12 pt-[calc(var(--header-offset)+4rem)] lg:pb-16 lg:pt-[calc(var(--header-offset)+5rem)]">
          <div className="pointer-events-none absolute left-1/2 top-24 size-[24rem] -translate-x-1/2 rounded-full border border-(--accent-red)/20 lg:size-[38rem]" />
          <div className="container-shell relative text-center">
            <span className="eyebrow justify-center">{pageContent.hero.eyebrow}</span>
            <h1 className="mx-auto mt-7 max-w-[48rem] font-(family-name:--font-display) text-[2.5rem] md:text-[4rem] leading-[1.05] text-white">
              {pageContent.hero.title.split("frame").length > 1 ? (
                <>
                  {pageContent.hero.title.split("frame")[0]}
                  <span className="text-highlight-underline"><span className="italic text-(--accent-gold)">frame</span></span>
                  {pageContent.hero.title.split("frame").slice(1).join("frame")}
                </>
              ) : (
                pageContent.hero.title
              )}
            </h1>
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className="bg-[#170307] pb-[clamp(4rem,8vw,7.5rem)]">
        <div className="container-shell">
          <GalleryGrid />
        </div>
      </section>
      </Reveal>

      <CtaSection />
    </>
  );
}
