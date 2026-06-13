# Analytics (Mixpanel)

How product analytics is wired up on this site, and the catalog of events.

## Setup

- SDK: `mixpanel-browser`, initialised in `src/lib/mixpanel.ts`.
- Boot point: `src/instrumentation-client.ts` (Next's pre-hydration client
  instrumentation hook) — initialises Mixpanel and tracks the first page view.
- **EU data residency:** both Mixpanel projects are EU, so the SDK is pinned to
  `api_host: https://api-eu.mixpanel.com`. Events sent to the default US host are
  silently dropped.
- Token: `NEXT_PUBLIC_MIXPANEL_TOKEN`.
  - Local dev (`.env.local`) → **zyflow-dev** project (`224b72c1…`).
  - Production (Vercel env var) → **Zyflow** project (`91d6d496…`).

## Naming convention

Event names are **`<action>-<object>`** — lowercase, hyphen-separated, action
first. The action comes from a fixed verb set; specifics go in **properties**,
not the name, so the catalog stays bounded and reports break down cleanly.

Verbs: `landed`, `viewed`, `clicked`, `opened`/`closed`, `started`,
`submitted`, `completed`, `failed`.

All element-event names live in one place — the `EVENTS` map in
`src/lib/mixpanel.ts`. Add new events there; don't pass raw strings at call
sites.

**Exception — page-view and section-view events embed their subject in the
name** (not just a property), so each page/section is a distinct event in
Mixpanel's Events list rather than one generic event you have to break down:
`landed-home-page`, `viewed-offerings-section`, etc. These names are built
dynamically by `trackLandedPage` / `trackSectionView`. The `page`/`section`
values are still kept as properties too.

## Auto-attached properties (super properties)

Registered on every page view, so every event carries them automatically:

| Property | Meaning |
|----------|---------|
| `page` | friendly page name (`home`, `services`, `agents`, `agent`, `about`, `contact`, `promptick`) — all four agent detail pages share `agent` |
| `path` | raw pathname |
| `agent` | on agent detail pages only: route slug (`lending` / `content` / `product` / `delivery`). Cleared when leaving. |
| `codename` | on agent detail pages only: persona name (`Sterling` / `Steward` / `Atlas` / `Nova`). Cleared when leaving. |

## Event catalog

| Event | Fires when | Notable properties |
|-------|-----------|--------------------|
| `landed-<page>-page` | every page view (initial + client nav). Page-specific name, e.g. `landed-home-page`, `landed-services-page` | `navigation_type`, `page` |
| `landed-agent-page` | the four agent detail pages share one template, so they share one event; which agent is in the properties | `agent` (route slug), `codename` (persona) |
| `viewed-<section>-section` | a section first scrolls into view (all pages). Section-specific name, e.g. `viewed-hero-section`, `viewed-offerings-section` | `section`, `page` |
| `clicked-nav-link` | a top-nav link is clicked | `label`, `destination`, `location` (`header` / `mobile-nav`) |
| `clicked-logo` | the nav logo is clicked | `destination` |
| `opened-menu` / `closed-menu` | mobile nav toggled | `location` |
| `clicked-cta` | any primary-variant `Button`, plus the global CTA block and Industries "Learn more"/act links | `label`, `destination`, `variant`, `location?`, `industry?` |
| `clicked-button` | any non-primary `Button`, plus agent filters, "Meet all the agents", service chips | `label`, `destination?`, `variant?`, `location?` |
| `clicked-agent-card` | a per-agent card is clicked (the `/agents` marketplace) | `agent`, `location` (`marketplace` / `roster`), `flagship?` |
| `clicked-footer-link` | a footer sitemap link | `label`, `destination`, `group` |
| `clicked-email` | the `mailto:` link on the contact page | `email`, `location` |
| `searched-agents` | marketplace search, 600ms after typing stops | `query`, `results` |
| `selected-interest` | the lead-form interest dropdown is changed | `interest` |
| `started-lead-form` | first focus on the lead form | `interest` |
| `submitted-lead-form` | the form is submitted (post-honeypot) | `interest` |
| `completed-lead-form` | `/api/lead` returned success | `interest` |
| `failed-lead-form` | submission errored | `interest`, `reason` |

The lead-form funnel is `started → submitted → completed | failed`.

## Helpers

- **`Button` (`src/components/ui/Button.tsx`)** — the shared button auto-fires
  on every click (primary → `clicked-cta`, else `clicked-button`) with its
  label, destination and variant. Opt out with `noTrack`; override the label
  with `trackLabel`; set context with `trackLocation`. This is what gives every
  CTA across the site coverage without per-button wiring.
- `src/components/site/TrackedLink.tsx` — a `next/link` that fires an event on
  click. Use it to instrument raw links inside server components.
- `src/components/site/TrackedEmail.tsx` — a `mailto:` link that fires `clicked-email`.
- `src/components/site/SectionView.tsx` — wraps a component and fires
  `viewed-section` once on first scroll-in (used at the page level).
- **`Section` `view` prop** — pass `view="name"` to the `Section` primitive and
  it self-reports `viewed-section` via a `SectionBeacon`, no wrapper needed.
  Used by the shared agent-page blocks in `landing/Sections.tsx`.

## Verifying

Run the app, interact, then check the **Events** view in the relevant Mixpanel
project (or query via the Mixpanel MCP). Disable ad/privacy blockers when
testing — they block `api-eu.mixpanel.com`.
