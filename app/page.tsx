import { ArrowRight, Bot, CheckCircle2, Gauge, ShieldCheck, Sparkles, WalletCards, Workflow } from "lucide-react";
import Image from "next/image";
import { HeroAtmosphere } from "@/components/public/HeroAtmosphere";
import { LinkButton } from "@/components/ui/button";
import { ContactForm } from "@/components/public/ContactForm";
import { Reveal } from "@/components/public/Reveal";
import { SectionHeading } from "@/components/public/SectionHeading";
import { ServiceCard } from "@/components/public/ServiceCard";
import { StatsCard } from "@/components/public/StatsCard";
import { LazyWorkflow3D } from "@/components/public/LazyWorkflow3D";
import { fallbackProjects, fallbackServices, getProfile, getServices } from "@/lib/data";
import { brand } from "@/lib/brand";

const trust = ["AI Site Monitoring", "Project Dashboards", "Workflow Automation", "Civil Works", "Cost Intelligence", "Safety Controls"];

const benefits = [
  { title: "Operational efficiency", value: "+42%", text: "Faster visibility from site events to project decisions.", icon: Gauge },
  { title: "Cost reduction", value: "-18%", text: "Earlier detection of idle time, rework exposure, and resource waste.", icon: WalletCards },
  { title: "Resource optimization", value: "31%", text: "Lean coordination across trades, materials, vendors, and approvals.", icon: Workflow },
  { title: "Safety improvements", value: "24/7", text: "Structured observations and faster escalation of field risks.", icon: ShieldCheck }
];

export default async function HomePage() {
  const [profile, services] = await Promise.all([getProfile(), getServices()]);
  const aiServices = services.some((service) => service.title.toLowerCase().includes("automation") || service.title.toLowerCase().includes("intelligence"))
    ? services
    : fallbackServices;
  const caseStudies = fallbackProjects.slice(0, 6);

  return (
    <main>
      <section className="blueprint-surface noise-surface relative overflow-hidden">
        <HeroAtmosphere />
        <div className="container-shell relative z-10 grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="glass-panel rounded-lg p-6 md:p-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-safety/30 bg-safety/10 px-4 py-2 text-sm font-semibold text-safety">
              <Bot size={16} /> AI-enhanced construction intelligence
            </p>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.03] tracking-[0.01em] text-white md:text-7xl">
              Helping construction firms build faster and leaner with AI
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              {brand.name} combines civil engineering discipline with AI site monitoring, project intelligence dashboards, and workflow automation for measurable construction efficiency gains.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#services">Explore Solutions <ArrowRight size={17} /></LinkButton>
              <LinkButton href="#demo" variant="secondary">Request a Demo</LinkButton>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 shadow-premium lg:aspect-[5/6]">
              <Image src={profile.hero_image_url ?? "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"} alt="Civil construction site with infrastructure development activity" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                <StatsCard value="42%" label="Faster Visibility" />
                <StatsCard value="18%" label="Lower Rework Exposure" />
                <StatsCard value={`${profile.teams_coordinated}+`} label="Field Teams Coordinated" />
                <StatsCard value="AI" label="Automated Reporting" />
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

      <section className="mesh-surface py-20">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="Construction performance with measurable AI lift" description="Construction AI Solutions turns daily site activity into structured signals for schedule control, cost awareness, safety follow-up, and resource planning." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title}>
                  <article className="industrial-card group h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-ember/50 hover:shadow-[0_22px_70px_rgba(165,199,183,0.14)]">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded bg-ember/15 text-ember"><Icon /></div>
                      <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                    </div>
                    <div className="font-display text-4xl font-semibold tracking-[0.01em] text-white">{benefit.value}</div>
                    <h3 className="mt-4 font-display text-xl font-medium text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-blueprint/90 py-20 backdrop-blur-sm">
        <div className="container-shell">
          <Reveal><SectionHeading eyebrow="AI Services" title="Automation services for modern construction teams" description="Premium construction delivery systems for owners, consultants, contractors, and field teams that need faster decisions and cleaner accountability." /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{aiServices.slice(0, 8).map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        </div>
      </section>

      <section id="workflow" className="container-shell py-20">
        <Reveal><SectionHeading eyebrow="Process Intelligence" title="From manual reporting to AI-optimized construction control" description="Compare the traditional chain of site updates with a connected workflow that turns observations into decisions, alerts, and client-ready summaries." /></Reveal>
        <div className="mt-12">
          <LazyWorkflow3D />
        </div>
      </section>

      <section className="bg-cas-forest/90 py-20 backdrop-blur-sm">
        <div className="container-shell">
          <Reveal><SectionHeading eyebrow="Case Studies" title="Sample AI-enhanced construction outcomes" description="Project cards combine construction delivery context with automation impact across residential, commercial, industrial, infrastructure, and renovation work." /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <Reveal key={project.id}>
                <article className="group industrial-card h-full overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-safety/50 hover:shadow-premium">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={project.cover_image_url} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110 group-hover:translate-y-[-6px]" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/42 to-transparent" />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                      <span className="rounded bg-safety px-3 py-1 text-xs font-semibold text-steel">{project.category}</span>
                      <span className="rounded border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{project.status}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium leading-snug text-white">{project.title}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-400">{project.location} · {project.client_type}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.short_description}</p>
                    <div className="mt-4 rounded-md border border-ember/20 bg-ember/10 p-3 text-sm leading-6 text-emerald-100">
                      <span className="font-semibold text-ember">AI impact: </span>{project.result}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="container-shell grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-sm font-semibold text-ember">
            <Sparkles size={16} /> Demo request
          </p>
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-[0.01em] text-white md:text-5xl">See where automation can improve your next project.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Share your construction program goals and Construction AI Solutions will map the highest-value opportunities for site monitoring, communication automation, dashboards, and workflow optimization.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-300">
            {["Supabase-backed lead capture", "No schema changes required", "Production-ready for Vercel"].map((item) => (
              <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ember" />{item}</span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
