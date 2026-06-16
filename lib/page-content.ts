import { cache } from "react";

import { getSupabaseClient } from "./supabase";

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

export const getPageContent = cache(
  async <TPage extends keyof PageContentMap>(page: TPage): Promise<PageContentMap[TPage]> => {
    const { data, error } = await getSupabaseClient()
      .from("pages")
      .select("content")
      .eq("key", page)
      .single();

    if (error || !data) {
      throw new Error(`Failed to load page content "${page}": ${error?.message ?? "not found"}`);
    }

    return data.content as PageContentMap[TPage];
  },
);

export function imageDimensions(image: CmsImage): Required<Pick<CmsImage, "width" | "height">> {
  return {
    width: image.width ?? 1365,
    height: image.height ?? 2048,
  };
}
