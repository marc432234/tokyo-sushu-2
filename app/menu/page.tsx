"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CtaSection } from "@/components/sections/CtaSection";
import ScrollReveal from "@/components/ScrollReveal";
import { menuSections, type Section, type MenuItem, type CardItem } from "@/lib/menu-content";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("section-01");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const ids = menuSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveTab(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#160206]">

      <section className="relative isolate min-h-[600px] overflow-hidden pt-(--header-offset)">
        <Image
          src="/pictures/menu-banner-bg.png"
          alt="Japanese dinner spread"
          width={1365}
          height={2048}
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="container-shell flex min-h-[calc(600px-var(--header-offset))] items-center">
          <div className="flex w-full flex-col lg:flex-row items-center lg:justify-between gap-16">
            <div className="max-w-[39rem] pb-14 pt-20">
              <span className="eyebrow text-white">South Beach modern Japanese speakeasy</span>
              <h1 className="mt-7 font-(family-name:--font-display) text-[clamp(3.2rem,6vw,5rem)] leading-[1.02] text-white">
                Where every dish tells a story
              </h1>
              <p className="mt-5 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
                Edomae technique meets South Beach decadence — explore our menu of precision-crafted sushi, bold cocktails, and late-night share plates.
              </p>
            </div>
            <div className="w-[577px] inline-flex flex-col justify-start items-start gap-4 max-w-full">
            <div className="self-stretch p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[20px] flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-[#ad6d25] text-base font-light font-['Outfit'] uppercase leading-[22.40px]">Dining Hours</div>
              <div className="self-stretch justify-start text-white text-xl font-normal font-['Outfit'] leading-7">Wednesday – Monday · 5PM – 12AM</div>
            </div>
            <div className="self-stretch p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[20px] flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-[#ad6d25] text-base font-light font-['Outfit'] uppercase leading-[22.40px]">Reservations</div>
              <div className="self-stretch justify-start text-white text-xl font-normal font-['Outfit'] leading-7">Via OpenTable or (786) 728-9318</div>
            </div>
            <div className="self-stretch p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[20px] flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-[#ad6d25] text-base font-light font-['Outfit'] uppercase leading-[22.40px]">Dietary Needs</div>
              <div className="self-stretch justify-start text-white text-xl font-normal font-['Outfit'] leading-7">Gluten-free &amp; vegetarian options available — ask your server</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <div className="sticky top-[var(--header-offset)] z-40 w-full border-b border-white/20 bg-[#160206]">
        <div className="px-4 md:px-10 py-4 flex justify-center items-center gap-6 overflow-x-auto">
          {menuSections.map((s) => (
            <div
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`px-3.5 py-2.5 flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 ${activeTab === s.id ? "border-b-2 border-[#ad6d25]" : "border-b-2 border-transparent"}`}
            >
              <div className={`text-base font-light font-(family-name:--font-body) uppercase leading-[22.40px] tracking-[2.56px] whitespace-nowrap transition-all duration-300 ${activeTab === s.id ? "text-[#ad6d25]" : "text-white/60 hover:text-[#ad6d25]"}`}>
                {s.tabLabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[1360px] mx-auto px-4 md:px-10 py-8 md:py-16 flex flex-col justify-start items-start gap-16 md:gap-[120px]">
        {menuSections.map((section) => (
          <SectionRenderer
            key={section.id}
            section={section}
            sectionRefs={sectionRefs}
          />
        ))}
      </div>
      <CtaSection />
    </div>
  );
}

function SectionRenderer({
  section,
  sectionRefs,
}: {
  section: Section;
  sectionRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) {
  return (
    <ScrollReveal>
      <div
        id={section.id}
        ref={(el) => { sectionRefs.current[section.id] = el; }}
        className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-[43px] scroll-mt-[calc(var(--header-offset)+60px)]"
      >
        <div className="self-stretch flex justify-start items-center gap-[30px]">
          <div className="text-[#cfa638]/40 text-3xl md:text-5xl font-normal font-(family-name:--font-display) leading-[57.60px]">
            {section.number}
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch">
              <span className="text-white text-2xl md:text-5xl font-normal font-(family-name:--font-display) leading-[57.60px]">
                {section.title}
              </span>
              {section.accentTitle && (
                <span className="text-[#cf183c] text-2xl md:text-5xl font-normal font-(family-name:--font-display) italic leading-[57.60px]">
                  {section.accentTitle}
                </span>
              )}
            </div>
            <div className="max-w-full text-white text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
              {section.description}
            </div>
          </div>
        </div>

        {section.type === "items" && <ItemsContent section={section} />}
        {section.type === "cocktails" && <CocktailsContent section={section} />}
        {section.type === "sake" && <SakeContent section={section} />}
        {section.type === "desserts" && <DessertsContent section={section} />}
      </div>
    </ScrollReveal>
  );
}

function ItemsContent({ section }: { section: Section }) {
  const rowCount = section.rows.length;

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      {section.rows.map((row, rowIndex) => {
        const isLastRow = rowIndex === rowCount - 1;
        const showQuote = isLastRow && section.quote;
        const cols = row.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";

        return (
          <div
            key={rowIndex}
            className={`self-stretch grid grid-cols-1 ${cols} gap-6`}
          >
            {row.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
            {showQuote && (
              <div className="p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex justify-between items-center">
                <div className="flex-1 flex flex-col justify-center items-center gap-1.5">
                  <div className="text-center text-[#cf183c]/60 text-2xl font-normal font-(family-name:--font-display) leading-[28.80px]">
                    &ldquo;{section.quote}&rdquo;
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {section.sauces && <SaucesRow sauces={section.sauces} />}
      {section.featured && <FeaturedCard item={section.featured} />}
      {section.imageFeature && <ImageFeatureSection feature={section.imageFeature} />}
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex justify-between items-center">
      <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
        {item.badge && (
          <div className="px-2 py-[5px] bg-[#ad6d25] inline-flex justify-center items-center gap-2.5">
            <div className="text-black text-xs font-normal font-(family-name:--font-body) uppercase leading-4 tracking-widest">
              {item.badge}
            </div>
          </div>
        )}
        <div className="self-stretch text-white text-lg md:text-2xl font-normal font-(family-name:--font-display) leading-[28.80px]">
          {item.name}
        </div>
        <div className="self-stretch text-white text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
          {item.description}
        </div>
      </div>
      <div className="text-[#ad6d25] text-2xl font-normal font-(family-name:--font-display) leading-[28.80px] ml-4">
        {item.price}
      </div>
    </div>
  );
}

function FeaturedCard({ item }: { item: MenuItem & { badge: string } }) {
  return (
    <div className="self-stretch p-4 md:p-6 bg-white/5 rounded-lg card-hover btn-glow outline outline-1 outline-[#ad6d25] flex justify-between items-start gap-6 flex-wrap">
      <div className="flex-1 flex flex-col justify-start items-start gap-6">
        <div className="px-2 py-[5px] bg-[#ad6d25] inline-flex justify-center items-center gap-2.5">
          <div className="text-black text-xs font-normal font-(family-name:--font-body) uppercase leading-4 tracking-widest">
            {item.badge}
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <div className="self-stretch text-white text-lg md:text-2xl font-normal font-(family-name:--font-display) leading-[28.80px]">
            {item.name}
          </div>
          <div className="self-stretch text-white text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
            {item.description}
          </div>
        </div>
      </div>
      <div className="text-[#ad6d25] text-2xl font-normal font-(family-name:--font-display) leading-[28.80px]">
        {item.price}
      </div>
    </div>
  );
}

function ImageFeatureSection({ feature }: { feature: NonNullable<Section["imageFeature"]> }) {
  return (
    <div className="w-full p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex justify-start items-center gap-6 flex-wrap">
      <div className="flex-1 min-w-[300px] h-48 md:h-[300px] relative bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-white/20 img-zoom overflow-hidden group">
        <img className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src={feature.image} alt={feature.title} />
      </div>
      <div className="flex-1 min-w-[300px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="px-2 py-[5px] bg-[#ad6d25] inline-flex justify-center items-center gap-2.5">
            <div className="text-black text-xs font-normal font-(family-name:--font-body) uppercase leading-4 tracking-widest">
              {feature.badge}
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch text-white text-xl md:text-[32px] font-normal font-(family-name:--font-display) leading-[38.40px]">
              {feature.title}
            </div>
            <div className="self-stretch text-white text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
              {feature.description}
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#ad6d25] text-xl md:text-[32px] font-normal font-(family-name:--font-display) leading-[38.40px]">
          {feature.price}
        </div>
      </div>
    </div>
  );
}

function SaucesRow({ sauces }: { sauces: NonNullable<Section["sauces"]> }) {
  return (
    <div className="w-full p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 overflow-hidden">
      <div className="flex justify-start items-center gap-12 flex-wrap">
        <div className="text-white text-xl md:text-[32px] font-normal font-(family-name:--font-body) leading-[44.80px]">
          House Sauces
        </div>
        {sauces.map((sauce) => (
          <div key={sauce.name} className="flex justify-start items-center gap-4">
            <div className="text-white text-xl font-normal font-(family-name:--font-body) leading-7">
              {sauce.name}
            </div>
            <div className="w-4 h-0 rotate-90 outline outline-1 outline-offset-[-0.50px] outline-white/30" />
            <div className="text-white text-xl font-light font-(family-name:--font-body) uppercase leading-7">
              {sauce.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CocktailsContent({ section }: { section: Section }) {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {section.cardItems?.map((item) => (
          <CocktailCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function CocktailCard({ item }: { item: CardItem }) {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex flex-col justify-start items-start gap-6">
      <div className="self-stretch h-40 md:h-60 relative bg-white rounded-lg img-zoom overflow-hidden group">
        {item.image && <img className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.name} />}
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch text-white text-lg md:text-2xl font-normal font-(family-name:--font-display) leading-[33.60px]">
          {item.name}
        </div>
        {item.tags && (
          <div className="flex justify-start items-start gap-3 flex-wrap">
            {item.tags.map((tag) => (
              <div
                key={tag}
                className="px-2 py-[3.50px] outline outline-1 outline-offset-[-1px] outline-[#cfa638]/60 flex justify-center items-center gap-2.5"
              >
                <div className="text-[#cfa638]/60 text-xs font-normal font-(family-name:--font-body) uppercase leading-4 tracking-widest">
                  {tag}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="self-stretch text-white/60 text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
          {item.description}
        </div>
        <div className="self-stretch text-[#ad6d25] text-2xl font-light font-(family-name:--font-body) leading-[33.60px] tracking-wide">
          {item.price}
        </div>
      </div>
    </div>
  );
}

function SakeContent({ section }: { section: Section }) {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {section.cardItems?.map((item) => (
          <SakeCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function SakeCard({ item }: { item: CardItem }) {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        {item.tags && (
          <div className="flex justify-start items-start gap-3">
            {item.tags.map((tag) => (
              <div
                key={tag}
                className="px-2 py-[3.50px] outline outline-1 outline-offset-[-1px] outline-[#cfa638]/60 flex justify-center items-center gap-2.5"
              >
                <div className="text-[#cfa638]/60 text-xs font-normal font-(family-name:--font-body) uppercase leading-4 tracking-widest">
                  {tag}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="self-stretch text-white text-lg md:text-2xl font-normal font-(family-name:--font-display) leading-[33.60px]">
          {item.name}
        </div>
        <div className="self-stretch text-white/60 text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
          {item.description}
        </div>
        {item.extra && (
          <div className="self-stretch text-[#cfa638]/40 text-xs font-light font-(family-name:--font-body) uppercase leading-4 tracking-wide">
            {item.extra}
          </div>
        )}
        <div className="self-stretch text-[#ad6d25] text-2xl font-light font-(family-name:--font-body) leading-[33.60px] tracking-wide">
          {item.price}
        </div>
      </div>
    </div>
  );
}

function DessertsContent({ section }: { section: Section }) {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.cardItems?.map((item) => (
          <DessertCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function DessertCard({ item }: { item: CardItem }) {
  return (
    <div className="p-4 md:p-6 bg-white/5 rounded-lg card-hover outline outline-1 outline-white/10 flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch text-white text-lg md:text-2xl font-normal font-(family-name:--font-display) leading-[33.60px]">
          {item.name}
        </div>
        <div className="self-stretch text-white/60 text-base font-light font-(family-name:--font-body) leading-[22.40px] tracking-wide">
          {item.description}
        </div>
        <div className="self-stretch text-[#ad6d25] text-2xl font-light font-(family-name:--font-body) leading-[33.60px] tracking-wide">
          {item.price}
        </div>
      </div>
    </div>
  );
}
