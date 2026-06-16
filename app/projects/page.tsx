import type { Metadata } from "next";
import { ProjectCard } from "@/components/public/ProjectCard";
import { SectionHeading } from "@/components/public/SectionHeading";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Projects",
  description: "Residential, commercial, infrastructure, renovation, and industrial construction projects delivered through civil engineering and site execution systems."
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="container-shell py-16">
      <SectionHeading eyebrow="Projects" title="Construction and infrastructure project delivery" description="Browse residential, commercial, infrastructure, renovation, and industrial construction work managed through structured site execution systems." />
      <div className="mt-8 flex flex-wrap justify-center gap-2">{["Residential", "Commercial", "Infrastructure", "Renovation", "Industrial"].map((item) => <span key={item} className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300">{item}</span>)}</div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </main>
  );
}
