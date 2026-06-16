# Tokyo Club South Beach

Next.js (App Router) site for Tokyo Club Sushi Speakeasy. Content is stored in
**Supabase** and edited through a built-in admin at `/admin`. Deployed on **Vercel**.

## Local Development

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

## Environment variables

See `.env.example`. You need:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` — Supabase project (Project Settings → API).
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` — credentials for the `/admin` login (`ADMIN_SESSION_SECRET` via `openssl rand -hex 32`).
- `RESEND_API_KEY`, `CONTACT_EMAIL` — contact form email.

## Supabase setup

1. Create a Supabase project.
2. In the Supabase SQL editor, run [`supabase/schema.sql`](supabase/schema.sql) to create the `pages`, `categories`, and `blog_posts` tables.
3. Put the project URL + keys into `.env.local`.
4. Migrate the existing file-based content into the database (one-time):

   ```bash
   npm run migrate:content
   ```

   This reads `content/pages/*.json`, `content/categories/*.md`, and `content/blog/*.md`
   and upserts them into Supabase. It's safe to re-run.

## Content model

- **pages** — one row per page (`home`, `menu`, `experience`, `gallery`, `contact`, `settings`); full page content stored as JSONB.
- **categories** — blog taxonomy (`name`, `slug`).
- **blog_posts** — `slug`, `title`, `date`, `categories`, `featured_image`, `body` (Markdown).

The hardcoded menu items live in `lib/menu-data.ts` (code, not CMS).

## Admin

The CMS lives at **`/admin`** and is protected by a username/password login
(`ADMIN_USERNAME` / `ADMIN_PASSWORD`). From there you can:

- Create / edit / delete **blog posts**.
- Edit **page content** as JSON (home, menu, experience, gallery, contact, settings).

## Build & deploy (Vercel)

```bash
npm run build
```

Set the same environment variables in the Vercel project settings, then deploy.
