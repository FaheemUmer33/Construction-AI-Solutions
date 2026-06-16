import { ArrowRight, CheckCircle2, HardHat } from "lucide-react";
import Image from "next/image";
import { HeroAtmosphere } from "@/components/public/HeroAtmosphere";
import { LinkButton } from "@/components/ui/button";
import { ProjectCard } from "@/components/public/ProjectCard";
import { Reveal } from "@/components/public/Reveal";
import { SectionHeading } from "@/components/public/SectionHeading";
import { ServiceCard } from "@/components/public/ServiceCard";
import { StatsCard } from "@/components/public/StatsCard";
import { getProfile, getProjects, getServices, getTestimonials } from "@/lib/data";
import { TestimonialCard } from "@/components/public/TestimonialCard";
import { brand } from "@/lib/brand";

const trust = ["Civil Works", "Construction Management", "Site Execution", "Project Planning", "Quality Control", "Safety Compliance"];

export default async function HomePage() {
  const [profile, projects, services, testimonials] = await Promise.all([getProfile(), getProjects(), getServices(), getTestimonials()]);
  const featured = projects.filter((project) => project.is_featured).slice(0, 3);

  return (
    <main>
      <section className="blueprint-surface noise-surface relative overflow-hidden">
        <HeroAtmosphere />
        <div className="container-shell relative z-10 grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="glass-panel rounded-lg p-6 md:p-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-safety/30 bg-safety/10 px-4 py-2 text-sm font-semibold text-safety">
              <HardHat size={16} /> {brand.tagline}
            </p>
            <h1 className="text-balance text-5xl font-black leading-[0.96] text-white md:text-7xl">
              Infrastructure Built With Precision, Planning, and Field Discipline
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              {brand.name} delivers construction management, site execution, civil works coordination, and infrastructure development solutions for demanding residential, commercial, and industrial projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/projects">View Projects <ArrowRight size={17} /></LinkButton>
              <LinkButton href="/contact" variant="secondary">Request Project Consultation</LinkButton>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 shadow-premium lg:aspect-[5/6]">
              <Image src={profile.hero_image_url ?? "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"} alt="Civil construction site with infrastructure development activity" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                <StatsCard value={`${profile.projects_completed}+`} label="Projects Delivered" />
                <StatsCard value={`${profile.years_experience}+`} label="Years Operating" />
                <StatsCard value={`${profile.teams_coordinated}+`} label="Field Teams Coordinated" />
                <StatsCard value="QA" label="Quality and Safety Controls" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="border-y border-white/10 bg-black/20">
          <div className="container-shell flex flex-wrap justify-center gap-4 py-5">
            {trust.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-300"><CheckCircle2 size={16} className="text-safety" />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <Reveal><SectionHeading eyebrow="Featured Work" title="Infrastructure and building delivery experience" description="Project records are managed through Supabase and structured for residential, commercial, infrastructure, renovation, and industrial construction work." /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">{featured.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </section>

      <section className="bg-[#0c1725] py-20">
        <div className="container-shell">
          <Reveal><SectionHeading eyebrow="Services" title="Construction solutions from planning to handover" /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        </div>
      </section>

      <section className="container-shell py-20">
        <Reveal><SectionHeading eyebrow="Stakeholder Feedback" title="Clear communication across owners, consultants, and field teams" /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.slice(0, 3).map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}</div>
      </section>
    </main>
  );
}
