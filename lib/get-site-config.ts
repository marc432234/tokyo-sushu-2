import { getSettings } from "./settings";
import { siteConfig } from "./site";

export async function getSiteConfig() {
  const settings = await getSettings();
  const phoneDigits = settings.phoneNumber.replace(/\D/g, "");

  return {
    ...siteConfig,
    bookingUrl: settings.reservationLink,
    phone: settings.phoneNumber,
    phoneHref: `tel:+${phoneDigits}`,
    email: settings.emailAddress,
    address: settings.address,
    // mapsUrl intentionally inherits from siteConfig (a fixed share link).
    visitMenu: settings.visitMenu,
    phoneNumberMenu: settings.phoneNumberMenu,
    addressMenu: settings.addressMenu,
  };
}
