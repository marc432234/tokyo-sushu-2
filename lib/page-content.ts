import fs from "fs";
import path from "path";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export type CmsImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CmsButton = {
  label: string;
  href: string;
};

export type CmsFeature = {
  title: string;
  description: string;
  image?: CmsImage;
  eyebrow?: string;
};

export type PageSeo = {
  title: string;
  description: string;
};

export type HomePageContent = {
  seo: PageSeo;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    video: string;
    poster: CmsImage;
    sideImage: CmsImage;
    primaryButtonLabel: string;
    secondaryButton: CmsButton;
    marquee: string[];
  };
  experience: {
    eyebrow: string;
    pillars: Array<{
      title: string;
      body: string;
      image: CmsImage;
    }>;
  };
  menuPreview: {
    eyebrow: string;
    title: string;
    description: string;
    button: CmsButton;
  };
  events: {
    eyebrow: string;
    title: string;
    description: string;
    image: CmsImage;
    imageEyebrow: string;
    imageTitle: string;
    primaryButtonLabel: string;
    secondaryButton: CmsButton;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    description: string;
  };
  galleryTeaser: {
    eyebrow: string;
    title: string;
    description: string;
    button: CmsButton;
    images: Array<CmsImage & { category: string }>;
  };
};

export type SimplePageContent = {
  seo: PageSeo;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: CmsImage;
    primaryButtonLabel?: string;
    secondaryButton?: CmsButton;
  };
  sections?: Record<string, string | CmsImage | CmsFeature[]>;
};

type PageContentMap = {
  home: HomePageContent;
  menu: SimplePageContent & {
    menuLinks: {
      food: CmsButton;
      drink: CmsButton;
    };
    footnotes: string[];
  };
  experience: SimplePageContent;
  gallery: SimplePageContent & {
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
  contact: SimplePageContent & {
    occasions: CmsFeature[];
    formIntro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    sidebar: {
      visitEyebrow: string;
      callEyebrow: string;
      callDescription: string;
      eventsEyebrow: string;
      eventsDescription: string;
      eventsEmail: string;
      followEyebrow: string;
    };
  };
};

export function getPageContent<TPage extends keyof PageContentMap>(page: TPage): PageContentMap[TPage] {
  const filePath = path.join(pagesDirectory, `${page}.json`);
  const source = fs.readFileSync(filePath, "utf8");

  return JSON.parse(source) as PageContentMap[TPage];
}

export function imageDimensions(image: CmsImage): Required<Pick<CmsImage, "width" | "height">> {
  return {
    width: image.width ?? 1365,
    height: image.height ?? 2048,
  };
}
