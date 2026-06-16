"use client";

import { useState, type FormEvent } from "react";

const WEBHOOK = process.env.NEXT_PUBLIC_ZAPIER_CONTACT_WEBHOOK ?? "";

const field =
  "w-full bg-white/5 rounded-2xl outline outline-1 outline-white/10 px-4 py-3 md:px-5 md:py-3.5 text-white text-sm md:text-base font-light font-['Outfit'] leading-7 tracking-wide placeholder:text-white/50 focus:outline-2 focus:outline-[#ad6d25] transition-all";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEBHOOK) return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Webhook error");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 px-4 py-8 md:px-6 md:py-[49px] bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex flex-col justify-start items-center gap-4 md:gap-8"
    >
      <div className="self-stretch text-center text-white text-2xl md:text-[32px] font-normal font-['Lora'] leading-[1.2] md:leading-[38.40px]">
        Drop a Message
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
        <input name="name" required placeholder="Name" className={field} />
        <input name="email" type="email" required placeholder="Email" className={field} />
        <input name="phone" placeholder="Phone Number" className={field} />
        <input name="subject" required placeholder="Subject" className={field} />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows={5}
          className={`${field} h-36 md:h-40 resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-stretch h-14 px-6 py-[17px] bg-[#ad6d25] flex justify-center items-center gap-2.5 btn-glow disabled:opacity-50"
      >
        <span className="text-black text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">
          {status === "sending" ? "Sending..." : status === "done" ? "Sent!" : status === "error" ? "Error — try again" : "Send Message"}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4165 10H4.1665" stroke="black" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
          <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="black" strokeWidth="1.25" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
