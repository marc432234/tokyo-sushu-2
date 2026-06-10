# SEO Audit Report — Tokyo Sushi Speakeasy

> Generated: June 2, 2026

This report provides a comprehensive analysis of the current SEO state of the Tokyo Sushi Speakeasy website, documents the optimizations applied, and outlines remaining gaps and next steps for continued improvement.

---

## Before / After Summary

| # | Gap | Priority | Before | After | Files Changed |
|---|-----|----------|--------|-------|---------------|
| 1 | **sitemap.xml** | 🔴 High | ❌ Missing | ✅ `/sitemap.xml` — 5 URLs, weekly/monthly priorities | `app/sitemap.ts` (new) |
| 2 | **robots.txt** | 🔴 High | ❌ Missing | ✅ `/robots.txt` — `Allow: /` + sitemap reference | `app/robots.ts` (new) |
| 3 | **Per-page titles/descriptions** | 🟡 Medium | All pages shared one OG title/desc | ✅ Each page has unique `<title>`, OG title, OG description, and Twitter card | `lib/metadata.ts`, all 5 `page.tsx` |
| 4 | **Home hero LCP priority** | 🟡 Medium | Missing `priority` on hero Image | ✅ Added `priority` prop to `Hero.tsx` | `components/sections/Hero.tsx` |
| 5 | **BreadcrumbList JSON-LD** | 🟡 Medium | ❌ Missing from schema graph | ✅ Added `BreadcrumbList` with position, name, item for each page | `components/seo/StructuredData.tsx` |
| 6 | **Custom 404 page** | 🟡 Low | ❌ No `not-found.tsx` | ✅ Branded 404 with links to Home / Menu | `app/not-found.tsx` (new) |
| 7 | **Theme color mismatch** | 🟢 Low | `#ffffff` in manifest, site uses `#0e0e10` | ✅ Manifest now `#0e0e10` (matches site) | `public/site.webmanifest` |
| 8 | **Preconnect / dns-prefetch** | 🟢 Low | ❌ Not present | ✅ `preconnect` + `dns-prefetch` for GTM + Facebook | `app/layout.tsx` |
| 9 | **Menu category `<p>` → `<h3>`** | 🟢 Low | Categories used `<p>` tags | ✅ Changed to `<h3>` for correct heading hierarchy | `components/sections/MenuPreview.tsx` |
| 10 | **loading.tsx / error.tsx** | 🟢 Low | ❌ Not implemented | ✅ Loading spinner + branded error boundary with retry | `app/loading.tsx`, `app/error.tsx` (new) |

### Not addressed

| Gap | Reason |
|-----|--------|
| **Image optimization** (`images.unoptimized: true`) | Required for static export — `next/image` optimization needs a server. Would require cloud image service or dynamic server. |
| **Video format** (`.MOV` hero video) | Asset-level concern, not a code change. Replace file with H.264 MP4 at the asset level. |

---

## 1. Metadata

| Element | Status | Details |
|---------|--------|---------|
| Title tag | ✅ Done | Per-page titles: `/` "Tokyo Club Sushi Speakeasy \| Modern Japanese Speakeasy in South Beach", `/menu` "Sushi Menu \| Tokyo Club Sushi Speakeasy", `/experience` "The Experience \| Tokyo Club Sushi Speakeasy", `/gallery` "Gallery \| Tokyo Club Sushi Speakeasy", `/contact` "Contact \| Tokyo Club Sushi Speakeasy" |
| Meta description | ✅ Done | Per-page descriptions, unique to each page |
| Viewport | ✅ Auto | Injected by Next.js |
| Charset | ✅ Auto | `utf-8` |
| Favicon | ✅ Done | `.ico`, `.svg`, `96x96.png`, `180x180` apple touch icon (`app/layout.tsx:33-40`) |
| PWA manifest | ✅ Done | `site.webmanifest` with icons, theme/background color `#0e0e10`, standalone display |
| Theme color | ✅ Fixed | Manifest now matches dark theme `#0e0e10` |

---

## 2. Open Graph & Twitter Cards

| Element | Status | Details |
|---------|--------|---------|
| OG tags | ✅ Done | Per-page `title`, `description`, `url`, `siteName`, `type: website`, `image` with width/height/alt |
| Twitter card | ✅ Done | `summary_large_image` with per-page title, description, image |
| Per-page OG customization | ✅ Done | Each page now has unique OG title/description via `createPageMetadata({ title, description })` |

---

## 3. Structured Data (JSON-LD)

| Schema | Status | Details |
|--------|--------|---------|
| Restaurant | ✅ Excellent | Full `PostalAddress`, `openingHoursSpecification`, `aggregateRating` (4.8 / 200 reviews), `telephone`, `priceRange`, `servesCuisine`, `sameAs` (Instagram) |
| WebSite | ✅ Excellent | Name, URL, description |
| WebPage | ✅ Excellent | Per-page `@id` using current path |
| BreadcrumbList | ✅ Done | `position`, `name`, `item` for each path segment — e.g. Home > Menu |

**File:** `components/seo/StructuredData.tsx:1-138` — Used on all pages.

---

## 4. Canonical URLs

| Element | Status | Details |
|---------|--------|---------|
| Root canonical | ✅ Done | `alternates: { canonical: "/" }` in root layout |
| Per-page canonical | ✅ Done | Each page overrides via `alternates: { canonical: path }` in `createPageMetadata()` |

---

## 5. Sitemap & robots.txt

