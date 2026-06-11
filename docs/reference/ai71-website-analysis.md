# ai71.ai — Information Architecture & Design Reference

> Captured 2026-06-11 by browsing every page of https://ai71.ai/ in a live browser.
> Purpose: reference for restructuring the Zyflow services website's information
> architecture. We keep our own visual design; this documents *how ai71 organises
> and presents everything the company does*.
>
> Full-page screenshot of the homepage: [`ai71-home.jpeg`](./ai71-home.jpeg)

---

## 1. Who ai71 is (for context)

ai71 is an Abu Dhabi AI company (launched 2023, chaired by H.E. Faisal Al Bannai,
linked to ATRC/TII and the Falcon LLM). Their one-line self-description, verbatim
from the homepage:

> "At ai71, we deliver AI powered products and strategic advisory services
> designed for enterprises and governments."

That sentence *is* the information architecture: **Products + Advisory**, for
**enterprises and governments**. Every page hangs off that split.

---

## 2. Site map

```
ai71.ai
├── /                       Home
├── Products
│   ├── /ask                Ask        — enterprise AI assistant (horizontal, all functions)
│   ├── /superhive          SuperHive  — construction intelligence (vertical)
│   └── /health             Health     — healthcare revenue cycle (vertical)
├── Advisory
│   └── /qbrain             QBrain     — strategic AI advisory / consulting
├── Company
│   ├── /about-us           About — leadership, team, people stories
│   ├── /careers            Careers — short page, links to Greenhouse job board
│   └── /contact-us         Contact — email, address, HubSpot form
├── Content
│   ├── /all-articles       All articles (combined feed, search + filter)
│   ├── /insights           Insights (thought-leadership subset)
│   ├── /newsroom           Newsroom (press/announcements subset)
│   └── /newsroom/<slug>    Individual articles
└── Legal (footer only)
    ├── /privacy-policy  /terms-of-use  /cookie-preferences
    ├── /accessibility-statement
    └── /ethical-ai-commitment        ← note: ethics as a first-class footer item
```

### Global navigation (hamburger menu — same structure as footer)

The header is minimal: logo left, hamburger right. The menu opens to **three
labelled groups**, which is the clearest statement of their IA:

| Group | Items |
|---|---|
| **Learn more** | Home · About us · Careers · Insights & Newsroom · Contact us |
| **Products** | Ask · SuperHive · Health |
| **Advisory** | QBrain |

Takeaway: *offerings are separated from company pages, and advisory is
deliberately a separate group from products — two different kinds of value.*

---

## 3. Page-by-page structure

### 3.1 Home (`/`)

Section order top to bottom:

1. **Hero** — full-screen brand statement: *"Intelligence that works for the
   real world"* (no product mention). Quick links beneath it: For enterprises ·
   About us · Careers · News.
