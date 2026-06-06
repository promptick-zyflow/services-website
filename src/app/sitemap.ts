import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://promptick.ai";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/solutions/loan-broker`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
