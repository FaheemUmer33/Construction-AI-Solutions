import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getProjects } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  return <AdminShell title="Manage Projects"><AdminCrud table="projects" title="project" rows={await getProjects()} fields={["title","slug","category","location","year","status","client_type","short_description","full_description","scope","challenges","solution","result","cover_image_url","gallery_urls","metrics","is_featured","is_published"]} /></AdminShell>;
}
