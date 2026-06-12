export type SiteImageAsset = {
  src: string;
  width: number;
  height: number;
};

export type GalleryAsset = SiteImageAsset & {
  alt: string;
  category: "food" | "cocktails" | "vibe";
};

const logoMark: SiteImageAsset = {
  src: "/logo/tokyo-club-logo.svg",
  width: 1110,
  height: 480,
};

const cocktailHero: SiteImageAsset = {
  src: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
  width: 2048,
  height: 1365,
};

const menuSpread: SiteImageAsset = {
  src: "/pictures/05-japanese-dishes-spread-with-cocktail.jpg",
  width: 1365,
  height: 2048,
};

const flamingRoll: SiteImageAsset = {
  src: "/pictures/07-wagyu-beef-sushi-roll-flambeed.jpg",
  width: 1365,
  height: 2048,
};

const cocktailCloseup: SiteImageAsset = {
  src: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg",
  width: 1365,
  height: 2048,
};

const tableSetting: SiteImageAsset = {
  src: "/pictures/09-gyoza-with-cocktail-and-salad-table-setting.jpg",
  width: 1365,
  height: 2048,
};

const baoBun: SiteImageAsset = {
  src: "/pictures/10-salmon-bao-bun-with-edible-flowers.jpg",
  width: 1365,
  height: 2048,
};

const matchaDessert: SiteImageAsset = {
  src: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg",
  width: 2048,
  height: 1365,
};

const dinnerSpread: SiteImageAsset = {
  src: "/pictures/15-japanese-dinner-spread-sushi-bao-dumplings.jpg",
  width: 1365,
  height: 2048,
};

