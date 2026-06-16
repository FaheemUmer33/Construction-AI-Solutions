import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getGallery } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  return <AdminShell title="Manage Gallery"><AdminCrud table="gallery" title="gallery item" rows={await getGallery()} fields={["title","category","image_url","description","sort_order","is_published"]} /></AdminShell>;
}
