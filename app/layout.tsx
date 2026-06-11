import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { pageOgImages, siteConfig, siteUrl } from "@/lib/site";

import "./globals.css";

const GOOGLE_TAG_ID = "AW-18203197260";
const META_PIXEL_ID = "226892389948826";
const GTM_ID = "GTM-TS5THG7K";

const displayFont = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Tokyoclub Sushi's Speakeasy",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.social.website,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: pageOgImages.home.src,
        width: pageOgImages.home.width,
        height: pageOgImages.home.height,
        alt: pageOgImages.home.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [pageOgImages.home.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GOOGLE_TAG_ID}');`}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <Script
          id="netlify-identity"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', function(user) {
    if (!user) {
      window.netlifyIdentity.on('login', function() {
        document.location.href = '/admin/';
      });
    }
  });
}`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
