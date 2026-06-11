"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactState = {
  success: boolean;
  error: string | null;
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim() || "General inquiry";
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    return { success: false, error: "Unable to process your request right now." };
  }

  const from = "Tokyo Club Sushi Speakeasy <events@fairwindhotelmiami.com>";

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: contactEmail,
        subject: `New inquiry: ${subject}`,
        replyTo: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${subject}`,
          "",
          message,
        ].join("\n"),
      }),

      resend.emails.send({
        from,
        to: email,
        subject: "We received your message — Tokyo Club Sushi Speakeasy",
        text: [
          `Hi ${name},`,
          "",
          "Thank you for reaching out to Tokyo Club Sushi Speakeasy. We've received your message and will get back to you shortly.",
          "",
          "In the meantime, feel free to call us at (786) 728-9318 for anything urgent.",
          "",
          "— The Tokyo Club Sushi Speakeasy Team",
        ].join("\n"),
      }),
    ]);

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
