import Image from "next/image";
import Link from "next/link";

import { featuredItems } from "@/lib/menu-data";
import type { HomePageContent } from "@/lib/page-content";
import { signatureCategories } from "@/lib/site";

const categoryPrices = ["From $10", "From $22", "From $16", "From $9", "Seasonal", "From $15"];

export function MenuPreview({ content }: { content: HomePageContent["menuPreview"] }) {
  return (
    <section className="relative overflow-hidden bg-[#160206] py-14 lg:py-[clamp(4rem,8vw,7.5rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-[30%] h-[50rem] bg-[url('/pictures/sushi-bg-10.png')] bg-cover bg-center" />
      <div className="container-shell flex flex-col justify-start items-center gap-12">
        <div className="flex flex-col justify-start items-center gap-6">
          <span className="eyebrow text-white">Japanese speakeasy meets Miami nightlife</span>
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="max-w-[898px] text-center text-[#cf183c] text-5xl font-normal font-['Lora'] leading-[57.60px]">Sushi precision, cocktail drama, and late-night share plates.</div>
            <div className="max-w-[812px] text-center text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Edomae technique meets South Beach decadence. From clean-cut nigiri to 24K gold-topped signature rolls — every dish is built for the table after dark.</div>
          </div>
        </div>
          <div className="w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-6 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">01</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Nigiri</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Clean cuts, precise seasoning, and fish-forward restraint.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">From $10</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 border-t border-[#cfa638]/20 lg:border-t-0 lg:border-l border-[#cfa638]/20 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">02</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Sashimi</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Elegant slices plated with sharp contrast and fresh texture.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">From $22</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 border-t border-[#cfa638]/20 lg:border-t-0 lg:border-l border-[#cfa638]/20 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">03</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Sushi Rolls</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Decadent house signatures made for the late-night table.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">From $16</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-t border-[#cfa638]/20">
            <div className="flex-1 p-6 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">01</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Cocktails</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Floral, smoky, citrus-led pours crafted for the room after dark.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">From $9</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 border-t border-[#cfa638]/20 lg:border-t-0 lg:border-l border-[#cfa638]/20 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">02</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Sake</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Crisp pours and bottle service pairings for shared experiences.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">Seasonal</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 border-t border-[#cfa638]/20 lg:border-t-0 lg:border-l border-[#cfa638]/20 flex flex-col justify-start items-start gap-10 overflow-hidden menu-category-card">
              <div className="text-white/20 text-[40px] font-normal font-['Lora'] leading-[56px]">03</div>
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">Chef Specials</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Seasonal moments and premium plates designed to turn heads.</div>
                </div>
                <div className="px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-[#ac6e26] text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">From $15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell pt-20 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex-1 p-6 bg-white/5 rounded-lg outline outline-1 outline-[#cfa638]/30 backdrop-blur-[10px] flex flex-col lg:flex-row items-center gap-6 card-hover">
            <div className="w-full lg:w-[207px] h-60 relative bg-white rounded-sm outline outline-1 outline-white/20 overflow-hidden shrink-0 group">
              <img className="w-[207px] h-[310px] left-0 top-[-23px] absolute transition duration-700 group-hover:scale-105" src="/pictures/tokyo-gold-roll.png" alt="" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="px-2 py-[5px] bg-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-black text-xs font-normal font-['Outfit'] uppercase leading-4 tracking-widest">Signature</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="text-white text-xl font-normal font-['Lora'] leading-7">Tokyo Gold Roll</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Shrimp tempura, eel, and avocado roll topped with tuna, ikura, spicy mayo, eel sauce, and 24K gold leaf, cut into 8 pieces.</div>
                </div>
              </div>
              <div className="text-[#ac6e26] text-2xl font-normal font-['Lora'] leading-[33.60px]">$35</div>
            </div>
          </div>
          <div className="flex-1 p-6 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[10px] flex flex-col lg:flex-row items-center gap-6 card-hover">
            <div className="w-full lg:w-[207px] h-60 relative bg-white rounded-sm outline outline-1 outline-white/20 overflow-hidden shrink-0 group">
              <img className="w-[207px] h-[310px] left-0 top-[-23px] absolute transition duration-700 group-hover:scale-105" src="/pictures/wagyu-truffle-roll.png" alt="" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="px-2 py-[5px] bg-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-black text-xs font-normal font-['Outfit'] uppercase leading-4 tracking-widest">Signature</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="text-white text-xl font-normal font-['Lora'] leading-7">Wagyu Truffle Roll</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Beef tartare mixed with chives, topped with wagyu slices, truffle mayo, and crispy garlic, cut into 8 pieces.</div>
                </div>
              </div>
              <div className="text-[#ac6e26] text-2xl font-normal font-['Lora'] leading-[33.60px]">$34</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex-1 p-6 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[10px] flex flex-col lg:flex-row items-center gap-6 card-hover">
            <div className="w-full lg:w-[207px] h-60 relative bg-white rounded-sm outline outline-1 outline-white/20 overflow-hidden shrink-0 group">
              <img className="w-[207px] h-[310px] left-0 top-[-23px] absolute transition duration-700 group-hover:scale-105" src="/pictures/south-beath-roll.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="px-2 py-[5px] bg-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-black text-xs font-normal font-['Outfit'] uppercase leading-4 tracking-widest">Popular</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="text-white text-xl font-normal font-['Lora'] leading-7">South Beach Roll</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Salmon, shrimp, and avocado topped with crispy crab and caviar, cut into 8 pieces.</div>
                </div>
              </div>
              <div className="text-[#ac6e26] text-2xl font-normal font-['Lora'] leading-[33.60px]">$24</div>
            </div>
          </div>
          <div className="flex-1 p-6 bg-white/5 rounded-lg outline outline-1 outline-white/10 backdrop-blur-[10px] flex flex-col lg:flex-row items-center gap-6 card-hover">
            <div className="w-full lg:w-[207px] h-60 relative bg-white rounded-sm outline outline-1 outline-white/20 overflow-hidden shrink-0 group">
              <img className="w-[207px] h-[310px] left-0 top-[-23px] absolute transition duration-700 group-hover:scale-105" src="/pictures/lychee-martini.png" alt="" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="px-2 py-[5px] bg-[#ac6e26] inline-flex justify-center items-center gap-2.5">
                  <div className="text-black text-xs font-normal font-['Outfit'] uppercase leading-4 tracking-widest">Signature</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="text-white text-xl font-normal font-['Lora'] leading-7">Lychee Martini</div>
                  <div className="text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">Vodka, lychee sake, lychee juice, and fresh lime. Served in a chilled martini glass.</div>
                </div>
              </div>
              <div className="text-[#ac6e26] text-2xl font-normal font-['Lora'] leading-[33.60px]">$18</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell flex flex-col justify-center items-center gap-10 pt-20">
        <div className="text-center"><span className="text-white text-[40px] font-normal font-['Lora'] leading-[48px]">The full </span><span className="text-[#cf183c] text-[40px] font-normal font-['Lora'] leading-[48px]">ritual</span><span className="text-white text-[40px] font-normal font-['Lora'] leading-[48px]"> awaits.</span></div>
        <div className="h-14 px-6 py-[17px] bg-[#ac6e26] inline-flex justify-center items-center gap-2.5 btn-glow">
          <div className="text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">View the Complete Menu</div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4168 10H4.16675" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M10.8333 15L15.8333 10L10.8333 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
