export const site = {
  name: "Zyflow",
  domain: "promptick.ai",
  tagline: "Deep agents that run the work, not just chat about it.",
  description:
    "Zyflow delivers production AI agents and AI services that make companies AI-enabled — agents that own real workflows end-to-end, with a human always in command.",
  email: "hello@promptick.ai",
  // Header navigation — top-level IA groups. The footer carries the full sitemap.
  nav: [
    { label: "Agents", href: "/#agents" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ],
  // Footer sitemap groups (ai71-style: the footer is the sitemap).
  footerGroups: {
    services: [
      { label: "AI-enablement of teams", href: "/services#enablement" },
      { label: "Agent development", href: "/services#agent-development" },
      { label: "Agent & AI infrastructure", href: "/services#infrastructure" },
      { label: "Custom development", href: "/services#custom-development" },
    ],
    products: [
      { label: "Promptick", href: "/products/promptick" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
