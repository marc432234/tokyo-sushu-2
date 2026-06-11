import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";

export function Hero({ content }: { content: HomePageContent["hero"] }) {
  return (
    <>
    <section className="relative isolate min-h-[880px]">
      <div className="absolute inset-0">
        <Image
          src={content.poster.src}
          alt={content.poster.alt}
          width={content.poster.width ?? 1365}
          height={content.poster.height ?? 2048}
          priority
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container-shell grid min-h-[880px] grid-rows-[1fr_auto] pt-(--header-offset)">
        <div className="flex items-center">
          <div className="hero-stack max-w-[41rem] space-y-6 pb-16 pt-[300px] lg:pb-0 lg:pt-[350px] mb-[120px]">
            <span className="eyebrow text-white">{content.eyebrow}</span>

            <h1 className="max-w-[41rem] font-(family-name:--font-display) text-[2.5rem] md:text-[4rem] leading-[1.02] text-white">
              {content.title.split("Sushi").length > 1 ? (
                <>
                  {content.title.split("Sushi")[0]}
                  <span className="text-highlight-underline"><span className="italic text-(--accent-gold)">Sushi</span></span>
                  {content.title.split("Sushi").slice(1).join("Sushi")}
                </>
              ) : (
                content.title
              )}
            </h1>

            <p className="max-w-[41rem] text-base font-light leading-[1.4] tracking-wide text-white/75 sm:text-lg">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <BookingButton className="h-14 px-6 py-[17px] bg-[#ad6d25] flex justify-center items-center gap-2.5 btn-glow">
                <div className="justify-start text-white text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">RESERVE A TABLE</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </BookingButton>
              <Link href={content.secondaryButton.href} className="h-14 px-6 py-[17px] flex justify-center items-center gap-1 btn-glow">
                <div className="justify-start text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">{content.secondaryButton.label}</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container-shell relative z-10" style={{ marginTop: -46, marginBottom: -46 }}>
      <div className="hero-marquee bg-[#ad6d25]/30 py-7 backdrop-blur-[20px] rounded-[8px] text-sm uppercase text-white">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-12 sm:gap-y-4">
          <span className="flex items-center">
            <span className="font-['Outfit'] text-[32px] leading-none">4.8</span>
            <span className="mx-4 inline-block w-px h-4 bg-white" />
            <span className="font-['Outfit'] text-[20px] tracking-wide">Google Ratings</span>
          </span>
          <span className="hidden size-2 rounded-full bg-white sm:block" />
          <span className="flex items-center">
            <span className="font-['Outfit'] text-[32px] leading-none">200+</span>
            <span className="mx-4 inline-block w-px h-4 bg-white" />
            <span className="font-['Outfit'] text-[20px] tracking-wide">Verified Reviews</span>
          </span>
          <span className="hidden size-2 rounded-full bg-white sm:block" />
          <span className="flex items-center">
            <span className="font-['Outfit'] text-[32px] leading-none">#1</span>
            <span className="mx-4 inline-block w-px h-4 bg-white" />
            <span className="font-['Outfit'] text-[20px] tracking-wide">Sushi Speakeasy SoBe</span>
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
