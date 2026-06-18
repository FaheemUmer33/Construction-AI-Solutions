import * as Icons from "lucide-react";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.HardHat;
  return (
    <article className="industrial-card group rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-safety/50 hover:bg-white/[0.07] hover:shadow-[0_22px_70px_rgba(165,199,183,0.14)]">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-safety/15 text-safety transition group-hover:scale-105 group-hover:bg-safety/20">
        <Icon />
      </div>
      <h3 className="font-display text-xl font-medium leading-snug text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{service.short_description}</p>
      <ul className="mt-5 grid gap-2 text-sm text-slate-400">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-safety" />{item}</li>
        ))}
      </ul>
      <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-safety">{service.outcome}</p>
    </article>
  );
}
