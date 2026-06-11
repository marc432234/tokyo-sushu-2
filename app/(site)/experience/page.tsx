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
  {
    title: "Omakase Energy",
    body: "Service that feels warm, attentive, and personal.",
    icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_96_2255)">
        <path d="M23.5294 11.2941H26.3529C26.3529 9.45497 25.6996 8.47492 25.1746 7.68753C24.7507 7.05148 24.4706 6.63144 24.4706 5.64706C24.4706 4.66268 24.7507 4.24264 25.1746 3.60659C25.6996 2.8192 26.3529 1.83925 26.3529 0H23.5294C23.5294 0.984282 23.2492 1.40442 22.8254 2.04047C22.3003 2.82786 21.647 3.80781 21.647 5.64706C21.647 7.48631 22.3003 8.46626 22.8254 9.25365C23.2492 9.8897 23.5294 10.3097 23.5294 11.2941Z" fill="#CF183C"/>
        <path d="M32.4706 16.9411H35.2941C35.2941 15.1018 34.6409 14.1219 34.1158 13.3345C33.6918 12.6985 33.4118 12.2784 33.4118 11.294C33.4118 10.3097 33.6919 9.88961 34.1158 9.25356C34.6409 8.46617 35.2941 7.48613 35.2941 5.64697H32.4706C32.4706 6.63135 32.1905 7.0514 31.7666 7.68744C31.2415 8.47483 30.5883 9.45488 30.5883 11.294C30.5883 13.1332 31.2415 14.1132 31.7666 14.9006C32.1905 15.5367 32.4706 15.9568 32.4706 16.9411Z" fill="#CF183C"/>
        <path d="M12.7059 16.9411H15.5294C15.5294 15.9568 15.8096 15.5367 16.2335 14.9006C16.7585 14.1132 17.4118 13.1333 17.4118 11.294C17.4118 9.45478 16.7585 8.47483 16.2335 7.68744C15.8096 7.0514 15.5294 6.63135 15.5294 5.64697H12.7059C12.7059 7.48613 13.3591 8.46617 13.8842 9.25356C14.3081 9.88951 14.5882 10.3097 14.5882 11.294C14.5882 12.2784 14.308 12.6985 13.8842 13.3345C13.3591 14.1219 12.7059 15.1018 12.7059 16.9411Z" fill="#CF183C"/>
        <path d="M0 39.5293V42.3528H3.36273L6.18626 47.9999H41.8136L44.6372 42.3528H48V39.5293C41.4078 39.5293 6.62729 39.5293 0 39.5293Z" fill="#CF183C"/>
        <path d="M28.2353 21.6326V21.1765C28.2353 18.8411 26.3354 16.9412 24 16.9412C21.6601 16.9412 19.7647 18.8362 19.7647 21.1765V21.6326C12.2987 23.2664 6.35978 29.1165 4.69531 36.7059H43.3047C41.641 29.1205 35.7048 23.2673 28.2353 21.6326Z" fill="#CF183C"/>
      </g>
      <defs>
        <clipPath id="clip0_96_2255">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>,
  },
  {
    title: "Cocktail Rituals",
    body: "Sculpted pours built for the room after dark.",
    icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.6961 1.87697C30.8368 1.87697 26.8029 5.47678 26.1199 10.1496H14.3484L4.79024 0L2.74302 1.92787L10.4856 10.1496H2.62537L19.3242 28.8632V45.188H11.4891V48H30.2361V45.188H22.1363V28.8632L30.3701 19.636C31.9419 20.6731 33.789 21.2342 35.6961 21.2342C41.0329 21.2342 45.3746 16.8923 45.3746 11.5556C45.3746 6.21891 41.0328 1.87697 35.6961 1.87697ZM28.7931 17.1797H12.6674L8.90343 12.9616H32.5569L28.7931 17.1797Z" fill="#CF183C"/>
    </svg>,
  },
  {
    title: "Music & Atmosphere",
    body: "Japanese technique with South Beach momentum.",
    icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_96_2274)">
        <path d="M19.6216 9.98156C17.0865 8.12353 14.4855 5.8335 12.6343 3.05672L11.0138 0.62597C10.6704 0.111002 10.0305 -0.118311 9.43584 0.0601892C8.84259 0.240095 8.4375 0.786658 8.4375 1.40606V23.4696C7.60687 22.9852 6.65409 22.6873 5.625 22.6873C2.52272 22.6873 0 25.21 0 28.3123C0 31.4146 2.52272 33.9372 5.625 33.9372C8.72728 33.9372 11.25 31.4145 11.25 28.3122V6.02335C13.2371 8.5351 15.7228 10.6105 17.9586 12.2502C19.0571 13.055 19.6875 14.2965 19.6875 15.656C19.6875 17.9823 17.7951 19.8747 15.4688 19.8747C14.6915 19.8747 14.0625 20.5037 14.0625 21.281C14.0625 22.0583 14.6915 22.6872 15.4688 22.6872C19.3456 22.6872 22.5 19.5328 22.5 15.656C22.5 13.4243 21.4247 11.304 19.6216 9.98156Z" fill="#CF183C"/>
        <path d="M46.2079 11.4909L26.3329 17.1159C25.7287 17.289 25.3125 17.841 25.3125 18.4686V37.5321C24.4819 37.0477 23.5291 36.7499 22.5 36.7499C19.3977 36.7499 16.875 39.2726 16.875 42.3749C16.875 45.4772 19.3977 47.9999 22.5 47.9999C25.6023 47.9999 28.125 45.4772 28.125 42.3749C28.125 42.0543 28.125 25.1549 28.125 25.1549L45.1875 20.3334V31.9071C44.3569 31.4227 43.4041 31.1249 42.375 31.1249C39.2727 31.1249 36.75 33.6476 36.75 36.7499C36.75 39.8522 39.2727 42.3749 42.375 42.3749C45.4773 42.3749 48 39.8522 48 36.7499C48 36.4293 48 12.8436 48 12.8436C48 11.9135 47.1103 11.236 46.2079 11.4909Z" fill="#CF183C"/>
      </g>
      <defs>
        <clipPath id="clip0_96_2274">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>,
  },
  {
    title: "The Tokyo Gold Roll",
    body: "A hidden, intimate setting made for memorable nights.",
    icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0015 1.50049C18.2895 1.50049 13.1058 2.8647 9.29736 5.12156C5.4889 7.37845 3.00293 10.5948 3.00293 14.2505V33.7505C3.00293 37.4062 5.4889 40.6226 9.29736 42.8794C13.1058 45.1363 18.2895 46.5005 24.0015 46.5005C29.7134 46.5005 34.8927 45.1363 38.7012 42.8794C42.5096 40.6226 45.0015 37.4062 45.0015 33.7505V14.2505C45.0015 10.5948 42.5096 7.37845 38.7012 5.12156C34.8927 2.8647 29.7134 1.50049 24.0015 1.50049ZM24.0015 3.00051C29.4732 3.00051 34.4159 4.32439 37.9365 6.41068C41.4571 8.49696 43.5015 11.2788 43.5015 14.2505C43.5015 17.2222 41.4571 20.0041 37.9365 22.0903C34.4159 24.1766 29.4732 25.5005 24.0015 25.5005C18.5297 25.5005 13.5811 24.1766 10.0605 22.0903C6.53995 20.0041 4.50293 17.2222 4.50293 14.2505C4.50293 11.2788 6.53995 8.49696 10.0605 6.41068C13.5811 4.32439 18.5297 3.00051 24.0015 3.00051ZM24.0015 6.74901C20.1722 6.74901 16.6991 7.51303 14.1196 8.80276C11.5401 10.0925 9.75146 11.9812 9.75146 14.2505C9.75146 16.3051 11.2247 18.038 13.4165 19.3057C20.9403 17.3145 25.9595 12.8958 26.9853 6.91164C26.0224 6.80676 25.0262 6.74901 24.0015 6.74901ZM28.4575 7.11822C28.0562 9.68511 26.4669 12.2995 25.1045 14.066C26.6262 14.9949 30.9746 17.1914 37.4663 16.7422C37.964 15.9792 38.2529 15.1469 38.2529 14.2505C38.2529 11.9812 36.4584 10.0925 33.8789 8.80276C32.3494 8.03806 30.502 7.46362 28.4575 7.11822ZM24.126 15.2188C21.5958 17.9384 17.9292 19.4885 15.4805 20.2827C17.8674 21.2081 20.8065 21.7461 24.0015 21.7461C27.8307 21.7461 31.2994 20.9821 33.8789 19.6924C34.6951 19.2843 35.4199 18.8108 36.0469 18.2905C29.7954 18.3433 25.5477 16.0996 24.126 15.2188Z" fill="#CF183C"/>
    </svg>,
  },
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
            <h1 className="mt-7 font-(family-name:--font-display) text-[2.5rem] md:text-[4rem] leading-[1.02] text-white">
              Tokyo{" "}
              <span className="text-highlight-underline"><span className="italic text-(--accent-gold)">Club Sushi</span></span>{" "}
              Speakeasy
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
            <div className="figma-image-card group aspect-[3/4] lg:aspect-[625/668]">
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
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookingButton className="h-14 px-6 py-[17px] bg-[#ad6d25] flex justify-center items-center gap-2.5 btn-glow">
                  <div className="justify-start text-white text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">RESERVE A TABLE</div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                  </svg>
                </BookingButton>
                <Link href="/gallery" className="h-14 px-6 py-[17px] flex justify-center items-center gap-1 btn-glow">
                  <div className="justify-start text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">See the Space</div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                  </svg>
                </Link>
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
              {moments.map(({ title, body, icon }) => (
                <article key={title} className="figma-card p-6">
                  <span className="text-(--accent-red)">{icon}</span>
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
              <BookingButton className="mt-8 h-14 px-6 py-[17px] bg-[#ad6d25] inline-flex justify-center items-center gap-2.5 btn-glow">
                <div className="justify-start text-white text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">PLAN YOUR NIGHT</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </BookingButton>
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
