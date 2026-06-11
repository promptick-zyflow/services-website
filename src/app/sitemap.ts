import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://promptick.ai";
  const pages = [
    "/agents/lending",
    "/agents/delivery",
    "/agents/product",
    "/agents/content",
    "/services",
    "/products/promptick",
    "/about",
    "/contact",
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
