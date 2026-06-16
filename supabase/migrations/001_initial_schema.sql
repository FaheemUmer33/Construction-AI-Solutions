create extension if not exists "pgcrypto";

create table if not exists public.profile (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  headline text,
  bio text,
  location text,
  email text,
  phone text,
  linkedin_url text,
  profile_image_url text,
  hero_image_url text,
  years_experience int default 0,
  projects_completed int default 0,
  teams_coordinated int default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  location text,
  year int,
  status text,
  client_type text,
  short_description text,
  full_description text,
  scope text,
  challenges text,
  solution text,
  result text,
  cover_image_url text,
  gallery_urls text[] default '{}',
  metrics jsonb default '{}'::jsonb,
  is_featured boolean default false,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  icon text,
  short_description text,
  includes text[] default '{}',
  outcome text,
  sort_order int default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  person_name text not null,
  person_role text,
  company text,
  message text not null,
  rating int default 5 check (rating between 1 and 5),
  image_url text,
  is_published boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  image_url text not null,
  description text,
  sort_order int default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  company text,
  project_type text,
  budget_range text,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'contacted', 'closed')),
  created_at timestamp with time zone default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamp with time zone default now()
);

alter table public.profile enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.gallery enable row level security;
alter table public.inquiries enable row level security;
alter table public.site_settings enable row level security;

create policy "Public can read profile" on public.profile for select using (true);
create policy "Public can read published projects" on public.projects for select using (is_published = true);
create policy "Public can read published services" on public.services for select using (is_published = true);
create policy "Public can read published testimonials" on public.testimonials for select using (is_published = true);
create policy "Public can read published gallery" on public.gallery for select using (is_published = true);
create policy "Public can insert inquiries" on public.inquiries for insert with check (true);

create policy "Admins manage profile" on public.profile for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage projects" on public.projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage services" on public.services for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage testimonials" on public.testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage gallery" on public.gallery for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins read and manage inquiries" on public.inquiries for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admins manage site settings" on public.site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
