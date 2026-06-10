import { siteConfig } from "@/lib/site";

export function InfoStrip() {
  return (
    <section className="border-y border-white/8 bg-black/25">
      <div className="container-shell flex flex-col gap-3 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-stone-300 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <p>
          <span className="text-[var(--accent-gold)]">Google</span> {siteConfig.reviewSummary}
        </p>
        <p>
          <span className="text-[var(--accent-gold)]">Reviews</span> {siteConfig.reviewCount}
        </p>
        <p>
          <span className="text-[var(--accent-gold)]">Address</span> 1000 Collins Ave
        </p>
        <p>
          <span className="text-[var(--accent-gold)]">Hours</span> {siteConfig.hours}
        </p>
      </div>
    </section>
  );
}
