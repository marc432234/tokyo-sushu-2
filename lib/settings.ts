import { cache } from "react";

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
  const { data, error } = await getSupabaseClient()
    .from("pages")
    .select("content")
    .eq("key", "settings")
    .single();

  if (error || !data) {
    throw new Error(`Failed to load settings: ${error?.message ?? "not found"}`);
  }

  return data.content as SiteSettings;
});
