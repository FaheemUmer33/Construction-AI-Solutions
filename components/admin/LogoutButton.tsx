"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <button onClick={logout} className="flex w-full items-center gap-3 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300">
      <LogOut size={17} />Logout
    </button>
  );
}
