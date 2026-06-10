"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { testimonials } from "@/lib/site";
import type { HomePageContent } from "@/lib/page-content";

export function SocialProof({ content }: { content: HomePageContent["socialProof"] }) {
  const total = testimonials.length;
  const items = [...testimonials, ...testimonials];
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(1);
  const currentRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setVisible(window.innerWidth >= 1024 ? 3 : 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slideTo = useCallback((index: number, animate: boolean) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate ? "transform 500ms ease-in-out" : "none";
    trackRef.current.style.transform = `translateX(calc(-${index * 100}% / ${visible}))`;
  }, [visible]);

  const next = useCallback(() => {
    const nextIndex = currentRef.current + 1;
    currentRef.current = nextIndex;

    if (nextIndex >= total) {
      slideTo(total, true);
      setCurrent(total);
      setTimeout(() => {
        currentRef.current = 0;
        slideTo(0, false);
        setCurrent(0);
      }, 500);
    } else {
      slideTo(nextIndex, true);
      setCurrent(nextIndex);
    }
  }, [total, slideTo]);

  const prev = useCallback(() => {
    const prevIndex = currentRef.current - 1;
    currentRef.current = prevIndex;

    if (prevIndex < 0) {
      slideTo(-1, true);
      setCurrent(-1);
      setTimeout(() => {
        currentRef.current = total - 1;
        slideTo(total - 1, false);
        setCurrent(total - 1);
      }, 500);
    } else {
      slideTo(prevIndex, true);
      setCurrent(prevIndex);
    }
  }, [total, slideTo]);

  const jump = useCallback((index: number) => {
    currentRef.current = index;
    slideTo(index, false);
    setCurrent(index);
  }, [slideTo]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
      <div className="pointer-events-none absolute -left-24 top-8 size-40 rounded-full border border-(--accent-red)/20" />
      <div className="pointer-events-none absolute -right-12 top-0 size-40 rounded-full border border-(--accent-red)/20" />

      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[46rem]">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">{content.title}</h2>
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous review" onClick={prev} className="size-12 border border-(--accent-gold) text-(--accent-gold) cursor-pointer">
              ‹
            </button>
            <button type="button" aria-label="Next review" onClick={next} className="size-12 bg-(--accent-gold) text-[#170307] cursor-pointer">
              ›
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div ref={trackRef} className="flex gap-5" style={{ transform: `translateX(0%)` }}>
            {items.map((testimonial, i) => (
              <article key={`${testimonial.author}-${i}`} className="figma-card min-w-0 shrink-0 grow-0 rounded-[12px] border-0" style={{ flexBasis: `calc(100% / ${visible} - 10px)` }}>
                <div className="flex gap-1 text-(--accent-gold) p-6 pb-0" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="min-h-24 text-base font-light leading-[1.4] tracking-wide text-white/75 px-6">
                  “{testimonial.quote}”
                </p>
                <div className="mt-10 border-t border-white/10 pt-6 px-6 pb-6">
                  <p className="text-base text-white">{testimonial.author}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Verified Google Review</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => jump(i)}
              className={`size-2 rounded-full transition-colors cursor-pointer ${
                i === current % total ? "bg-(--accent-gold)" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
