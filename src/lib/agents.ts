// Single source of truth for the deep-agent roster.
// Copy is grounded in the real Hermes agent capabilities, not invented marketing.

export type Agent = {
  slug: string;
  codename: string; // the agent's real name
  name: string; // marketing role title
  domain: string; // short category
  tagline: string;
  blurb: string;
  capabilities: string[];
  accent: "citron" | "glacier" | "spark";
  status: "live" | "preview";
  href?: string; // landing page route (only built ones link out)
  metric?: { value: string; label: string };
};

export const agents: Agent[] = [
  {
    slug: "loan-broker",
    codename: "Sterling",
    name: "Loan Broker & Lender Agent",
    domain: "Commercial lending",
    tagline: "From application to lender-ready case in minutes, not hours.",
    blurb:
      "Sterling runs a broker's entire pre-submission workflow autonomously: it captures borrower applications, enriches them with Companies House data, auto-detects which products fit, screens against lender decline rules, and chases missing documents — compiling a structured case pack ready for submission. It recommends; the broker always decides.",
    capabilities: [
      "Document ingestion & parsing (bank statements, accounts, filings)",
      "Companies House enrichment",
      "Multi-product facility detection",
      "Lender decline-rule screening",
      "Automated borrower follow-ups",
      "Structured, submission-ready case packs",
    ],
    accent: "citron",
    status: "live",
    href: "/solutions/loan-broker",
    metric: { value: "15–20 min", label: "per case, vs. 4–6 hrs manual" },
  },
  {
    slug: "project-management",
    codename: "Steward",
    name: "Project Management Agent",
    domain: "Delivery & operations",
    tagline: "An always-on PM that runs the board so your team can ship.",
    blurb:
      "Steward owns your delivery board end-to-end. Every hour it syncs every repo, enforces complete metadata, tracks velocity and burndown, flags overdue and stalled work, and escalates risk before it becomes a missed deadline. It doesn't build features — it runs the ship.",
    capabilities: [
      "Org-wide board sync across repos",
      "Capacity, velocity & burndown tracking",
      "Dependency & critical-path awareness",
      "Overdue, stalled & at-risk detection",
      "Automated status summaries",
      "GitHub Projects, Linear & Jira ready",
    ],
    accent: "glacier",
    status: "live",
    href: "/solutions/project-management",
    metric: { value: "Hourly", label: "board health sweeps" },
  },
  {
    slug: "product-manager",
    codename: "Atlas",
    name: "Product Manager Agent",
    domain: "Requirements & specs",
    tagline: "Turn vague ideas into production-ready specs in minutes.",
    blurb:
      "Atlas reads a thin ticket and either drafts a well-formed requirement — problem, scope, MVP, acceptance criteria, success metrics — or asks the sharp clarifying questions that close the gap. It never fabricates: proposals are marked PROPOSED until a human confirms, and tickets are only flagged spec-ready when the requirement is truly knowable.",
    capabilities: [
      "Idea & ticket → structured PRD",
      "User-story decomposition",
      "Acceptance criteria with edge cases",
      "Batched, high-signal clarifying questions",
      "Anti-fabrication: marks PROPOSED",
      "Export to Linear, Jira & GitHub",
    ],
    accent: "citron",
    status: "live",
    href: "/solutions/product-manager",
    metric: { value: "30–50%", label: "of PM time is spec-writing" },
  },
  {
    slug: "content",
    codename: "Nova",
    name: "Content Director & Creator Agents",
    domain: "Content at scale",
    tagline: "A two-agent content engine: strategy that directs, production that delivers.",
    blurb:
      "A Director sets strategy, calendar and brand voice; a Creator produces the work — from long-form to social-native video built on a single deterministic production plan. Every output passes a quality gate before it ships: on-brand, reviewed frame-by-frame, with humans in the loop.",
    capabilities: [
      "Content strategy & editorial calendar",
      "Brand-voice consistency enforcement",
      "Articles, social, email & ad copy",
      "Social-native video production",
      "Deterministic production plans",
      "Quality gate before publish",
    ],
    accent: "spark",
    status: "live",
    href: "/solutions/content",
    metric: { value: "QA-gated", label: "nothing ships unreviewed" },
  },
];

// Teaser only — not a landing page.
export const moreAgents = [
  {
    codename: "Oracle",
    name: "Markets & Research",
    blurb: "Deep-research investing with mechanical risk discipline. Paper-first.",
  },
  {
    codename: "Kratos",
    name: "Chief of Staff",
    blurb: "Orchestrates the roster and cross-checks every high-stakes action.",
  },
];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);
