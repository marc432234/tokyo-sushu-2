"use client";

import { useState, useCallback, useEffect, useRef, type ReactNode } from "react";

type CarouselProps = {
  children: ReactNode[];
  visibleCount?: number;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
};

// Cards get cramped on small screens, so show fewer at a time: 1 on mobile,
// 2 on tablet, and the full requested count on desktop.
function responsiveVisible(maxVisible: number): number {
  if (typeof window === "undefined") return maxVisible;
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return Math.min(2, maxVisible);
  return maxVisible;
}

export function Carousel({ children, visibleCount: maxVisible = 3, eyebrow, title, description }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const total = items.length;
  // Render with the desktop count on the server / first paint to avoid a
  // hydration mismatch, then narrow it down on the client.
  const [visibleCount, setVisibleCount] = useState(maxVisible);

  useEffect(() => {
    const update = () => setVisibleCount(responsiveVisible(maxVisible));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [maxVisible]);
  // Only clone items for the infinite-loop effect when there are more items than
  // fit on screen. Otherwise the clones render alongside the originals and the
  // same cards visibly repeat.
  const canLoop = total > visibleCount;
  const extended = canLoop ? [...items, ...items.slice(0, visibleCount)] : items;
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

  // When the visible count changes (breakpoint/resize), the slide width and
  // clone set change, so snap back to the start to keep the offset correct.
  useEffect(() => {
    currentRef.current = 0;
    setCurrent(0);
    slideTo(0, false);
  }, [visibleCount, slideTo]);

  const next = useCallback(() => {
    if (!canLoop) return;
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
  }, [total, slideTo, canLoop]);

  const prev = useCallback(() => {
    if (!canLoop) return;
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
  }, [total, slideTo, canLoop]);

  return (
    <div className="w-full min-w-0">
      {(eyebrow || title) && (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[668px]">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <div className="figma-section-title mt-8 text-white">{title}</div>}
            {description && <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/70 mt-4">{description}</div>}
          </div>
          {canLoop && (
            <div className="flex gap-3">
              <button type="button" aria-label="Previous" onClick={prev} className="size-12 cursor-pointer border border-(--accent-gold) text-(--accent-gold)">
                ‹
              </button>
              <button type="button" aria-label="Next" onClick={next} className="size-12 cursor-pointer bg-(--accent-gold) text-[#170307]">
                ›
              </button>
            </div>
          )}
        </div>
      )}
      <div className="relative mt-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-full" style={{ transform: "translateX(0%)" }}>
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
