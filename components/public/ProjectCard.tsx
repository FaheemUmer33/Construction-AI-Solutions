import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const progress = project.status.toLowerCase().includes("progress") ? 62 : project.status.toLowerCase().includes("planning") ? 18 : 100;

  return (
    <Link href={`/projects/${project.slug}`} className="group industrial-card block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-safety/50 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={project.cover_image_url} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110 group-hover:translate-y-[-6px]" sizes="(min-width: 768px) 33vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/42 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
          <span className="rounded bg-safety px-3 py-1 text-xs font-bold text-steel">{project.category}</span>
          <span className="rounded border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{project.status}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <ArrowUpRight className="h-5 w-5 text-safety transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mb-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={15} />{project.location} · {project.year} · {project.status}</p>
        <p className="text-sm leading-7 text-slate-300">{project.short_description}</p>
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span>Construction Status</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-safety to-ember transition-all duration-700 group-hover:shadow-[0_0_18px_rgba(245,179,1,0.45)]" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </Link>
  );
}
