"use client";

import { useState } from "react";
import Image from "next/image";

import type { FeaturedItem, MenuSection } from "@/lib/menu-data";
import { Reveal } from "@/components/ui/Reveal";

type MenuTab = "food" | "drinks";

const tabs: { id: MenuTab; label: string }[] = [
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
];

type MenuTabsProps = {
  foodFeatured: FeaturedItem[];
  drinkFeatured: FeaturedItem[];
  foodSections: MenuSection[];
  drinkSections: MenuSection[];
};

export function MenuTabs({
  foodFeatured,
  drinkFeatured,
  foodSections,
  drinkSections,
}: MenuTabsProps) {
  const [active, setActive] = useState<MenuTab>("food");

  const featured = active === "food" ? foodFeatured : drinkFeatured;
  const sections = active === "food" ? foodSections : drinkSections;
  const menuHref =
    active === "food"
      ? "/menu/Tokyo-Sushi-Speakeasy-Menu-Food.png"
      : "/menu/Tokyo-Sushi-Speakeasy-Menu-Drink.png";

  return (
    <>
      {/* ── Pill switcher ── */}
      <div className="flex justify-center pt-10 pb-8">
        <div className="inline-flex rounded-full border border-white/10 bg-white/3 p-1 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative rounded-full px-7 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                active === tab.id
                  ? "bg-linear-to-br from-(--accent-red) to-(--accent-red-hover) text-white shadow-[0_8px_24px_rgba(166,30,45,0.35)]"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured items grid ── */}
      <section className="pb-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <span className="eyebrow justify-center">
              {active === "food" ? "Featured plates" : "Featured cocktails"}
            </span>
            <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
              {active === "food"
                ? "Built to be remembered."
                : "Poured with intention."}
            </h2>
          </div>

          <div
            key={active + "-featured"}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animation: "menuFadeIn 400ms ease-out" }}
          >
            {featured.map((item) => (
              <div
                key={item.name}
                className="group relative isolate overflow-hidden rounded-3xl border border-white/10"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-2 p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-gold)">
                    {item.price}
                  </p>
                  <h3 className="mt-1.5 font-(family-name:--font-display) text-2xl leading-tight tracking-[-0.02em] text-stone-100 sm:text-[1.75rem]">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decorative rule ── */}
      <div className="container-shell">
        <div className="editorial-rule" />
      </div>

      {/* ── Full textual menu ── */}
      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="eyebrow justify-center">
                {active === "food" ? "Full food menu" : "Full drink menu"}
              </span>
              <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                Every {active === "food" ? "dish" : "pour"}, every price.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
                A 20% service charge and sales tax are added to your check.
              </p>
              <a
                href={menuHref}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6"
              >
                View {active === "food" ? "Food" : "Drink"} Menu
              </a>
            </div>
          </Reveal>

          <div
            key={active + "-sections"}
            className="grid gap-8 lg:grid-cols-2"
            style={{ animation: "menuFadeIn 400ms ease-out" }}
          >
            {sections.map((section) => (
              <article
                key={section.title}
                className="panel rounded-3xl p-7 sm:p-9"
              >
                <div className="mb-6 border-b border-white/8 pb-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-(--accent-gold)">
                    {section.accent}
                  </p>
                  <h3 className="mt-2 font-(family-name:--font-display) text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.02em] text-stone-100">
                    {section.title}
                  </h3>
                </div>

                <div className="grid gap-0">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 border-b border-dashed border-white/6 py-3.5 last:border-none last:pb-0"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <p className="text-[0.95rem] font-semibold text-stone-100">
                            {item.name}
                          </p>
                          {item.badge && (
                            <span className="rounded-full border border-(--border-subtle) px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-[0.8rem] leading-relaxed text-stone-500">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 pt-0.5 text-[0.95rem] font-semibold tabular-nums text-stone-200">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
