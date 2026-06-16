import type { Metadata } from "next";
import { GalleryGrid } from "@/components/public/GalleryGrid";
import { SectionHeading } from "@/components/public/SectionHeading";
import { getGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Gallery",
  description: "Masonry gallery of site progress, civil works, structural work, finishing, equipment, and team coordination images."
};

export default async function GalleryPage() {
  const items = await getGallery();
  return (
    <main className="container-shell py-16">
      <SectionHeading eyebrow="Gallery" title="Visual construction progress and site documentation" description="Images are managed through Supabase and organized by construction activity type, from structural work to finishing and equipment coordination." />
      <div className="mt-12"><GalleryGrid items={items} /></div>
    </main>
  );
}
