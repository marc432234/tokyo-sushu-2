import fs from "fs";
import path from "path";

const settingsPath = path.join(process.cwd(), "content/pages/settings.json");

export type SiteSettings = {
  phoneNumber: string;
  emailAddress: string;
  address: string;
  reservationLink: string;
  visitMenu: string;
  phoneNumberMenu: string;
  addressMenu: string;
};

export function getSettings(): SiteSettings {
  const source = fs.readFileSync(settingsPath, "utf8");
  return JSON.parse(source) as SiteSettings;
}
