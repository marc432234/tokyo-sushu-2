-- Tokyo Club CMS schema (Supabase / Postgres)
-- Run this in the Supabase SQL editor, or via `supabase db` / psql.
--
-- Content model:
--   pages       one row per editable page; full page content stored as JSONB
--               (keys: home, menu, experience, gallery, contact, settings)
--   categories  blog taxonomy (name + slug)
--   blog_posts  blog articles

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Pages (home / menu / experience / gallery / contact / settings)
-- ---------------------------------------------------------------------------
create table if not exists public.pages (
  key        text primary key,
  content    jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Categories
-- ---------------------------------------------------------------------------
create table if not exists public.categories (
  slug       text primary key,
  name       text not null,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Blog posts
-- ---------------------------------------------------------------------------
create table if not exists public.blog_posts (
  slug           text primary key,
  title          text not null,
  date           timestamptz not null default now(),
  categories     text[] not null default '{}',
  featured_image text,
  body           text not null default '',
  updated_at     timestamptz not null default now()
);

create index if not exists blog_posts_date_idx on public.blog_posts (date desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- The site reads with the service-role key from Server Components (bypasses
-- RLS), but we still enable public read so the anon key works too if needed.
-- Writes are only ever performed with the service-role key (migration/admin).
-- ---------------------------------------------------------------------------
alter table public.pages       enable row level security;
alter table public.categories  enable row level security;
alter table public.blog_posts  enable row level security;

drop policy if exists "public read pages" on public.pages;
drop policy if exists "public read categories" on public.categories;
drop policy if exists "public read blog_posts" on public.blog_posts;

create policy "public read pages"       on public.pages      for select using (true);
create policy "public read categories"  on public.categories for select using (true);
create policy "public read blog_posts"  on public.blog_posts for select using (true);
