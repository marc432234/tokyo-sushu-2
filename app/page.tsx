import { CtaSection } from "@/components/sections/CtaSection";
import { EventOccasions } from "@/components/sections/EventOccasions";
import { ExperienceStory } from "@/components/sections/ExperienceStory";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import Image from "next/image";
import { StructuredData } from "@/components/seo/StructuredData";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("home");

export const metadata = createPageMetadata({
  path: "/",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.home,
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy"
        path="/"
        image={pageOgImages.home}
      />
      <Hero content={pageContent.hero} />
      <Reveal delay={50}>
        <ExperienceStory content={pageContent.experience} />
      </Reveal>
      <section className="relative isolate overflow-hidden bg-[#160306] py-[120px]">
        <Image
          src="/pictures/premium-sushi.png"
          alt=""
          width={380}
          height={570}
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center"
        />
        <div className="pointer-events-none absolute right-[-120px] top-[-107px] size-[336px] rounded-full border-2 border-[#cf183c]/30" />
        <div className="pointer-events-none absolute bottom-[-80px] left-[-51px] size-[193px] rounded-full border-2 border-[#cf183c]/30" />
          
        <div className="container-shell flex flex-col items-center gap-10">

          <div className="max-w-[984px] text-center text-5xl font-normal font-['Lora'] leading-[57.60px] text-white/80">&quot;Premium sushi. Sculpted cocktails. A room that moves on its own frequency.&quot;</div>
          <hr className="w-full border-white/16" />
          <div className="text-center text-base font-light font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px] text-[#ac6e26]">Tokyo Club Sushi Speakeasy — South Beach, Miami</div>
        </div>
      </section>
      <Reveal delay={90}>
        <MenuPreview content={pageContent.menuPreview} />
      </Reveal>
      <Reveal delay={130}>
        <EventOccasions />
      </Reveal>
      <Reveal delay={170}>
        <SocialProof content={pageContent.socialProof} />
      </Reveal>
      <Reveal delay={210}>
        <GalleryTeaser content={pageContent.galleryTeaser} />
      </Reveal>
      <CtaSection />
    </>
  );
}
