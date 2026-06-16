"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/types/content";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const visible = category === "All" ? items : items.filter((item) => item.category === category);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`rounded-md border px-4 py-2 text-sm ${category === item ? "border-safety bg-safety text-steel" : "border-white/10 bg-white/5 text-slate-300"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <button key={item.id} onClick={() => setActive(item)} className="group mb-5 block w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left">
            <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <Image src={item.image_url} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
            <div className="p-4">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-400">{item.category}</p>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-steel" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 rounded bg-black/60 p-2 text-white" aria-label="Close image preview">
              <X />
            </button>
            <div className="relative aspect-video">
              <Image src={active.image_url} alt={active.title} fill className="object-cover" sizes="90vw" />
            </div>
            <div className="p-5">
              <p className="text-xl font-bold text-white">{active.title}</p>
              <p className="mt-2 text-slate-300">{active.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
