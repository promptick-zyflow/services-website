import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old /solutions/* IA → new /agents/* IA (renamed slugs).
    return [
      { source: "/solutions/loan-broker", destination: "/agents/lending", permanent: true },
      { source: "/solutions/project-management", destination: "/agents/delivery", permanent: true },
      { source: "/solutions/product-manager", destination: "/agents/product", permanent: true },
      { source: "/solutions/content", destination: "/agents/content", permanent: true },
    ];
  },
};

export default nextConfig;
