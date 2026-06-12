import { getSettings } from "./settings";
import { siteConfig } from "./site";

export function getSiteConfig() {
  const settings = getSettings();
  const phoneDigits = settings.phoneNumber.replace(/\D/g, "");
  const encodedAddress = settings.address.replace(/\s+/g, "+").replace(/,/g, "%2C");

  return {
    ...siteConfig,
    bookingUrl: settings.reservationLink,
    phone: settings.phoneNumber,
    phoneHref: `tel:+${phoneDigits}`,
    email: settings.emailAddress,
    address: settings.address,
    mapsUrl: `https://maps.google.com/?q=${encodedAddress}`,
    visitMenu: settings.visitMenu,
    phoneNumberMenu: settings.phoneNumberMenu,
    addressMenu: settings.addressMenu,
  };
}
