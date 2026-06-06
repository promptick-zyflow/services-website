import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://promptick.ai";
  const pages = [
    "/solutions/loan-broker",
    "/solutions/project-management",
    "/solutions/product-manager",
    "/solutions/content",
  ];
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
