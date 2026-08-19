import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site";

const DEFAULT_BOOKING_URL = "https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Restaurant%20website&ot_campaign=LP&utm_source=google&utm_medium=cpc&utm_campaign=tokyo_search";

export function CtaSection({ bookingUrl = DEFAULT_BOOKING_URL }: { bookingUrl?: string }) {
  return (
    <ScrollReveal>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#0E0204]" />
        <Image
          className="hidden md:block w-[484.56px] h-[727.03px] left-0 top-0 absolute"
          src="/pictures/ready-left.png"
          alt=""
          aria-hidden="true"
          width={485}
          height={727}
          sizes="485px"
        />
        <Image
          className="hidden md:block w-[484.56px] h-[727.03px] left-0 top-0 absolute origin-top-left -rotate-180"
          src="/pictures/ready-left.png"
          alt=""
          aria-hidden="true"
          width={485}
          height={727}
          sizes="485px"
        />
        <Image
          className="hidden md:block w-[484.56px] h-[727.03px] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 top-0 absolute"
          src="/pictures/ready-right.png"
          alt=""
          aria-hidden="true"
          width={485}
          height={727}
          sizes="485px"
        />
        <div className="py-[120px]">
        <div className="container-shell flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col justify-center items-center gap-6">
            <span className="eyebrow text-white">Secure Your NighT</span>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="text-center"><span className="text-white text-3xl md:text-5xl font-normal font-['Lora'] leading-[57.60px]">Ready for the </span><span className="text-[#cf183c] text-3xl md:text-5xl font-normal font-['Lora'] leading-[57.60px]">Ritual</span><span className="text-[#cf183c] text-3xl md:text-5xl font-normal font-['Lora'] leading-[57.60px]">?</span></div>
              <div className="max-w-[644px] text-center text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Searching for the best sushi speakeasy near you in Miami? Reservations are recommended — walk-ins welcome when available.</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href={bookingUrl} className="w-full md:w-auto h-14 px-6 py-[17px] bg-[#ac6e26] flex justify-center items-center gap-2.5 btn-glow">
                <div className="text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">BOOK NOW</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4168 10H4.16675" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8333 15L15.8333 10L10.8333 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+17867289318" className="btn-secondary w-full md:w-auto gap-1">
                <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">(786) 728-9318</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4168 10H4.16675" stroke="#AC6E26" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M10.8333 15L15.8333 10L10.8333 5" stroke="#AC6E26" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="text-[#cfa638] text-sm font-light font-['Outfit'] uppercase tracking-[2.56px]">Today&apos;s tables are filling fast.</div>
          </div>
          <div className="text-[#ac6e26] text-base font-light font-['Outfit'] uppercase leading-[22.40px] tracking-[3.20px] text-center">Open Wednesday – Sunday · 5:00 PM – 12:00 AM · <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">1000 Collins Ave, Miami Beach</a></div>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
