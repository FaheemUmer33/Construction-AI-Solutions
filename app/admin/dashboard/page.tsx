import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { getGallery, getInquiries, getProjects, getTestimonials } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/admin/login");
  }
  const [projects, inquiries, testimonials, gallery] = await Promise.all([getProjects(), getInquiries(), getTestimonials(), getGallery()]);
  const stats = [
    ["Total projects", projects.length],
    ["Total inquiries", inquiries.length],
    ["Total testimonials", testimonials.length],
    ["Total gallery images", gallery.length]
  ];
  return (
    <AdminShell title="Dashboard Overview">
      <div className="grid gap-5 md:grid-cols-4">{stats.map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-6"><p className="text-sm text-slate-400">{label}</p><p className="mt-2 font-display text-3xl font-semibold tracking-[0.01em] text-safety">{value}</p></div>)}</div>
    </AdminShell>
  );
}
