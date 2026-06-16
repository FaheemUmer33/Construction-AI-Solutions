import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getProfile } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminProfilePage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  const profile = await getProfile();
  return <AdminShell title="Manage Company Details"><AdminCrud table="profile" title="company details" rows={[profile]} fields={["full_name","headline","bio","location","email","phone","profile_image_url","hero_image_url","years_experience","projects_completed","teams_coordinated"]} /></AdminShell>;
}
