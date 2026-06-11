"use client";

import { useState, useCallback, useRef, type ReactNode } from "react";

type CarouselProps = {
  children: ReactNode[];
  visibleCount?: number;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
};

export function Carousel({ children, visibleCount = 3, eyebrow, title, description }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const total = items.length;
  const extended = [...items, ...items.slice(0, 2)];
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const slideTo = useCallback((index: number, animate: boolean) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const item = track.children[0] as HTMLElement | undefined;
    if (!item) return;
    const itemWidth = item.offsetWidth;
    const gap = 24;
    const offset = -(index * (itemWidth + gap));
    track.style.transition = animate ? "transform 500ms ease-in-out" : "none";
    track.style.transform = `translateX(${offset}px)`;
  }, []);

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

  return (
    <div className="w-full min-w-0">
      {(eyebrow || title) && (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[668px]">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <div className="figma-section-title mt-8 text-white">{title}</div>}
            {description && <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/70 mt-4">{description}</div>}
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous" onClick={prev} className="size-12 cursor-pointer border border-(--accent-gold) text-(--accent-gold)">
              ‹
            </button>
            <button type="button" aria-label="Next" onClick={next} className="size-12 cursor-pointer bg-(--accent-gold) text-[#170307]">
              ›
            </button>
          </div>
        </div>
      )}
      <div className="relative mt-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-6" style={{ transform: "translateX(0%)" }}>
          {extended.map((child, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 flex" style={{ flexBasis: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
