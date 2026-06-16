import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { getProject, getProjects } from "@/lib/data";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  return { title: project?.title ?? "Project Detail", description: project?.short_description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  return (
    <main>
      <section className="relative min-h-[58vh] overflow-hidden">
        <Image src={project.cover_image_url} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/60 to-steel/20" />
        <div className="container-shell relative z-10 flex min-h-[58vh] items-end pb-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-safety">{project.category} · {project.location}</p>
            <h1 className="max-w-4xl text-4xl font-black md:text-6xl">{project.title}</h1>
          </div>
        </div>
      </section>
      <section className="container-shell grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="industrial-card h-fit rounded-lg p-6">
          {Object.entries({ Status: project.status, Year: project.year, "Client Type": project.client_type, Category: project.category }).map(([key, value]) => <p key={key} className="border-b border-white/10 py-3 text-sm text-slate-400"><strong className="text-white">{key}:</strong> {value}</p>)}
          <LinkButton href="/contact" className="mt-6 w-full">Request Infrastructure Consultation</LinkButton>
        </aside>
        <div className="grid gap-8">
          {[
            ["Scope of Work", project.scope],
            ["Challenges", project.challenges],
            ["Solution", project.solution],
            ["Result", project.result]
          ].map(([title, text]) => <article key={title}><h2 className="text-2xl font-bold">{title}</h2><p className="mt-3 leading-8 text-slate-300">{text}</p></article>)}
          <div className="grid gap-4 md:grid-cols-3">{Object.entries(project.metrics).map(([key, value]) => <div key={key} className="industrial-card rounded-lg p-5"><p className="text-sm text-slate-400">{key}</p><p className="mt-1 font-bold text-safety">{value}</p></div>)}</div>
        </div>
      </section>
      <section className="container-shell grid gap-5 pb-16 md:grid-cols-2">{project.gallery_urls.map((url) => <div key={url} className="relative aspect-video overflow-hidden rounded-lg"><Image src={url} alt={`${project.title} gallery`} fill className="object-cover" /></div>)}</section>
    </main>
  );
}
