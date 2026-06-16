import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getServices } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminServicesPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  return <AdminShell title="Manage Services"><AdminCrud table="services" title="service" rows={await getServices()} fields={["title","slug","icon","short_description","includes","outcome","sort_order","is_published"]} /></AdminShell>;
}
