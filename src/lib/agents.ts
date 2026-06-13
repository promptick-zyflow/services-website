// Single source of truth for the deep-agent roster.
// Copy is grounded in the real Hermes agent capabilities, not invented marketing.

export type Agent = {
  slug: string;
  codename: string; // the agent's real name
  name: string; // marketing role title
  domain: string; // short category
  audience: string; // who it's for, the at-rest card chip (e.g. "For commercial finance")
  tagline: string; // the single at-rest outcome line
  blurb: string;
  capabilities: string[];
  accent: "citron" | "glacier" | "spark";
  status: "live" | "preview";
  href?: string; // landing page route (only built ones link out)
  metric?: { value: string; label: string };
  art?: string; // pixel-art persona (public path), marketplace card
  industry?: string; // industry chip on the marketplace card
  collections?: string[]; // marketplace collections (e.g. "Flagship")
};

export const agents: Agent[] = [
  {
    slug: "loan-broker",
    codename: "Sterling",
    name: "Loan Broker & Lender Agent",
    domain: "Commercial lending",
    audience: "For commercial finance",
    tagline: "Application to lender-ready case in minutes, not hours.",
    blurb:
      "Sterling runs a broker's entire pre-submission workflow autonomously: it captures borrower applications, enriches them with Companies House data, auto-detects which products fit, screens against lender decline rules, and chases missing documents, compiling a structured case pack ready for submission. It recommends; the broker always decides.",
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
    href: "/agents/lending",
    metric: { value: "15–20 min", label: "per case, vs. 4–6 hrs manual" },
    art: "/agents/sterling.svg",
    industry: "Lending",
    collections: ["Flagship"],
  },
  {
    slug: "project-management",
    codename: "Steward",
    name: "Project Management Agent",
    domain: "Delivery & operations",
    audience: "For delivery teams",
    tagline: "An always-on PM that runs the board so your team can ship.",
    blurb:
      "Steward owns your delivery board end-to-end. Every hour it syncs every repo, enforces complete metadata, tracks velocity and burndown, flags overdue and stalled work, and escalates risk before it becomes a missed deadline. It doesn't build features, it runs the ship.",
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
    href: "/agents/delivery",
    metric: { value: "Hourly", label: "board health sweeps" },
    art: "/agents/steward.svg",
    industry: "Project management",
    collections: [],
  },
  {
    slug: "product-manager",
    codename: "Atlas",
    name: "Product Manager Agent",
    domain: "Requirements & specs",
    audience: "For product teams",
    tagline: "Vague ideas into production-ready specs in minutes.",
    blurb:
      "Atlas reads a thin ticket and either drafts a well-formed requirement, problem, scope, MVP, acceptance criteria, success metrics, or asks the sharp clarifying questions that close the gap. It never fabricates: proposals are marked PROPOSED until a human confirms, and tickets are only flagged spec-ready when the requirement is truly knowable.",
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
    href: "/agents/product",
    metric: { value: "30–50%", label: "of PM time is spec-writing" },
    art: "/agents/atlas.svg",
    industry: "Project management",
    collections: [],
  },
  {
    slug: "content",
    codename: "Nova",
    name: "Content Director & Creator Agents",
    domain: "Content at scale",
    audience: "For content teams",
    tagline: "Strategy that directs, production that delivers.",
    blurb:
      "A Director sets strategy, calendar and brand voice; a Creator produces the work, from long-form to social-native video built on a single deterministic production plan. Every output passes a quality gate before it ships: on-brand, reviewed frame-by-frame, with humans in the loop.",
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
    href: "/agents/content",
    metric: { value: "QA-gated", label: "nothing ships unreviewed" },
    art: "/agents/nova.svg",
    industry: "Social media",
    collections: [],
  },
];

// In the lab, marketplace teasers without landing pages yet.
export const moreAgents = [
  {
    codename: "Oracle",
    name: "Markets & Research",
    blurb: "Deep-research investing with mechanical risk discipline. Paper-first.",
    industry: "Markets & research",
  },
  {
    codename: "Kratos",
    name: "Chief of Staff",
    blurb: "Orchestrates the roster and cross-checks every high-stakes action.",
    industry: "Operations",
  },
];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);

// ------------------------------------------------------------------
// Industry-wide split (ai71-style product showcase): three tall
// color-block cards side by side, chips on top, big name + arrow,
// tagline pill. Clicking a card opens it in place into a panel of
// rotating use-case slides (dot pagination) + learn/act CTAs.
// ------------------------------------------------------------------

export type SlideArt = {
  src: string;
  frames: number; // horizontal frames in the sprite sheet (1 = plain image)
  w: number; // single-frame width (native px)
  h: number; // single-frame height (native px)
};

