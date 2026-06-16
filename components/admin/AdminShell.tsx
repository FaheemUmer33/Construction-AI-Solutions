import { BarChart3, FolderKanban, ImageIcon, Inbox, MessageSquareQuote, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { BrandLogo } from "@/components/public/BrandLogo";

const links = [
  ["Overview", "/admin/dashboard", BarChart3],
  ["Company", "/admin/profile", UserRound],
  ["Projects", "/admin/projects", FolderKanban],
  ["Services", "/admin/services", Settings],
  ["Testimonials", "/admin/testimonials", MessageSquareQuote],
  ["Gallery", "/admin/gallery", ImageIcon],
  ["Inquiries", "/admin/inquiries", Inbox]
];

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08111d] text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/10 bg-steel p-5 lg:block">
        <BrandLogo />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Admin Dashboard</p>
        <nav className="mt-8 grid gap-2">
          {links.map(([label, href, Icon]) => (
            <Link key={href as string} href={href as string} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">
              <Icon size={17} />{label as string}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-5 left-5 right-5"><LogoutButton /></div>
      </aside>
      <main className="lg:pl-64">
        <div className="border-b border-white/10 bg-steel/80 px-5 py-5 backdrop-blur">
          <div className="container-shell">
            <p className="text-sm text-slate-400">Company content management</p>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        </div>
        <div className="container-shell py-8">{children}</div>
      </main>
    </div>
  );
}
