import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/public/BrandLogo";
import { brand } from "@/lib/brand";
import type { Profile } from "@/types/content";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-white/10 bg-[#060d16]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            {brand.description}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Pages</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {["About", "Projects", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-safety">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <span className="flex gap-2"><Mail size={16} />{profile.email}</span>
            <span className="flex gap-2"><Phone size={16} />{profile.phone}</span>
            <span className="flex gap-2"><MapPin size={16} />{profile.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {brand.name}. Civil engineering, construction management, and infrastructure solutions.
      </div>
    </footer>
  );
}
