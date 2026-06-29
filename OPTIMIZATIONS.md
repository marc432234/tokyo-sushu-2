# Optimization Report — Tokyo Sushi Speakeasy

A consolidated record of the performance, SEO, accessibility, and UI/UX
optimizations applied to this app. Grouped by area, with the commit each change
landed in.

---

## 1. Performance (Core Web Vitals / PageSpeed)

### Rendering strategy: ISR instead of per-request SSR
- Replaced `export const dynamic = "force-dynamic"` with `export const revalidate = 60` across all `(site)` routes (home, experience, gallery, contact, blog index, blog post, blog pagination, blog category). Pages are now served from cache and revalidated every 60s instead of being server-rendered on every request, improving **TTFB and LCP**. Admin saves call `revalidatePath(...)` for instant updates, so the 60s window only covers out-of-band DB changes. *(aa544a2)*
- Earlier step: pages were first moved to `force-dynamic` to decouple the build from Supabase connectivity (the build no longer touches the DB and can't fail on it). ISR was the follow-up once that was stable. *(ca51cbc → aa544a2)*

### Defer third-party analytics
- Moved Google Tag Manager, Google Ads `gtag`, and the Meta Pixel scripts from `strategy="afterInteractive"` to `strategy="lazyOnload"`. This cuts mobile **Total Blocking Time** and third-party main-thread cost by loading them after the page is interactive. *(aa544a2)*

### Image optimization
- Enabled **AVIF + WebP** output in `next.config` (`formats: ["image/avif", "image/webp"]`). AVIF is ~30–50% smaller than WebP; large source PNGs shrink ~96% and never reach the browser at full byte size. *(12f577c)*
- Converted **12 raw `<img>` tags to `next/image`** (blog hero/grid/related, menu & cocktail cards, EventOccasions, MenuPreview) so they get automatic optimization and responsive candidates. *(12f577c)*
- Added `sizes` attributes to all responsive `next/image` usages (gallery, experience, story, CTA, footer, menu, hero, gallery teaser, gallery grid) so the browser picks correctly sized AVIF/WebP candidates instead of over-fetching. *(aa544a2)*

### LCP / priority hints
- Added `fetchPriority="high"` + `sizes="100vw"` to each page's LCP banner image (`priority` alone does not emit `fetchpriority` in Next 16). *(12f577c)*
- Added `fetchPriority="high"` to the header logo. *(02a5e46)*
- Marked the first 4 gallery-grid images as `priority`. *(aa544a2)*

### Font loading
- Dropped the unused **Outfit 800** weight from the body font, removing one font file from the download. *(aa544a2)*

### Graceful degradation
- Homepage optional sections (experience, menu preview, social proof, gallery teaser) now render only when their CMS data exists, so a partial page row degrades gracefully instead of failing the ISR build. *(aa544a2)*

---

## 2. SEO

### Metadata in `<head>` for every crawler
- Set `htmlLimitedBots: /.*/` in `next.config` so `<title>` and `<link rel="canonical">` render in the **raw `<head>`** for every user-agent — not just Next's known-bot list. Under streaming metadata, unrecognized UAs otherwise get metadata injected into `<body>` and hoisted client-side, which SEO auditors and non-JS crawlers miss. *(12f577c)* — see also `memory/seo-streaming-metadata.md`.

### Canonical resilience
- Fixed missing canonical when the CMS fetch failed inside `generateMetadata`. Added `getPageSeo()` with a static-config fallback, wrapped the layout's `getSiteConfig` in try/catch, and set `metadataBase` directly in `createPageMetadata`, so the canonical always resolves to an absolute `www` URL on every route even if Supabase hiccups. *(cd53d32)*

### Canonical host redirect
- 301 redirect from the bare apex `tokyosushispeakeasy.com` to `www.tokyosushispeakeasy.com` on every path, collapsing all URLs to a single canonical host. *(next.config redirects)*

### Title length
- Shortened the homepage title from 69 → **46 chars** so Google (which truncates ~60) shows the full title. *(12f577c)*

### Heading hierarchy
- Converted section/card titles from `<div>` to proper `<h2>`/`<h3>` in MenuPreview, EventOccasions, and the menu page so each page has a real heading outline (output is visually identical). *(8aa943f, 13cd82f)*

### Dynamic sitemap
- Switched `sitemap.ts` from `force-static` to `force-dynamic` so blog posts added through the admin CMS appear in the sitemap immediately, without a rebuild. Includes static pages (with per-page priority/changeFrequency) plus all blog posts, with a try/catch fallback to static-only if Supabase is unreachable. *(4f1240b)*
- `robots.ts` serves a static robots policy pointing at `/sitemap.xml`.

---

## 3. Accessibility (a11y)

- Marked decorative images (border flourishes, smoke overlays, ambient backgrounds) with empty `alt=""` + `aria-hidden="true"` so screen readers skip them. *(8aa943f, aa544a2)*
- Improved the generic menu banner `alt` text and other meaningful image alts (e.g. descriptive staircase alt). *(8aa943f, 12f577c)*
- Heading hierarchy fixes (above) also benefit screen-reader navigation. *(8aa943f)*

---

## 4. UI / UX Improvements

### Mobile responsiveness
- Responsiveness pass across Hero, CtaSection, GalleryTeaser, EventOccasions, and the blog post page (responsive sizing, layout adjustments, mobile-only/desktop-only image variants). *(26a7154)*

### Visual / interaction polish
- Updated heading hierarchy, menu page cards and pricing, and button link hover effects. *(13cd82f)*
- Homepage title wording update. *(bc2aca5)*

### Blog rich editor
- Replaced the blog Markdown textarea with a **Tiptap rich-text editor**. *(45b7364)*
- Added a sticky toolbar with alignment, image, and button controls. *(2ff6501)*
- Added a delete confirmation, a save loader, and an `<h1>` on blog posts. *(dbf9187)*
- Rendered blog Markdown with `react-markdown` (prior step before Tiptap). *(ba31fbb)*

---

## 5. Infrastructure / Content Platform

These weren't "speed" optimizations but enabled the performance and SEO work above.

- Migrated from Netlify/Decap CMS to a **Supabase-backed CMS + admin**. *(9b728f6)*
- Upload featured images to a public Supabase Storage `blog` bucket, **masked behind the deploy domain** via a `next.config` rewrite (`/uploads/blog/*` → Supabase bucket), so the Supabase URL is never exposed to the browser and uploads persist on Vercel. *(738cedc)*
- Added `post_categories` junction table + featured-image file upload. *(42be03f)*
- Wired the contact form to a Zapier webhook; removed the `Content-Type` header to avoid a CORS preflight. *(268359c, 11980dc)*

---

## Quick reference — key commits

| Commit | Summary |
|--------|---------|
| `aa544a2` | PageSpeed: defer analytics → lazyOnload, ISR (revalidate=60), `sizes` on images, drop Outfit 800, graceful sections |
| `12f577c` | SEO: metadata in `<head>` for all crawlers, AVIF+WebP, shorter title, LCP `fetchPriority`, 12 `<img>`→`next/image` |
| `8aa943f` | SEO/a11y: heading hierarchy + decorative image alts |
| `cd53d32` | SEO: canonical resilient to CMS fetch failure |
| `4f1240b` | SEO: dynamic sitemap |
| `02a5e46` | Perf: `fetchPriority="high"` on header logo |
| `738cedc` | Infra: featured images on Supabase Storage, masked behind deploy domain |
| `26a7154` | UI: mobile responsiveness pass |
| `13cd82f` | UI: heading hierarchy, menu cards/pricing, button hover |
| `ca51cbc` | Infra: decouple build from DB (force-dynamic, later → ISR) |

_Report generated 2026-06-18._
