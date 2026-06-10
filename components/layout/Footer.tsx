import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

const explore = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Full Menu" },
  { href: "/experience", label: "The Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact & Directions" },
];

const highlights = ["Nigiri & Sashimi", "Signature Rolls", "Cocktails & Sake", "Bao & Small Plates", "Chef Specials"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pb-8 pt-16">
      <Image
        src="/pictures/footer-bg.png"
        alt=""
        width={2048}
        height={1365}
        className="absolute inset-0 h-full w-full object-cover opacity-18"
      />
      <div className="absolute inset-0 bg-black/78" />

      <div className="container-shell relative">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr]">
          <div className="space-y-6">
            <Image
              src={siteConfig.logo.src}
              alt={`${siteConfig.shortName} logo`}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-auto w-40 sm:w-52"
            />
            <p className="max-w-md text-base font-light leading-[1.4] tracking-wide text-white/60">
              Tokyo Club Sushi Speakeasy blends Japanese craft with South Beach nightlife for a dining experience
              that feels moody, polished, and made to linger.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.phoneHref} className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                W
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                F
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                I
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-(--accent-gold)">Explore</h2>
            <div className="mt-6 grid gap-4 text-base font-light tracking-wide text-white/60">
              {explore.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-(--accent-gold)">Menu Highlights</h2>
            <div className="mt-6 grid gap-4 text-base font-light tracking-wide text-white/60">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-(--accent-gold)">Visit Us</h2>
            <div className="mt-6 space-y-5 text-base tracking-wide">
              <div>
                <p className="text-white">Tokyo Club Sushi Speakeasy</p>
                <p className="mt-3 font-light text-white/60">1000 Collins Ave Miami Beach, FL 33139</p>
              </div>
              <div>
                <p className="text-white">Hours:</p>
                <p className="mt-3 font-light leading-[1.4] text-white/60">Wednesday - Monday<br />5:00 PM - 12:00 AM</p>
                <p className="mt-3 font-light text-(--accent-gold)/70">(Closed Tuesdays)</p>
              </div>
              <a href={siteConfig.phoneHref} className="btn-secondary w-fit">
                {siteConfig.phone}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4165 10H4.1665" stroke="#d38a2c" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="#d38a2c" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm font-light tracking-wide text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p>Tokyo Club Sushi Speakeasy. Premium sushi, cocktails, and nightlife atmosphere in Miami Beach.</p>
          <div className="flex gap-3">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span className="text-white/25">|</span>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