export type IndustrySlide = {
  text: string; // outcome-first use-case statement
  agent?: string; // codename attribution shown under the statement
  href: string; // "Learn more" target while this slide is active
  art?: SlideArt; // per-stage pixel art (shown greyed in the open panel)
};

export type Persona = {
  name: string; // agent codename
  art: string; // pixel-art portrait (public path)
};

export type Industry = {
  id: string;
  name: string;
  audience: string[]; // chips at the top of the card
  pill: string; // at-rest tagline pill at the bottom
  accent: "citron" | "glacier" | "spark";
  personas: Persona[]; // pixel-art agent personas shown on the card
  slides: IndustrySlide[];
  actLabel: string; // secondary CTA, adapts to maturity (demo vs partner)
  actHref: string;
};

export const industries: Industry[] = [
  {
    id: "lending",
    name: "Lending",
    audience: ["For brokers", "For lenders"],
    pill: "Application to case pack, autonomously",
    accent: "citron",
    personas: [{ name: "Sterling", art: "/agents/sterling.svg" }],
    slides: [
      {
        text: "Borrower application to lender-ready case pack in 15–20 minutes",
        agent: "Sterling",
        href: "/agents/lending",
        // banknote, the case pack
        art: { src: "/agents/sterling-stage-1.svg", frames: 1, w: 599, h: 382 },
      },
      {
        text: "Every case screened against lender decline rules before submission",
        agent: "Sterling",
        href: "/agents/lending",
        // checklist + magnifier, screening
        art: { src: "/agents/sterling-stage-2.svg", frames: 1, w: 515, h: 620 },
      },
      {
        text: "Missing documents chased automatically, no broker hours lost",
        agent: "Sterling",
        href: "/agents/lending",
        // OK button, docs confirmed in
        art: { src: "/agents/sterling-stage-3.svg", frames: 1, w: 612, h: 320 },
      },
      {
        text: "Companies House enrichment and multi-product facility detection, built in",
        agent: "Sterling",
        href: "/agents/lending",
        // sparkles, enrichment
        art: { src: "/agents/sterling-stage-4.svg", frames: 1, w: 612, h: 524 },
      },
    ],
    actLabel: "Request a demo",
    actHref: "#contact",
  },
  {
    id: "project-management",
    name: "Project management",
    audience: ["For delivery & product teams"],
    pill: "Boards and specs that run themselves",
    accent: "glacier",
    personas: [
      { name: "Steward", art: "/agents/steward.svg" },
      { name: "Atlas", art: "/agents/atlas.svg" },
    ],
    slides: [
      {
        text: "Delivery boards that run themselves, synced, tracked, escalated hourly",
        agent: "Steward",
        href: "/agents/delivery",
        // laptop, the board at work
        art: { src: "/agent-hero/computer.png", frames: 5, w: 32, h: 32 },
      },
      {
        text: "Vague ideas turned into production-ready specs in minutes",
        agent: "Atlas",
        href: "/agents/product",
        // book stack, the written spec
        art: { src: "/agent-hero/coffee.png", frames: 6, w: 16, h: 16 },
      },
      {
        text: "Risk flagged and escalated before it becomes a missed deadline",
        agent: "Steward",
        href: "/agents/delivery",
        // floor marker, the flagged spot
        art: { src: "/agent-hero/selection.png", frames: 3, w: 16, h: 16 },
      },
    ],
    actLabel: "Request a demo",
    actHref: "#contact",
  },
  {
    id: "social-media",
    name: "Social media",
    audience: ["For content & social teams"],
    pill: "Strategy that directs, production that delivers",
    accent: "spark",
    personas: [{ name: "Nova", art: "/agents/nova.svg" }],
    slides: [
      {
        text: "A Director agent owns strategy, calendar and brand voice",
        agent: "Nova",
        href: "/agents/content",
        // bookshelf, the content library
        art: { src: "/agent-hero/bookshelf.png", frames: 2, w: 40, h: 52 },
      },
      {
        text: "Social-native video produced on deterministic production plans",
        agent: "Nova",
        href: "/agents/content",
        // light beams, broadcast
        art: { src: "/agent-hero/lightrays.png", frames: 1, w: 210, h: 226 },
      },
      {
        text: "Nothing ships unreviewed, every post passes a quality gate",
        agent: "Nova",
        href: "/agents/content",
        // review table with books, the quality gate
        art: { src: "/agent-hero/coffee-table.png", frames: 2, w: 40, h: 29 },
      },
    ],
    actLabel: "Request a demo",
    actHref: "#contact",
  },
];
