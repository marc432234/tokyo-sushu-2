import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";

import { getSupabaseClient } from "./supabase";

export type SiteSettings = {
  phoneNumber: string;
  emailAddress: string;
  address: string;
  reservationLink: string;
  visitMenu: string;
  phoneNumberMenu: string;
  addressMenu: string;
};

export const getSettings = cache(async (): Promise<SiteSettings> => {
  try {
    const { data, error } = await getSupabaseClient()
      .from("pages")
      .select("content")
      .eq("key", "settings")
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to load settings: ${error.message}`);
    }

    if (!data) {
      throw new Error(
        'No "settings" row found in the Supabase "pages" table. Run `npm run migrate:content` to populate content.',
      );
    }

    return data.content as SiteSettings;
  } catch {
    // TEMPORARY: fall back to local JSON so pages render without Supabase.
    const filePath = path.join(process.cwd(), "content/pages/settings.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as SiteSettings;
  }
});
