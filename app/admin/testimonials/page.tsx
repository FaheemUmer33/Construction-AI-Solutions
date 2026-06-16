import { redirect } from "next/navigation";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { AdminShell } from "@/components/admin/AdminShell";
import { getTestimonials } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminTestimonialsPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  return <AdminShell title="Manage Testimonials"><AdminCrud table="testimonials" title="testimonial" rows={await getTestimonials()} fields={["person_name","person_role","company","message","rating","image_url","is_published"]} /></AdminShell>;
}
