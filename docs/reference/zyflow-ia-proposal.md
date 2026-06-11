# Zyflow Website — Proposed Information Architecture

> Drafted 2026-06-11. Companion to [`ai71-website-analysis.md`](./ai71-website-analysis.md).
> Grounded in `company-brain/documentation` (mission, structure, positioning,
> lending-agent, strategy — as of 2026-06-10).
> Constraint: **keep the current visual design** (dark theme, 3D agent core hero,
> existing typography/components). Only the IA and content scope change.

---

## 1. The gap today

The current site is a single-page agent showcase (`Agents · How it works ·
Outcomes · Process`) + four `/solutions/*` pages. It only tells the **agents**
story. Per company-brain, the company actually does:

| What the company does | On the site today? |
|---|---|
| **Ready-made agents** — Sterling (lending, commercial spearhead), Steward (delivery PM), Atlas (product PM), Nova (content) | ✅ the only thing shown |
| **Services** — custom development, agent development & creation, agent + AI infrastructure, AI-enablement of teams | ❌ absent |
| **Engagement motion** — free scoping workshop → pilot → harden & expand | ⚠️ partially (Process section) |
| **Products** — Promptick (AI model comparison platform, live) | ❌ absent |
| **Company** — mission ("make every company AI-enabled"), vision (agent marketplace), founders, values | ❌ absent |

## 2. The ai71 analogy

ai71's IA is: *"We deliver AI-powered **products** and strategic **advisory**
services for enterprises and governments"* — two offering groups + company
pages, restated identically in menu, homepage and footer.

Our equivalent sentence (proposed):

> **"Zyflow delivers production AI agents and AI services that make companies
> AI-enabled — agents that own real work end-to-end, with a human always in
> command."**

| ai71 | Zyflow equivalent |
|---|---|
| Products (Ask, SuperHive, Health) | **Agents** — Sterling, Steward, Atlas, Nova |
| Vertical product (SuperHive "For Construction") | Sterling "For Commercial Finance" (flagship) |
| Horizontal product (Ask, by function: HR/Legal/Finance) | Steward / Atlas / Nova (by team: Delivery / Product / Content) |
| Advisory (QBrain: 4 project types, ex-McKinsey credibility) | **Services** — AI enablement, agent development, AI infrastructure, custom development + the workshop → pilot → expand motion |
| "Join waitlist" vs "Request a demo" by maturity | "Request a demo" (Sterling, live & sellable) vs "Talk to us" (other agents/services) |
| Audience chips ("For Construction") | "For Brokers & Lenders", "For Delivery teams", "For Product teams", "For Content teams" |
| Newsroom/Insights | Skip for now (no content engine yet) — phase 2, Nova could power it |
| Careers → external Greenhouse | Skip or defer (hiring follows revenue) |

## 3. Proposed site map

```
zyflow site
├── /                          Home — full company story (see §4)
│
├── AGENTS  (ready-made, productised)            ← nav group 1
│   ├── /agents/lending        Sterling — For commercial finance   [flagship]
│   ├── /agents/delivery       Steward  — For delivery teams
│   ├── /agents/product        Atlas    — For product teams
│   └── /agents/content        Nova     — For content teams
│       (current /solutions/* routes 301-redirect to these)
│
├── SERVICES  (the "advisory" analog)            ← nav group 2
│   └── /services              One page, four offerings + engagement motion:
│                              · AI-enablement of teams
│                              · Agent development & creation
│                              · Agent & AI infrastructure
│                              · Custom development
│                              + How we engage: scoping workshop (free, wk 1)
│                                → pilot → harden & expand
│
├── PRODUCTS                                     ← nav group 3 (small, 1 item)
│   └── /products/promptick    Teaser page → links out to promptick.ai
│
└── COMPANY                                      ← nav group 4
    ├── /about                 Mission · vision (agent marketplace) · values ·
    │                          founders (Sajal & Ankit) · how we work
    └── /contact               Single lead form + email
```

Header nav: `Agents · Services · Company` (+ Promptick inside a grouped
menu/footer, ai71-style). Footer mirrors the same four groups — the footer *is*
the sitemap, like ai71's.

## 4. Homepage — section order (mirrors ai71's narrative arc)

