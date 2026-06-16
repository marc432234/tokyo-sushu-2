import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "tc_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

function getCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!username || !password || !secret) {
    throw new Error(
      "Missing admin auth env vars. Set ADMIN_USERNAME, ADMIN_PASSWORD and ADMIN_SESSION_SECRET (see .env.example).",
    );
  }

  return { username, password, secret };
}

/**
 * Deterministic session token. Bound to the current credentials + secret, so
 * rotating the password or secret invalidates every existing session.
 */
function expectedToken(): string {
  const { username, password, secret } = getCredentials();
  return createHmac("sha256", secret).update(`${username}:${password}`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** Validate a username/password pair against the configured admin credentials. */
export function verifyCredentials(username: string, password: string): boolean {
  const creds = getCredentials();
  return safeEqual(username, creds.username) && safeEqual(password, creds.password);
}

/** Set the signed admin session cookie. Call from a Server Action / Route Handler. */
export async function createSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, expectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

/** Clear the admin session cookie. */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

/** True when the current request carries a valid admin session cookie. */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  try {
    return safeEqual(token, expectedToken());
  } catch {
    return false;
  }
}