| Element | Status | Details |
|---------|--------|---------|
| sitemap.xml | ✅ Done | `app/sitemap.ts` — 5 URLs with priority, change frequency, lastmod |
| robots.txt | ✅ Done | `app/robots.ts` — `User-Agent: *`, `Allow: /`, sitemap reference |

Generated output:
```xml
<url>
<loc>https://www.tokyosushispeakeasy.com/</loc>
<changefreq>weekly</changefreq>
<priority>1</priority>
</url>
<url>
<loc>https://www.tokyosushispeakeasy.com/menu</loc>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>
<url>
<loc>https://www.tokyosushispeakeasy.com/experience</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://www.tokyosushispeakeasy.com/gallery</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.tokyosushispeakeasy.com/contact</loc>
<changefreq>monthly</changefreq>
<priority>0.6</priority>
</url>
```

---

## 6. Semantic HTML

| Element | Status | Details |
|---------|--------|---------|
| Unique `<h1>` per page | ✅ Done | All 5 pages have a distinct `<h1>` |
| Heading hierarchy (h1→h2→h3) | ✅ Done | All heading levels now correct — MenuPreview category names changed from `<p>` to `<h3>` |
| Alt text on all images | ✅ Excellent | Every `<Image>` has descriptive, keyword-rich alt text |
| Semantic elements | ✅ Good | `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<figure>`, `<blockquote>`, `<aside>` all used appropriately |
| ARIA attributes | ✅ Good | `aria-expanded`, `aria-label`, `aria-hidden` on interactive elements |
| HTML `lang` attribute | ✅ Done | `<html lang="en">` |

---

## 7. Performance (SEO Impact)

| Element | Status | Details |
|---------|--------|---------|
| Image priority for LCP | ✅ Done | Hero image now has `priority` for optimal LCP |
| Font preloading | ✅ Auto | Managed by `next/font/google` |
| Video poster | ✅ Done | Hero video has `poster` attribute |
| Script loading strategy | ✅ Good | Google Tag and Meta Pixel use `strategy="afterInteractive"` |
| Preconnect / dns-prefetch | ✅ Done | `preconnect` + `dns-prefetch` for `googletagmanager.com` and `connect.facebook.net` |

---

## 8. Internal & External Links

| Element | Status | Details |
|---------|--------|---------|
| External link `rel` | ✅ Done | `rel="noreferrer"` on all external links (booking, maps, Instagram, PDF) |
| Internal navigation | ✅ Good | All pages interlinked via `siteConfig.nav` |
| NAP consistency | ✅ Good | Name, Address, Phone consistent across `lib/site.ts` and JSON-LD |

---

## 9. i18n / Hreflang

| Element | Status | Details |
|---------|--------|---------|
| hreflang tags | ❌ Gap | Not implemented (acceptable for single-language site) |

---

## 10. Rendering Strategy

| Element | Status | Details |
|---------|--------|---------|
| Static export | ✅ Done | `output: "export"` — all pages pre-rendered at build time |
| trailingSlash | ✅ Done | `trailingSlash: true` |
| Custom 404 page | ✅ Done | Branded `app/not-found.tsx` with Home / Menu navigation |
| loading.tsx | ✅ Done | Spinner for Suspense boundaries |
| error.tsx | ✅ Done | Client error boundary with "Try Again" reset |

---

## 11. Summary

### ✅ Strengths

| Category | Verdict |
|----------|---------|
| JSON-LD Structured Data | Excellent — full `@graph` with Restaurant, WebSite, WebPage, BreadcrumbList |
| Image alt text | Excellent — every image has descriptive, keyword-rich alt text |
| Semantic HTML | Excellent — proper elements, headings, ARIA |
| Open Graph / Twitter Cards | Excellent — per-page unique titles and descriptions |
| Sitemap & robots.txt | Done — both generated at build time |
| Custom 404 + error/loading | Done — branded UX for all states |
| Canonical URLs | Good — per-page implementation |
| Favicon & PWA manifest | Good — multiple formats, theme color now matches |
| NAP consistency | Good — aligned across code and structured data |
| External link attributes | Good — `rel="noreferrer"` on all outbound links |
| Preconnect | Done — hints for GTM and Facebook |

### ❌ Remaining Gaps

| Category | Issue | Priority |
|----------|-------|----------|
| **Image optimization** | `images.unoptimized: true` — no WebP/AVIF, no responsive srcset | 🟡 Medium |
| **Video format** | `.MOV` instead of web-optimized MP4/WebM | 🟢 Low |

---
Report Last updated: June 2, 2026 (post-optimization).

## Next Optimization Plans

| Priority | Plan | Details |
|----------|------|---------|
| 🟡 Medium | **Enable image optimization** | Remove `images.unoptimized: true` and switch to a cloud image service (e.g., Cloudinary, imgix) for WebP/AVIF generation and responsive srcset |
| 🟡 Medium | **Improve Core Web Vitals** | Audit CLS, LCP, and INP using PageSpeed Insights; optimize lazy-loading thresholds and reduce JS bundle size |
| 🟢 Low | **Replace hero video** | Convert `.MOV` to H.264 MP4 with a WebM fallback for broad browser compatibility and smaller file size |
| 🟢 Low | **Add hreflang tags** | If expanding to additional languages, implement `hreflang` for international SEO |
| 🟢 Low | **Monitor search console** | Submit sitemap to Google Search Console, monitor index coverage, and track keyword rankings post-launch |
| 🟢 Low | **Accessibility audit** | Run a full WCAG 2.2 audit to improve screen reader support and keyboard navigation |

---

*Report Last updated: June 2, 2026 (post-optimization).*


