import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/public/ContactForm";
import { SectionHeading } from "@/components/public/SectionHeading";
import { brand } from "@/lib/brand";
import { getProfile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Construction AI Solutions",
  description: "Send a construction management, infrastructure development, civil works, or project execution inquiry."
};

export default async function ContactPage() {
  const profile = await getProfile();
  return (
    <main className="container-shell py-16">
      <SectionHeading eyebrow="Contact" title={brand.contactLine} />
      <section className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
          <h2 className="font-display text-2xl font-medium tracking-[0.01em]">Contact Information</h2>
          <div className="mt-6 grid gap-4 text-slate-300">
            <p className="flex gap-3"><Mail className="text-safety" />{profile.email}</p>
            <p className="flex gap-3"><Phone className="text-safety" />{profile.phone}</p>
            <p className="flex gap-3"><MapPin className="text-safety" />{profile.location}</p>
          </div>
        </aside>
        <ContactForm />
      </section>
    </main>
  );
}
