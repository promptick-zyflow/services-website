# Zyflow — Services Website

Marketing site for Zyflow's **deep agents**: production AI agents that own entire
business workflows end-to-end (lending, delivery, product specs, content), with a
human always in command.

Live roster of agents (grounded in the real Hermes agent capabilities):

| Agent | Codename | Domain |
| --- | --- | --- |
| Loan Broker & Lender Agent | Sterling | Commercial lending |
| Project Management Agent | Steward | Delivery & operations |
| Product Manager Agent | Atlas | Requirements & specs |
| Content Director & Creator | Nova | Content at scale |

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` (`@theme`)
- **React Three Fiber + drei + postprocessing** — the hero "agent core" 3D scene
- **Motion** (`motion/react`) — scroll reveals and load animations
- **Lenis** — smooth momentum scrolling

## Design system — "Obsidian Observatory"

Dark, cinematic, premium. Citron (`--color-citron`) signal + glacier-blue glow on an
obsidian base. Type: **Bricolage Grotesque** (display) / **Hanken Grotesk** (body) /
**JetBrains Mono** (technical labels).

The 3D hero is **lazy-loaded after first paint**, **disabled on mobile and
`prefers-reduced-motion`**, and falls back to a CSS aurora — so Lighthouse stays high.

## Local setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx                  # fonts, metadata, nav/footer, smooth scroll
    page.tsx                    # homepage (composed of home/* sections)
    solutions/loan-broker/      # landing page #1 (the template for the rest)
    api/lead/route.ts           # lead capture (validates, persists, optional webhook)
    sitemap.ts / robots.ts      # SEO
  components/
    site/                       # Nav, Footer, Reveal, SmoothScroll
    ui/Primitives.tsx           # Button, Section, Eyebrow
    three/                      # AgentCore (R3F scene) + lazy canvas wrapper
    home/                       # homepage sections
    loan/                       # loan-broker-specific visuals
    leadform/LeadForm.tsx       # the lead-capture form
  lib/
    agents.ts                   # single source of truth for the agent roster
    site.ts                     # nav + brand config
```

## Lead capture

`POST /api/lead` validates name + email, drops honeypot submissions, appends to
`data/leads.jsonl` (git-ignored, best-effort), and forwards to `LEAD_WEBHOOK_URL` if
set. Point `LEAD_WEBHOOK_URL` at a CRM / Slack / Zapier endpoint in production.

## Adding the remaining landing pages

`/solutions/loan-broker` is the reference template. The other three (project
management → Steward, product manager → Atlas, content → Nova) follow the same section
structure, driven by data in `src/lib/agents.ts`.
