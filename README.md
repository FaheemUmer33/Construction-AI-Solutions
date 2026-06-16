# CIVORA INFRASTRUCTURE

Premium construction company website for a civil engineering and infrastructure development brand. The site is built for Vercel deployment and Supabase-managed content.

## Tech Stack

- Next.js App Router with TypeScript
- Tailwind CSS
- Supabase SSR client and Supabase Auth
- Framer Motion
- Lucide React
- React Hook Form and Zod

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Do not expose a Supabase service role key in client-side code. This project does not require it for normal public pages or admin auth.

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/migrations/001_initial_schema.sql`.
4. Run `supabase/seed.sql`.
5. Copy the project URL and publishable anon key into `.env.local`.

## Create First Admin User

In Supabase Dashboard:

1. Go to Authentication.
2. Add a user manually with email and password.
3. Use that email/password at `/admin/login`.

All authenticated users can manage content through RLS policies, so keep Supabase Auth users limited to trusted admins.

## Content Management

The admin dashboard includes:

- Company details management
- Projects CRUD
- Services CRUD
- Testimonials CRUD
- Gallery CRUD
- Inquiry status management

Array and JSON fields can be edited as JSON text in the admin forms.

## SEO Positioning

Primary site title:

**CIVORA INFRASTRUCTURE | Civil Engineering and Infrastructure Development Company**

The site is positioned around construction management, site execution, civil works coordination, and infrastructure solutions for residential, commercial, and industrial projects.

## Deployment to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Add the two Supabase environment variables in Vercel Project Settings.
4. Deploy.

## Production Checklist

- Replace placeholder contact email, phone, and location.
- Replace seeded project records with verified company project details.
- Add verified testimonials only when approved.
- Update `brand.domain` in `lib/brand.ts` to the final domain.
- Confirm Supabase RLS policies match the final admin access model.
- Run `npm run build` before deployment.
