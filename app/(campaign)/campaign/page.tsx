import { CampaignHero } from "@/components/sections/CampaignHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventOccasions } from "@/components/sections/EventOccasions";
import { ExperienceStory } from "@/components/sections/ExperienceStory";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import Image from "next/image";
import { StructuredData } from "@/components/seo/StructuredData";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata, getPageSeo } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

export const revalidate = 60;

export async function generateMetadata() {
  const seo = await getPageSeo("home");
  return createPageMetadata({
    path: "/campaign",
    title: seo.title,
    description: seo.description,
    image: pageOgImages.home,
  });
}

const CAMPAIGN_BOOKING_URL = "https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Google&ot_campaign=tokyo_search";

export default async function CampaignPage() {
  const pageContent = await getPageContent("home");
  return (
    <>
      <StructuredData
        name="Tokyo Sushi Speakeasy"
        path="/campaign"
        image={pageOgImages.home}
      />
      <CampaignHero content={pageContent.hero} bookingUrl={CAMPAIGN_BOOKING_URL} />
      {pageContent.experience && (
        <Reveal delay={50}>
          <ExperienceStory content={pageContent.experience} bookingUrl={CAMPAIGN_BOOKING_URL} />
        </Reveal>
      )}
      <section className="relative isolate overflow-hidden bg-[#160306] py-[120px]">
        <Image
          src="/pictures/premium-sushi.png"
          alt="Premium sushi platter at Tokyo Sushi Speakeasy"
          width={380}
          height={570}
          sizes="380px"
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center"
        />
        <div className="pointer-events-none absolute right-[-120px] top-[-107px] size-[336px] rounded-full border-2 border-[#cf183c]/30" />
        <div className="pointer-events-none absolute bottom-[-80px] left-[-51px] size-[193px] rounded-full border-2 border-[#cf183c]/30" />

        <div className="container-shell flex flex-col items-center gap-10">

          <div className="max-w-[984px] text-center text-3xl md:text-5xl font-normal font-['Lora'] leading-[57.60px] text-white/80">&quot;Premium sushi. Sculpted cocktails. A room that moves on its own frequency.&quot;</div>
          <hr className="w-full border-white/16" />
          <div className="text-center text-base font-light font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px] text-[#ac6e26]">Tokyo Sushi Speakeasy — South Beach, Miami</div>
        </div>
      </section>
      {pageContent.menuPreview && (
        <Reveal delay={90}>
          <MenuPreview content={pageContent.menuPreview} />
        </Reveal>
      )}
      <Reveal delay={130}>
        <EventOccasions bookingUrl={CAMPAIGN_BOOKING_URL} />
      </Reveal>
      {pageContent.socialProof && (
        <Reveal delay={170}>
          <SocialProof content={pageContent.socialProof} />
        </Reveal>
      )}
      {pageContent.galleryTeaser && (
        <Reveal delay={210}>
          <GalleryTeaser content={pageContent.galleryTeaser} />
        </Reveal>
      )}
      <CtaSection bookingUrl={CAMPAIGN_BOOKING_URL} />
    </>
  );
}
