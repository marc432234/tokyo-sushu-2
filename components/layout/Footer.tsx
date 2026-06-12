import Image from "next/image";
import Link from "next/link";

import { getSiteConfig } from "@/lib/get-site-config";

const siteConfig = getSiteConfig();

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
        alt="Tokyo Club Sushi Speakeasy interior ambiance"
        width={2048}
        height={1365}
        className="absolute inset-0 h-full w-full object-cover"
      />

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
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00024 16.5C13.1423 16.5 16.5002 13.1421 16.5002 9C16.5002 4.85786 13.1423 1.5 9.00024 1.5C4.85811 1.5 1.50024 4.85786 1.50024 9C1.50024 10.0342 1.70955 11.0194 2.08811 11.9158C2.29733 12.4111 2.40194 12.6588 2.41489 12.846C2.42784 13.0332 2.37275 13.2391 2.26256 13.6509L1.50024 16.5L4.34932 15.7377C4.76115 15.6275 4.96707 15.5724 5.15426 15.5854C5.34145 15.5983 5.58913 15.7029 6.08451 15.9121C6.98083 16.2907 7.96607 16.5 9.00024 16.5Z" stroke="white" strokeOpacity="0.72" strokeWidth="1.125" strokeLinejoin="round"/>
                  <path d="M6.44087 9.28298L7.09407 8.4717C7.36938 8.12977 7.70968 7.81147 7.73638 7.35619C7.74306 7.2412 7.66221 6.72493 7.50036 5.69239C7.43676 5.28661 7.0579 5.25 6.72975 5.25C6.30211 5.25 6.08829 5.25 5.87597 5.34698C5.60761 5.46956 5.3321 5.81423 5.27163 6.103C5.2238 6.33147 5.25935 6.4889 5.33045 6.80377C5.63243 8.1411 6.34086 9.46185 7.43937 10.5604C8.53791 11.6589 9.85866 12.3674 11.196 12.6693C11.5108 12.7404 11.6683 12.776 11.8968 12.7281C12.1855 12.6677 12.5302 12.3922 12.6528 12.1238C12.7498 11.9114 12.7498 11.6977 12.7498 11.27C12.7498 10.9418 12.7132 10.563 12.3073 10.4994C11.2748 10.3375 10.7586 10.2567 10.6435 10.2634C10.1883 10.2901 9.86998 10.6304 9.52806 10.9057L8.71678 11.5589" stroke="white" strokeOpacity="0.72" strokeWidth="1.125"/>
                </svg>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.87476 9C1.87476 5.64124 1.87476 3.96187 2.91819 2.91843C3.96162 1.875 5.641 1.875 8.99976 1.875C12.3585 1.875 14.0379 1.875 15.0814 2.91843C16.1248 3.96187 16.1248 5.64124 16.1248 9C16.1248 12.3587 16.1248 14.0381 15.0814 15.0816C14.0379 16.125 12.3585 16.125 8.99976 16.125C5.641 16.125 3.96162 16.125 2.91819 15.0816C1.87476 14.0381 1.87476 12.3587 1.87476 9Z" stroke="white" strokeOpacity="0.72" strokeWidth="1.125" strokeLinejoin="round"/>
                  <path d="M12.6947 6.01953H10.486C9.70313 6.01953 9.06683 6.65111 9.06105 7.43397L8.99708 16.0699M7.56128 10.501H11.1633" stroke="white" strokeOpacity="0.72" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/70 text-sm text-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.87476 9C1.87476 5.64124 1.87476 3.96187 2.91819 2.91843C3.96162 1.875 5.641 1.875 8.99976 1.875C12.3585 1.875 14.0379 1.875 15.0814 2.91843C16.1248 3.96187 16.1248 5.64124 16.1248 9C16.1248 12.3587 16.1248 14.0381 15.0814 15.0816C14.0379 16.125 12.3585 16.125 8.99976 16.125C5.641 16.125 3.96162 16.125 2.91819 15.0816C1.87476 14.0381 1.87476 12.3587 1.87476 9Z" stroke="white" strokeOpacity="0.72" strokeWidth="1.125" strokeLinejoin="round"/>
                  <path d="M12.375 9C12.375 10.864 10.864 12.375 9 12.375C7.13604 12.375 5.625 10.864 5.625 9C5.625 7.13604 7.13604 5.625 9 5.625C10.864 5.625 12.375 7.13604 12.375 9Z" stroke="white" strokeOpacity="0.72" strokeWidth="1.125"/>
                  <path d="M13.1313 4.875H13.1238" stroke="white" strokeOpacity="0.72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                <p className="mt-3 font-light text-white/60">{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-white">Hours:</p>
                <p className="mt-3 font-light leading-[1.4] text-white/60">{siteConfig.hours}</p>
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
