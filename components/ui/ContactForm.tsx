"use client";

const subjectOptions = [
  "General inquiry",
  "Reservation question",
  "Private event / group booking",
  "Birthday or celebration",
  "Feedback",
  "Other",
];

const inputBase =
  "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-[0.925rem] text-stone-100 placeholder:text-stone-500 outline-none transition-colors duration-200 focus:border-[rgba(200,164,106,0.4)] focus:bg-white/[0.05]";

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const subject = data.get("subject")?.toString().trim() || "General inquiry";
    const message = data.get("message")?.toString().trim() || "";

    const body = [`Name: ${name}`, `Email: ${email}`, "", message]
      .join("\n");

    const mailto = `mailto:events@fairwindhotelmiami.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
            Name <span className="text-(--accent-gold)">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
            Email <span className="text-(--accent-gold)">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className={`${inputBase} appearance-none`}
          defaultValue={subjectOptions[0]}
        >
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[#17171b] text-stone-200">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
          Message <span className="text-(--accent-gold)">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your plans or ask a question..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
