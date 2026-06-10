# Tokyo Club South Beach

Next.js static export for Tokyo Club Sushi Speakeasy with Decap CMS blog editing.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`, which is what Netlify publishes.

## Decap CMS Blog

The CMS is available at `/admin/` after the site is deployed to Netlify.

Page content is stored in `content/pages/`. Blog posts are stored as Markdown files in `content/blog/`. Uploaded images are stored in `public/uploads/blog/`.

The admin panel includes editable entries for:

- Home page
- Menu page
- Experience page
- Gallery page
- Contact page
- Blog posts

Each blog post has:

- Featured image
- Title
- Body
- Slug
- Date
- Categories

## Netlify Setup

1. Push this project to a new GitHub repository.
2. Create a new Netlify site from that repository.
3. Use `npm run build` as the build command.
4. Use `out` as the publish directory.
5. In Netlify, enable Identity.
6. In Netlify Identity settings, enable Git Gateway.
7. Invite the editor user from Netlify Identity.
8. Visit `/admin/` on the deployed site and log in.

The Decap config is in `public/admin/config.yml`. It is set to commit CMS changes to the `main` branch.
# tky
