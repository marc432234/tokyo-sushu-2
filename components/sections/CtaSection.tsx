import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export function CtaSection() {
  return (
    <ScrollReveal>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#0E0204]" />
        <Image
          className="w-[484.56px] h-[727.03px] left-0 top-0 absolute"
          src="/pictures/ready-left.png"
          alt=""
          width={485}
          height={727}
        />
        <Image
          className="w-[484.56px] h-[727.03px] left-0 top-0 absolute origin-top-left -rotate-180"
          src="/pictures/ready-left.png"
          alt=""
          width={485}
          height={727}
        />
        <Image
          className="w-[484.56px] h-[727.03px] right-0 top-0 absolute"
          src="/pictures/ready-right.png"
          alt=""
          width={485}
          height={727}
        />
        <div className="py-[120px]">
        <div className="container-shell flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col justify-center items-center gap-6">
            <span className="eyebrow text-white">Secure Your NighT</span>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="text-center"><span className="text-white text-5xl font-normal font-['Lora'] leading-[57.60px]">Ready for the </span><span className="text-[#cf183c] text-5xl font-normal font-['Lora'] leading-[57.60px]">Ritual</span><span className="text-[#cf183c] text-5xl font-normal font-['Lora'] leading-[57.60px]">?</span></div>
              <div className="max-w-[644px] text-center text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Reservations recommended · Walk-ins welcome when available</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Restaurant%20website&ot_campaign=LP" className="h-14 px-6 py-[17px] bg-[#ac6e26] flex justify-center items-center gap-2.5 btn-glow">
              <div className="text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">Book a Table via OpenTable</div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4168 10H4.16675" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M10.8333 15L15.8333 10L10.8333 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="h-14 px-6 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] flex justify-center items-center gap-1">
              <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">(786) 728-9318</div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4168 10H4.16675" stroke="#AC6E26" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M10.8333 15L15.8333 10L10.8333 5" stroke="#AC6E26" strokeWidth="1.25" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="text-[#ac6e26] text-base font-light font-['Outfit'] uppercase leading-[22.40px] tracking-[3.20px] text-center">Open Wednesday – Monday · 5:00 PM – 12:00 AM · 1000 Collins Ave, Miami Beach</div>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
