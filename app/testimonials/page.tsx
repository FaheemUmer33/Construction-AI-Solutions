import type { Metadata } from "next";
import { SectionHeading } from "@/components/public/SectionHeading";
import { TestimonialCard } from "@/components/public/TestimonialCard";
import { getTestimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Testimonials",
  description: "Construction stakeholder feedback from project owners, contractors, engineers, and development teams."
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <main className="container-shell py-16">
      <SectionHeading eyebrow="Testimonials" title="Trusted for steady construction communication" description="Stakeholder feedback can be managed through the CMS and replaced with verified project references." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}</div>
    </main>
  );
}