export const siteConfig = {
  name: "Tokyo Club Sushi Speakeasy",
  shortName: "Tokyo Club",
  title: "Tokyo Club Sushi Speakeasy | Modern Japanese Speakeasy in South Beach",
  description:
    "A modern Japanese speakeasy in South Beach where premium sushi, bold cocktails, karaoke energy, and late-night atmosphere meet.",
  logo: logoMark,
  bookingUrl: "https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Restaurant%20website&ot_campaign=LP&utm_source=google&utm_medium=cpc&utm_campaign=tokyo_search",
  phone: "(786) 728-9318",
  phoneHref: "tel:+17867289318",
  email: "events@fairwindhotelmiami.com",
  address: "1000 Collins Ave, Miami Beach, FL 33139",
  mapsUrl: "https://maps.google.com/?q=1000+Collins+Ave+Miami+Beach+FL+33139",
  hours: "Wed-Mon 5PM-12AM",
  utilityCopy: "Sushi. Cocktails. Karaoke. South Beach after dark.",
  reviewSummary: "4.8 Google rating",
  reviewCount: "200+ reviews",
  visitMenu: "Visit Us",
  phoneNumberMenu: "Call Us",
  addressMenu: "Find Us",
  social: {
    facebook: "https://www.facebook.com/tokyosushispeakeasy",
    instagram: "https://www.instagram.com/tokyosushispeakeasy/",
    whatsapp: "https://wa.me/17867289318",
    website: "https://www.tokyosushispeakeasy.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/experience", label: "Experience" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export const siteUrl = new URL(siteConfig.social.website);

export const heroGallery: GalleryAsset[] = [
  {
    ...dinnerSpread,
    alt: "A cocktail and premium sushi dishes staged on a dramatic black table.",
    category: "food",
  },
  {
    ...cocktailHero,
    alt: "Signature cocktails with floral garnishes against a dark speakeasy backdrop.",
    category: "cocktails",
  },
  {
    ...flamingRoll,
    alt: "A wagyu sushi roll finished tableside with a burst of flame.",
    category: "food",
  },
];

export const signatureCategories = [
  {
    name: "Nigiri",
    description: "Clean cuts, precise seasoning, and fish-forward restraint.",
  },
  {
    name: "Sashimi",
    description: "Elegant slices plated with sharp contrast and fresh texture.",
  },
  {
    name: "Sushi Rolls",
    description: "Decadent house signatures made for the late-night table.",
  },
  {
    name: "Cocktails",
    description: "Floral, smoky, citrus-led pours crafted for the room after dark.",
  },
  {
    name: "Sake",
    description: "Crisp pours and bottle service pairings for shared experiences.",
  },
  {
    name: "Chef Specials",
    description: "Seasonal moments and premium plates designed to turn heads.",
  },
];

export const experiencePillars = [
  {
    title: "Japanese craft, Miami pulse",
    body: "Tokyo Club Sushi Speakeasy balances refined technique with a nightlife energy that feels unmistakably South Beach. Every plate is built with the precision of an Edomae kitchen — clean cuts, seasonal instinct, and a respect for simplicity — then served inside a room that moves to its own rhythm.",
    image: {
      src: "/pictures/02-seared-tuna-tataki-with-microgreens.jpg",
      alt: "Seared tuna tataki plated with microgreens showcasing Japanese precision.",
      width: 1365,
      height: 2048,
    },
  },
  {
    title: "Dinner becomes a scene",
    body: "Every table is staged with contrast, glow, and shareable moments designed for dates and celebrations. The room is low-lit, the plating is bold, and the energy builds as the night goes on. Whether it's a birthday, anniversary, or a spontaneous group dinner, the setting does the heavy lifting.",
    image: {
      src: "/pictures/11-beef-sushi-roll-with-cocktail-and-bao.jpg",
      alt: "A dramatic dinner spread with beef sushi rolls, cocktails, and bao buns.",
      width: 1365,
      height: 2048,
    },
  },
  {
    title: "Cocktails with a point of view",
    body: "Bright citrus, floral notes, and bold presentation keep the drinks as memorable as the sushi. Our bar program leans into lychee, yuzu, orchid, and unexpected botanicals — each pour designed to photograph as well as it tastes. Sake flights and bottle service round out the after-dark experience.",
    image: {
      src: "/pictures/06-lychee-orchid-cocktail-closeup.jpg",
      alt: "A lychee orchid cocktail in dramatic closeup with floral garnish.",
      width: 1365,
      height: 2048,
    },
  },
];

export const testimonials = [
  {
    quote:
      "Incredible sushi spot in the heart of South Beach. Beautiful interior and layout. The Japanese dragon cocktail was exquisite.",
    author: "Arroyo Arroyo",
  },
  {
    quote:
      "Absolutely beautiful. The sushi was delicious, everything tasted fresh, and the cocktails were perfectly flavored.",
    author: "Liz Lopez",
  },
  {
    quote:
      "A truly exquisite culinary experience with a warm atmosphere, impeccably crafted dishes, and incredibly fresh ingredients.",
    author: "Yoan Q",
  },
];

export const eventOccasions = [
  {
    title: "Date Nights",
    description: "Low light, standout cocktails, and a menu built for lingering together.",
  },
  {
    title: "Birthdays",
    description: "Turn dinner into a celebration with dramatic plates, music, and bottle-worthy energy.",
  },
  {
    title: "Groups & Nights Out",
    description: "From visiting crews to after-dark plans, Tokyo Club Sushi Speakeasy sets the mood for the full evening.",
  },
];

export const faqItems = [
  {
    question: "Do I need a reservation?",
    answer: "Reservations are recommended for prime dinner hours, celebrations, and larger groups.",
  },
  {
    question: "Do you host group events?",
    answer: "Yes. We can help plan birthdays, nights out, and private or semi-private group experiences.",
  },
  {
    question: "Is Tokyo Club Sushi Speakeasy good for a date night?",
    answer: "Absolutely. The moody lighting, craft cocktails, and shareable menu were made for it.",
  },
  {
    question: "Where are you located?",
    answer: "Find Tokyo Club Sushi Speakeasy inside the Fairwind Hotel area at 1000 Collins Ave in the heart of South Beach.",
  },
];

export const galleryAssets: GalleryAsset[] = [
  ...heroGallery,
  {
    ...menuSpread,
    alt: "A vertical spread of tempura, sashimi, and cocktail service with dramatic lighting.",
    category: "food",
  },
  {
    ...cocktailCloseup,
    alt: "A citrus-forward cocktail with dried lime and floral garnish.",
    category: "cocktails",
  },
  {
    ...tableSetting,
    alt: "A moody table scene with gyoza, cocktails, and layered plating.",
    category: "vibe",
  },
  {
    ...baoBun,
    alt: "A bao bun styled with bright edible flowers for a refined late-night menu moment.",
    category: "food",
  },
  {
    ...matchaDessert,
    alt: "A plated matcha dessert finished with mango and floral garnish.",
    category: "food",
  },
];

export const pageOgImages = {
  home: heroGallery[0],
  menu: {
    ...menuSpread,
    alt: "A dramatic spread of Japanese dishes and cocktails at Tokyo Club Sushi Speakeasy.",
  },
  experience: {
    src: "/pictures/27-DSC08232.jpg",
    width: 1365,
    height: 2048,
    alt: "A moody table setting inside Tokyo Club Sushi Speakeasy with Japanese scroll art and dark slatted walls.",
  },
  gallery: galleryAssets[0],
  contact: {
    ...tableSetting,
    alt: "Moody table setting with cocktails and Japanese dishes at Tokyo Club Sushi Speakeasy.",
  },
};
