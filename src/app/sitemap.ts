import type { MetadataRoute } from "next";
import { zones } from "@/data/zones";
import { serviceCategories } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://plomberieidf.fr";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/zones-intervention`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...serviceCategories.map((s) => ({
      url: `${base}/services/${s.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...zones.map((z) => ({
      url: `${base}/zones-intervention/${z.code}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
