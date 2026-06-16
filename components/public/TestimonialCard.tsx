import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
      <div className="mb-4 flex gap-1 text-safety">
        {Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
      </div>
      <p className="text-base leading-8 text-slate-200">“{testimonial.message}”</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{testimonial.person_name}</p>
        <p className="text-sm text-slate-400">{testimonial.person_role}, {testimonial.company}</p>
      </div>
    </article>
  );
}
