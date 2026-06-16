import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

type CookieToSet = {
  name: string;
  value: string;
  options: Parameters<Awaited<ReturnType<typeof cookies>>["set"]>[2];
};

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return null;

  let cookieStore: Awaited<ReturnType<typeof cookies>>;

  try {
    cookieStore = await cookies();
  } catch {
    return createSupabaseClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Components cannot always set cookies; middleware/login routes handle auth refresh.
        }
      }
    }
  });
}
