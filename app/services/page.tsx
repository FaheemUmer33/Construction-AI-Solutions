import type { Metadata } from "next";
import { SectionHeading } from "@/components/public/SectionHeading";
import { ServiceCard } from "@/components/public/ServiceCard";
import { getServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Services",
  description: "Civil engineering, infrastructure development, construction project management, site supervision, renovation, quality monitoring, BOQ coordination, and vendor management."
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <main className="container-shell py-16">
      <SectionHeading eyebrow="Services" title="Construction services built around execution discipline" description="Civil engineering support for site work, coordination, planning, quality checks, infrastructure delivery, and handover control." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
    </main>
  );
}
