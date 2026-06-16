import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { getProjects } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = brand.domain;
  const routes = ["", "/about", "/projects", "/services", "/gallery", "/testimonials", "/contact"];
  const projects = await getProjects();
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }))
  ];
}
