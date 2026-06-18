"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/public/BrandLogo";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) setError(authError.message);
      else router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="industrial-card mx-auto grid max-w-md gap-4 rounded-lg p-7">
      <BrandLogo />
      <div>
        <h1 className="font-display text-2xl font-medium tracking-[0.01em]">Company CMS Login</h1>
        <p className="mt-2 text-sm text-slate-400">{brand.tagline}</p>
      </div>
      <label className="grid gap-2 text-sm text-slate-300">Email<input className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required /></label>
      <label className="grid gap-2 text-sm text-slate-300">Password<input className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required /></label>
      {error ? <p className="rounded-md border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">{error}</p> : null}
      <Button disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
    </form>
  );
}