Keep the existing hero canvas and component design; re-scope the copy from
"here are our agents" to "here is the company".

1. **Hero** (keep 3D agent core) — company-level headline, e.g. *"Deep agents
   that run the work, not just chat about it"* elevated with the mission
   framing ("we make companies AI-enabled"). Quick links: Agents · Services ·
   About.
2. **Agents showcase** — one block per agent led by **outcome use-case cards**
   (ai71 pattern), each with an audience chip and dual CTAs:
   - **Sterling — For commercial finance** (first, biggest): "Application →
     lender-ready case pack in 15–20 min vs 4–6 hrs", 5 product types covered,
     decline-rule screening… CTA: *Learn more* + **Request a demo**.
   - **Steward — For delivery teams**, **Atlas — For product teams**,
     **Nova — For content teams**: 2–3 use-case cards each. CTA: *Learn more* +
     *Talk to us*.
3. **Bridge statement** (ai71's exact trick) — one line connecting the halves:
   *"Ready-made agents get you moving fast. Our services team makes them stick
   — and builds what doesn't exist yet."*
4. **Services block** — the four service offerings + the 3-step engagement
   motion (reuse the existing Process component). CTA: *Book a scoping
   workshop* (it's free — say so; it's the strongest hook we have).
5. **Products strip** — small Promptick teaser ("From the same team:
   Promptick — test and compare AI models for your use case") → promptick.ai.
6. **Company statement** — full-width one-liner: the §2 sentence.
7. **About/founders teaser** — mission + two founders + values pointer → /about.
8. **CTA band** — keep one recurring closing ritual on every page, e.g.
   *"Ready to put an agent to work?"* → /contact (existing LeadForm).

## 5. Agent page template (replaces /solutions/* pages, ai71 product template)

1. Hero: outcome H1 + subhead + dual CTA (act-CTA adapts to maturity).
2. What it is / how it runs (existing visuals: CaseFlow, BoardMock, etc.).
3. **Capability tour along a domain axis** —
   Sterling: the pipeline (intake → enrichment → product detection → decline
   screening → document chasing → case pack) *and* the 5 lending products;
   Steward: the board-health loop; Atlas: ticket → spec; Nova: director/creator.
4. **Problem framing with numbers** — e.g. Sterling: "60–70% of a broker's time
   goes to admin, not advising" (straight from the ICP doc).
5. **Built for** — audience cards. For Sterling these are the ICPs, already
   written in company-brain: Solo specialist broker · Growing brokerage ·
   Multi-product generalist · Packager (· Lender BDM, deprioritised — omit or
   keep last).
6. Trust block — grounded/never-fabricated, human-in-command, review gates
   (our positioning differentiators).
7. Pricing note (Sterling only): subscription + usage, scoped per client.
8. Closing CTA band + lead form.

## 6. What stays, what changes

**Keep:** entire design system, 3D hero, dark theme, components
(AgentsRoster, Process, Orchestration, ValueProps, LeadForm), the agents'
real-capability copy in `src/lib/agents.ts`.

**Change:** nav grows from section anchors to grouped pages; homepage re-scoped
to company level; `/solutions/*` → `/agents/*` (with redirects); new pages:
`/services`, `/about`, `/contact`, `/products/promptick`.

**Explicitly out of scope for now:** newsroom/insights, careers, case-study
library (no public case studies yet — Tripare is the only client; revisit when
referenceable), multi-language.

## 7. Open decisions (for Sajal/Ankit)

1. **Brand level of the site** — pure Zyflow services site, or group-level
   (mention Pragee as parent)? *Recommendation: brand as Zyflow; mention the
   group only on /about. The legal merge isn't done (target end-July 2026).*
2. **Promptick on this site at all?** It's a separate brand/domain.
   *Recommendation: yes, one teaser page + footer link — it proves "we build
   products too" and costs nothing. Don't give it nav-bar prominence.*
3. **How loud should the lending spearhead be?** ai71 gives every product equal
   weight; our strategy says Sterling is *the* commercial spearhead.
   *Recommendation: Sterling gets first position and ~2× the homepage real
   estate, plus the only "Request a demo" CTA.*
4. **Contact email** — site currently uses hello@promptick.ai (cost-saving
   domain choice). Keep, or move to a zyflow.work address?
