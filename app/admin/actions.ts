"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import fs from "node:fs";
import path from "node:path";

import {
  createSession,
  destroySession,
  isAuthenticated,
  verifyCredentials,
} from "@/lib/admin-auth";
import { deletePost, savePage, savePost } from "@/lib/admin-data";

export type LoginState = { error: string | null };

async function requireAuth() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
}

function revalidateSite() {
  // Public pages read from Supabase at request time; revalidate any cached output.
  revalidatePath("/", "layout");
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const username = formData.get("username")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  let ok = false;
  try {
    ok = verifyCredentials(username, password);
  } catch {
    return { error: "Admin login is not configured on the server." };
  }

  if (!ok) {
    return { error: "Invalid username or password." };
  }

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

export async function savePostAction(formData: FormData) {
  await requireAuth();

  const slug = formData.get("slug")?.toString().trim() ?? "";
  const title = formData.get("title")?.toString().trim() ?? "";
  const date = formData.get("date")?.toString().trim() || new Date().toISOString();
  const body = formData.get("body")?.toString() ?? "";
  const categories = (formData.get("categories")?.toString() ?? "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  let featuredImage: string | null = null;
  const fileEntry = formData.get("featuredImage");

  if (fileEntry instanceof File && fileEntry.size > 0) {
    const bytes = await fileEntry.arrayBuffer();
    const ext = path.extname(fileEntry.name) || ".jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const dir = path.join(process.cwd(), "public", "uploads", "blog");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, filename), Buffer.from(bytes));
    featuredImage = `/uploads/blog/${filename}`;
  } else {
    featuredImage = formData.get("currentFeaturedImage")?.toString().trim() || null;
  }

  if (!slug || !title) {
    throw new Error("Slug and title are required.");
  }

  await savePost({ slug, title, date, categories, featured_image: featuredImage, body });
  revalidateSite();
  redirect("/admin/blog");
}

export async function deletePostAction(formData: FormData) {
  await requireAuth();
  const slug = formData.get("slug")?.toString().trim();
  if (!slug) throw new Error("Missing slug.");

  await deletePost(slug);
  revalidateSite();
  redirect("/admin/blog");
}

export async function savePageAction(formData: FormData) {
  await requireAuth();

  const key = formData.get("key")?.toString().trim() ?? "";
  const raw = formData.get("content")?.toString() ?? "";

  if (!key) throw new Error("Missing page key.");

  let content: unknown;
  try {
    content = JSON.parse(raw);
  } catch {
    redirect(`/admin/pages/${key}?error=invalid-json`);
  }

  await savePage(key, content);
  revalidateSite();
  redirect("/admin/pages");
}
