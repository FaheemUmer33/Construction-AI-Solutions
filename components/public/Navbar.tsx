"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/public/BrandLogo";
import { brand } from "@/lib/brand";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-steel/88 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-elevation2" : ""}`}>
      <nav className={`container-shell flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-[72px] py-2"}`}>
        <Link href="/" className="flex items-center gap-3 font-bold">
          <BrandLogo />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <button className="rounded-md p-2 text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">
          <Menu />
        </button>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-50 bg-steel/96 p-5 backdrop-blur-xl lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <BrandLogo />
            <button className="rounded-md p-2" onClick={() => setOpen(false)} aria-label="Close navigation">
              <X />
            </button>
          </div>
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md border border-white/10 p-4 text-lg text-white">
                {label}
              </Link>
            ))}
            <p className="mt-4 text-sm leading-6 text-slate-400">{brand.tagline}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