2. **Product showcase** — *"Bring the benefits of AI to your workplace."*
   One block per product, each carried by **use-case cards, not feature lists**:
   - **Ask** (tagged *For Enterprise / For Government*): 5 rotating use-case
     cards phrased as outcomes — "Find answers in emails, contracts,
     spreadsheets…", "Get talent insights, automate HR policies…", "Forecast
     revenue, ensure compliance…", "Review contracts…", "Uncover lead
     insights…". Each card: **Learn more** (→ product page) + **Join waitlist**
     (→ form anchor).
   - **SuperHive** (tagged *For Construction*): 5 use-case cards ("Validate CAD
     and BIM files…", "Forecast delays using satellite imagery…", "Power
     digital twins…", …). CTAs: Learn more + **Request a demo**.
   - **Health** (tagged *For Healthcare*): 5 use-case cards ("Auto-generate
     structured clinical notes…", "Validate and track insurance claims…", …).
     CTAs: Learn more + Join waitlist.
3. **Bridge statement** — one sentence linking products to advisory: *"We
   believe that AI adoption in the enterprise world can only be achieved through
   close collaboration between product innovation and strategic advisory
   guidance."*
4. **Advisory (QBrain)** — *"Strategic AI advisory for real impact / From
   clarity to outcomes."* One block, one CTA (Learn more about QBrain).
5. **Company one-liner** — the "products + advisory for enterprises and
   governments" sentence, as a full-width statement section.
6. **Team teaser** — *"Meet the team behind ai71"* + photo strip + blurb about
   scientists/engineers/GTM leaders + CTAs: About us · See open roles.
7. **News carousel** — *"What's new at ai71"*: 8 cards (date + category badge +
   image + title) + View all news.
8. **Big CTA footer band** — *"Ready to put AI to work?"* + Let's talk
   (→ /contact-us).

### 3.2 Product pages (`/ask`, `/superhive`, `/health`) — a shared template

All three follow the same skeleton, with per-product variations:

1. **Hero**: H1 value statement + one-paragraph subhead + two CTAs —
   primary (*Join waitlist* / *Request a demo*, anchor to on-page form) and
   secondary (*Explore use cases* / *Explore results*, anchor to a section).
   Hero artwork = product UI mock or illustration.
2. **Product intro / demo**: SuperHive embeds a 2-min video; Ask shows in-app
   agent cards; Health shows a dashboard screenshot.
3. **Capability tour, organised by a domain axis**:
   - Ask → by **business function**: HR, Legal, Finance, Procurement — each with
     6 concrete task chips (Onboarding, Contract Analysis, Revenue Forecasting…).
   - SuperHive → by **lifecycle stage**: 01 Planning, 02 Design, 03 Execution,
     04 Monitoring (numbered tab slider), then a 5-module card slider
     (Strategic planning, Analyze Studio, CAD-to-BIM, Construction monitoring,
     Digital twins).
   - Health → by **suite area** (4 numbered tabs: RCM, HealthExpert, Hospital
     Ops, Clinical documentation), then a 7-module grid for the RCM pipeline.
4. **Problem framing** (SuperHive/Health): "What's broken in construction
   today" / "Fixing revenue cycle from the ground up" — 4–5 pain-point cards
   **with hard numbers** ("Up to 40% of project time is spent on repetitive
   tasks", "80% of project data is unstructured").
5. **Case studies / results**: 4 anonymised outcome cards, written as
   *industry + intervention + quantified result* ("…reducing approval cycles
   from 1 month to 1 minute, boosting accuracy from 42% to 99%").
6. **Benefits** (Health): 4 quantified benefit cards.
7. **"Built for"** — explicit audience cards (SuperHive: Governments &
   authorities / Developers & investors / Consultants & engineers / Contractors.
   Health: Executive teams / Billing & RCM teams / RCM service providers).
   Each: who + the outcome they care about, one line.
8. **Lead form** (HubSpot embed) under the same recurring headline *"Ready to
   put AI to work?"* — First/Last name, Work email, Organisation, Job title,
   Phone, Message. Button mirrors the page's primary CTA.

### 3.3 Advisory page (`/qbrain`)

1. Hero: *"Intelligence that works on your biggest business challenges"* +
   CTAs: **Talk to advisors** (form anchor) · Explore results.
2. **Urgency/why**: "The AI revolution isn't coming. It's here." — *85% of AI
   projects fail to deliver… the difference is execution.*
3. **Project types we deliver with you** — 4 engagement-type cards:
   AI strategy & opportunity sizing · AI-powered functional transformation ·
   AI architecture deployment · Custom AI solution & product development.
4. **Advisory in action** — 4 anonymised case cards (client type + what was
   delivered).
5. **Expertise that drives impact** — credibility paragraph (ex-McKinsey/BCG/
   Bain + Google/Microsoft/Amazon/DeepMind) + advisor profile cards.
6. Lead form ("Talk to advisors", message field = "Describe your challenge").

### 3.4 About (`/about-us`)

1. Hero: *"Building the next generation of applied intelligence"* + CTA to
   careers.
2. **Leadership spotlights** — Chairman, then CEO: portrait + role + short bio
   with external credibility links.
3. **Meet some of our people** — team grid, filterable by team (Product, AI
   Advisory, Engineering, Commercial, Vertical Products), each card with
   "Learn more" expansion.
4. **People stories** — video-story carousel of individual employees.
5. CTA band → contact.

### 3.5 Careers (`/careers`)

Deliberately tiny: hero ("Build what matters. Together.") → one culture
paragraph → CTA out to an external Greenhouse job board. No in-site listings.

### 3.6 Contact (`/contact-us`)

Two-column: left = headline ("Let's turn ideas into action."), email address,
physical address; right = HubSpot form (name, work email, organisation, phone,
message). No map, no departments.

### 3.7 Articles (`/all-articles`, `/insights`, `/newsroom`)

One combined feed with tab filters (All / Insights / Newsroom) + search.
Featured article on top, then a card grid (date + category + image + title).
Categories: Applied AI, Announcements, Press releases, Events, Media mentions.

---

## 4. Design language (what makes it feel the way it does)

We are **keeping our own design**, but these are the patterns that carry their IA:

- **Dark, calm, premium**: deep navy base, soft organic 3D "dune/wave" renders
  as section backgrounds, generous whitespace, slow reveal animations.
- **Typography does the branding**: large serif/italic emphasis words inside
  otherwise plain headlines ("Intelligence *that works for* the real world",
  "What's *new* at ai71").
- **Audience tags everywhere**: every offering card carries a chip — *For
  Enterprise*, *For Government*, *For Construction*, *For Healthcare*. You
  always know who a thing is for.
- **Two CTAs per offering, consistently**: a *learn* CTA (page) and an *act*
  CTA (waitlist/demo/talk-to-advisors form anchor). The act-CTA label adapts to
  product maturity — *Join waitlist* (early) vs *Request a demo* (sellable).
- **Outcome-first copy**: cards lead with what you get ("Forecast delays…",
  "Recover up to 4% of revenue"), not with features or tech.
- **Numbers as proof**: pain points and case studies are quantified
  aggressively (40% time on admin, 1 month → 1 minute, 42% → 99% accuracy).
- **One recurring closing ritual**: nearly every page ends with the same
  "Ready to put AI to work?" + form/CTA band — a single, repeated conversion
  pattern.
- **Minimal header, rich menu/footer**: nav chrome stays out of the way; the
  grouped menu (Learn more / Products / Advisory) is the sitemap.

---

## 5. IA lessons to borrow for our site

1. **Lead with the company, not one offering.** Their homepage sells "products
   + advisory for enterprises and governments" before any single product. Ours
   currently sells only the agents.
2. **Name the split.** Products vs Advisory is explicit in the menu, footer and
   homepage. Our equivalent split (agents / services / products) should be just
   as explicit.
3. **One template per offering page.** Hero → what it is → capabilities along a
   domain axis → problem (quantified) → case studies → built for → form. Repeatable
   and cheap to extend when an offering is added.
4. **Tag every offering with its audience/vertical.** ("For Construction" ⇒ for
   us: "For Lending", "For Delivery Teams", "For Content Teams"…)
5. **Adapt the CTA to maturity.** Live & sellable ⇒ "Request a demo"; early ⇒
   "Join waitlist". Maps cleanly to our live agents vs roadmap items.
6. **Quantify or it didn't happen.** Every claim is a number. We have these
   (15–20 min per case vs 4–6 hrs manual) and should use them the same way.
7. **The team is a section, not a footnote** — founders + team build trust for
   a young company selling to enterprises.
8. **End every page the same way** — one repeated CTA band + one form pattern.
