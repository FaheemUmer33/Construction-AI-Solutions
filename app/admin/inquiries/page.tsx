import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getInquiries } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminInquiriesPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  return <AdminShell title="Manage Inquiries"><AdminCrud table="inquiries" title="inquiry" rows={await getInquiries()} fields={["full_name","email","phone","company","project_type","budget_range","message","status"]} /></AdminShell>;
}
