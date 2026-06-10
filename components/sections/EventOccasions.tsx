import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export function EventOccasions() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#160206]" />
      <Image
        src="/pictures/smoke-bg.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-color-dodge"
      />
      <div className="flex flex-col">
      <div className="px-10 py-[120px] flex flex-col justify-center items-center gap-12">
        <div className="w-full lg:w-[1360px] mx-auto flex justify-between items-start">
          <div className="max-w-[883px] flex flex-col justify-start items-start gap-6">
            <span className="eyebrow text-white">Host your night the Tokyo way</span>
            <div className="text-white text-5xl font-normal font-['Lora'] leading-[57.60px]">Built for celebrations, group plans, and after-dark momentum.</div>
            <div className="text-white text-base font-normal font-['Outfit'] leading-[22.40px]">Open the occasion that matches the night you are planning.</div>
          </div>
          <a href="https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Restaurant%20website&ot_campaign=LP" className="h-12 px-4 py-[13px] outline outline-1 outline-offset-[-1px] outline-[#ac6e26] flex justify-center items-center gap-2.5 btn-glow">
            <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">Plan Your Night</div>
          </a>
        </div>
        <ScrollReveal>
          <div className="grid w-full max-w-[1360px] mx-auto grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden p-6 relative bg-black rounded-lg flex flex-col justify-end items-start gap-4 card-hover group min-h-[28rem] md:min-h-[32rem] lg:min-h-[37.5rem]">
              <img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="/pictures/date-nights.png" alt="" />
              <div className="absolute inset-x-0 bottom-0 h-[331px] bg-gradient-to-b from-[#6e0d20]/0 to-[#6d0c1f]" />
              <div className="relative text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">01</div>
              <div className="relative flex flex-col justify-start items-start gap-4">
                <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Date Nights</div>
                <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Low light, standout cocktails, and a menu built for lingering together.</div>
              </div>
            </div>
            <div className="overflow-hidden p-6 relative bg-black rounded-lg flex flex-col justify-end items-start gap-4 card-hover group min-h-[28rem] md:min-h-[32rem] lg:min-h-[37.5rem]">
              <img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="/pictures/birthday.png" alt="" />
              <div className="absolute inset-x-0 bottom-0 h-[331px] bg-gradient-to-b from-[#6e0d20]/0 to-[#6d0c1f]" />
              <div className="relative text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">02</div>
              <div className="relative flex flex-col justify-start items-start gap-4">
                <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Birthdays</div>
                <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Turn dinner into a celebration with dramatic plates, music, and bottle-worthy energy.</div>
              </div>
            </div>
            <div className="overflow-hidden p-6 relative bg-black rounded-lg flex flex-col justify-end items-start gap-4 card-hover group min-h-[28rem] md:min-h-[32rem] lg:min-h-[37.5rem]">
              <img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="/pictures/groups-and-night-out.png" alt="" />
              <div className="absolute inset-x-0 bottom-0 h-[331px] bg-gradient-to-b from-[#6e0d20]/0 to-[#6d0c1f]" />
              <div className="relative text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">03</div>
              <div className="relative flex flex-col justify-start items-start gap-4">
                <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Groups &amp; Night Out</div>
                <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">From visiting crews to after-dark plans, Tokyo Club Sushi Speakeasy sets the mood for the full evening.</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
