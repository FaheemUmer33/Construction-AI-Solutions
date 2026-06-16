import type { Metadata } from "next";
import { SectionHeading } from "@/components/public/SectionHeading";
import { Reveal } from "@/components/public/Reveal";
import { BrandLogo } from "@/components/public/BrandLogo";
import { brand } from "@/lib/brand";
import { getProfile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About CIVORA INFRASTRUCTURE",
  description: "Company overview for CIVORA INFRASTRUCTURE, a civil engineering and infrastructure development company focused on planning, execution, quality, safety, and communication."
};

const values = ["Planning", "Execution", "Quality", "Safety", "Communication"];
const timeline = ["Preconstruction Planning", "Site Mobilization", "Project Execution", "Quality Handover"];
const skills = ["Site Supervision", "BOQ Understanding", "Contractor Coordination", "Project Scheduling", "Material Planning", "Quality Inspection", "Safety Protocols", "Client Communication"];

export default async function AboutPage() {
  const profile = await getProfile();
  return (
    <main className="container-shell py-16">
      <Reveal><SectionHeading eyebrow="About Us" title={brand.name} description={brand.tagline} /></Reveal>
      <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="industrial-card rounded-lg p-8">
          <div className="grid aspect-square place-items-center rounded-lg bg-gradient-to-br from-safety/20 to-white/5">
            <BrandLogo className="scale-150" markOnly />
          </div>
          <div className="mt-6 grid gap-2 text-sm text-slate-300">
            <p>{profile.location}</p><p>{profile.email}</p><p>{profile.phone}</p>
          </div>
        </div>
        <div>
          <p className="text-lg leading-9 text-slate-300">{brand.overview}</p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            Our team specializes in construction management, site execution, civil works coordination, material planning, contractor alignment, and quality-led handover systems.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-5">{values.map((value) => <div key={value} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center font-semibold text-safety">{value}</div>)}</div>
        </div>
      </section>
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Delivery Framework</h2>
          <div className="mt-6 grid gap-4">{timeline.map((item, index) => <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5"><p className="text-sm text-safety">0{index + 1}</p><p className="text-lg font-semibold">{item}</p></div>)}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Construction Capability Areas</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">{skills.map((skill) => <div key={skill} className="rounded-lg bg-white/[0.05] p-4 text-slate-200">{skill}</div>)}</div>
        </div>
      </section>
    </main>
  );
}
