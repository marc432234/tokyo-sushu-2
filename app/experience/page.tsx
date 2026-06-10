import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "@/components/sections/CtaSection";
import { EventOccasions } from "@/components/sections/EventOccasions";
import { SocialProof } from "@/components/sections/SocialProof";
import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import type { CmsImage } from "@/lib/page-content";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("experience");
const sections = pageContent.sections ?? {};
const sectionText = (key: string) => sections[key] as string;
const sectionImage = (key: string) => sections[key] as CmsImage;

const eventImages = [
  "/pictures/18-DSC08011.jpg",
  "/pictures/28-DSC08248.jpg",
  "/pictures/27-DSC08232.jpg",
];

const moments = [
  ["Omotenashi", "Service that feels warm, attentive, and personal."],
  ["Craft Cocktails", "Sculpted pours built for the room after dark."],
  ["Sushi Atmosphere", "Japanese technique with South Beach momentum."],
  ["The Speakeasy", "A hidden, intimate setting made for memorable nights."],
];

const gallery = [
  {
    src: "/pictures/Food2.png",
    alt: "A vivid lobster and sushi plate at Tokyo Club.",
    className: "lg:row-span-2",
  },
  {
    src: "/pictures/Drinks.png",
    alt: "Tokyo Club cocktails and sushi served under dramatic light.",
    className: "",
  },
  {
    src: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    alt: "Lychee orchid cocktails in Tokyo Club's moody room.",
    className: "",
  },
  {
    src: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg",
    alt: "Matcha dessert with mango and pansy.",
    className: "",
  },
  {
    src: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg",
    alt: "Citrus cocktail with dried lime and flowers.",
    className: "lg:col-span-2",
  },
];

export const metadata = createPageMetadata({
  path: "/experience",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.experience,
});

export default function ExperiencePage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Experience"
        path="/experience"
        image={pageOgImages.experience}
        description="Step inside Tokyo Club Sushi Speakeasy — an intimate hidden speakeasy in South Beach with moody lighting, Japanese craftsmanship, and unforgettable nightlife energy."
      />

      <section className="relative isolate min-h-[600px] overflow-hidden pt-(--header-offset)">
        <Image
          src={pageContent.hero.image.src}
          alt={pageContent.hero.image.alt}
          width={pageContent.hero.image.width ?? 1365}
          height={pageContent.hero.image.height ?? 2048}
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-[#170307]/35 to-[#170307]" />

        <div className="container-shell flex min-h-[calc(600px-var(--header-offset))] items-center">
          <div className="max-w-[39rem] pb-14 pt-20">
            <span className="eyebrow text-white">{pageContent.hero.eyebrow}</span>
            <h1 className="mt-7 font-(family-name:--font-display) text-[clamp(3.2rem,6vw,5rem)] leading-[1.02] text-white">
              Tokyo <span className="italic text-(--accent-gold)">Club</span> Sushi Speakeasy
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
              {pageContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="figma-image-card group aspect-[4/3] lg:aspect-[668/468]">
              <Image
                src={sectionImage("storyImage").src}
                alt={sectionImage("storyImage").alt}
                width={sectionImage("storyImage").width ?? 1365}
                height={sectionImage("storyImage").height ?? 2048}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="max-w-[41rem]">
              <span className="eyebrow">{sectionText("storyEyebrow")}</span>
              <h2 className="figma-section-title mt-8 text-white">{sectionText("storyTitle")}</h2>
              <p className="mt-5 text-base font-light leading-[1.55] tracking-wide text-white/65">
                {sectionText("storyBodyOne")}
              </p>
              <p className="mt-5 text-base font-light leading-[1.55] tracking-wide text-white/65">
                {sectionText("storyBodyTwo")}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <BookingButton className="btn-primary">Reserve a Table</BookingButton>
                <Link href="/gallery" className="btn-secondary">See the Space</Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <EventOccasions />
      </Reveal>

      <Reveal delay={90}>
        <section className="relative overflow-hidden bg-[#120205] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell">
            <div className="mx-auto max-w-[50rem] text-center">
              <h2 className="figma-section-title text-white">The Moments Guests Come Back For.</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {moments.map(([title, body]) => (
                <article key={title} className="figma-card p-6">
                  <span className="text-(--accent-red)">◆</span>
                  <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>
                  <p className="mt-3 text-sm font-light leading-[1.5] tracking-wide text-white/60">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell">
            <div className="mx-auto mb-12 max-w-[44rem] text-center">
              <span className="eyebrow justify-center">{sectionText("featuresEyebrow")}</span>
              <h2 className="figma-section-title mt-8 text-white">{sectionText("featuresTitle")}</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  eyebrow: "Authenticity & Craft",
                  title: "Every detail reflects precision.",
                  body: "From traditional sushi preparation techniques to our curated sake selection, every choice is intentional — an immersive journey to the artistry of Japan.",
                  image: "/pictures/21-DSC08073.jpg",
                  alt: "A gold leaf sushi roll revealed from under a glass dome with theatrical smoke.",
                },
                {
                  eyebrow: "Intimacy & Atmosphere",
                  title: "A room that moves with you.",
                  body: "Our small, hidden gem of a space offers an intimate atmosphere — perfect for date nights, celebrations, and private gatherings where everyone feels at home.",
                  image: "/pictures/16-DSC07892.jpg",
                  alt: "A smoky cocktail under a glass cloche on a wooden board.",
                },
              ].map((item) => (
                <article key={item.title} className="figma-image-card group relative min-h-[34rem] lg:min-h-[50rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1365}
                    height={2048}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#6e0d20] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
                    <p className="text-sm font-light uppercase tracking-[0.16em] text-white">{item.eyebrow}</p>
                    <h3 className="mt-4 font-(family-name:--font-display) text-3xl leading-[1.2] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/80">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={140}>
        <section className="relative overflow-hidden bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">{sectionText("creativityEyebrow")}</span>
              <h2 className="figma-section-title mt-8 text-white">{sectionText("creativityTitle")}</h2>
              <p className="mt-5 text-base font-light leading-[1.55] tracking-wide text-white/65">
                {sectionText("creativityBodyOne")}
              </p>
              <p className="mt-5 text-base font-light leading-[1.55] tracking-wide text-white/65">
                {sectionText("creativityBodyTwo")}
              </p>
              <BookingButton className="btn-primary mt-8">Plan Your Night</BookingButton>
            </div>
            <div className="figma-image-card group aspect-[4/5] lg:aspect-[668/540]">
              <Image
                src="/pictures/28-DSC08248.jpg"
                alt="Damask-wallpapered staircase with a gold handrail inside Tokyo Club."
                width={1365}
                height={2048}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={160}>
        <SocialProof content={{ eyebrow: "Guest Voices", title: "The Room Speaks for Itself", description: "" }} />
      </Reveal>

      <Reveal delay={180}>
        <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow">Gallery</span>
                <h2 className="figma-section-title mt-8 text-white">
                  Inside the <span className="italic text-(--accent-red)">Speakeasy</span>
                </h2>
              </div>
              <Link href="/gallery" className="btn-secondary w-fit">Full Gallery</Link>
            </div>

            <div className="mt-12 grid auto-rows-[16rem] gap-4 sm:auto-rows-[20rem] lg:grid-cols-3 lg:auto-rows-[20rem]">
              {gallery.map((asset) => (
                <div key={asset.src} className={`figma-image-card group ${asset.className}`}>
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={1365}
                    height={2048}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CtaSection />
    </>
  );
}
