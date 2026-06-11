"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";

const storyImages = [
  {
    src: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    alt: "Lychee orchid cocktails in Tokyo Club's moody room.",
    width: 2048,
    height: 1365,
    className: "aspect-square",
  },
  {
    src: "/pictures/11-beef-sushi-roll-with-cocktail-and-bao.jpg",
    alt: "Beef sushi roll with cocktails and bao.",
    width: 1365,
    height: 2048,
    className: "mx-auto aspect-square w-[69%]",
  },
  {
    src: "/pictures/17-DSC07903.jpg",
    alt: "Tokyo Club dining room detail.",
    width: 1365,
    height: 2048,
    className: "mx-auto aspect-square w-[69%]",
  },
  {
    src: "/pictures/15-japanese-dinner-spread-sushi-bao-dumplings.jpg",
    alt: "Japanese dinner spread with sushi, bao, and dumplings.",
    width: 1365,
    height: 2048,
    className: "aspect-square",
  },
];

const stats = [
  ["2+", "Years in South Beach"],
  ["40+", "Signature Creations"],
  ["∞", "Unforgettable Nights"],
];

export function ExperienceStory({ content }: { content: HomePageContent["experience"] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const pillar = content.pillars[active];

  const swap = useCallback((next: number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setActive(next);
      setFading(false);
    }, 400);
  }, [fading]);

  const goTo = useCallback((i: number) => swap(i), [swap]);

  const advance = useCallback(() => {
    swap((active + 1) % content.pillars.length);
  }, [active, content.pillars.length, swap]);

  useEffect(() => {
    if (fading) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance, fading]);

  return (
    <section className="relative isolate overflow-hidden bg-(--background) py-[clamp(4rem,8vw,7.5rem)]">
      <div className="absolute inset-0 -z-10 bg-[#160206]" />
      <Image
        src="/pictures/smoke-bg.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-color-dodge"
      />
      <div className="pointer-events-none absolute -left-20 top-1/4 size-80 rounded-full border border-(--accent-red)/20" />
      <div className="pointer-events-none absolute -right-20 top-1/4 size-80 rounded-full border border-(--accent-red)/20" />

      <div className="container-shell">
      <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,668px)_300px] lg:items-center lg:gap-[46px]">
        <div className="hidden h-[587px] flex-col justify-between lg:flex">
          {storyImages.slice(0, 2).map((image) => (
            <div key={image.src} className={`figma-image-card group ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[668px] text-center">
          <span className="eyebrow justify-center">{content.eyebrow}</span>
          <div className="mt-8 cursor-pointer" onClick={advance}>
            <h2 className={`figma-section-title text-white min-h-[4.5rem] transition-opacity duration-[400ms] ${fading ? "opacity-0" : "opacity-100"}`}>
              {pillar.title}
            </h2>
            <p className={`mx-auto max-w-[42rem] mt-4 text-base font-light leading-[1.4] tracking-wide text-white/60 min-h-[6rem] transition-opacity duration-[400ms] ${fading ? "opacity-0" : "opacity-100"}`}>
              {pillar.body}
            </p>
          </div>

          <div className="my-20 flex justify-center gap-4">
            {content.pillars.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show: ${content.pillars[i].title}`}
                className={`h-0.5 cursor-pointer transition-all duration-500 ${
                  i === active ? "carousel-bar-active" : "w-6 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="figma-stat p-4 text-left">
                <p className="text-3xl font-semibold text-(--accent-gold)">{value}</p>
                <p className="mt-3 text-sm font-light uppercase leading-[1.4] text-white">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:hidden">
            <BookingButton className="btn-primary">Reserve a Table</BookingButton>
            <Link href="/menu" className="btn-secondary">Explore the Menu</Link>
          </div>
        </div>

        <div className="hidden h-[587px] flex-col justify-between lg:flex">
          {storyImages.slice(2).map((image) => (
            <div key={image.src} className={`figma-image-card group ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
