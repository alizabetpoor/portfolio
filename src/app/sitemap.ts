import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alizabetpour.ir",
      lastModified: new Date("2026-11-21T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
