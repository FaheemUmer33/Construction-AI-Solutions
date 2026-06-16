import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/public/Footer";
import { Navbar } from "@/components/public/Navbar";
import { PageFade } from "@/components/public/PageFade";
import { brand } from "@/lib/brand";
import { getProfile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(brand.domain),
  title: {
    default: brand.seoTitle,
    template: `%s | ${brand.name}`
  },
  description: brand.description,
  openGraph: {
    title: brand.seoTitle,
    description: brand.ogDescription,
    images: ["/og-image.jpg"],
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const profile = await getProfile();
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <PageFade>{children}</PageFade>
        <Footer profile={profile} />
      </body>
    </html>
  );
}
