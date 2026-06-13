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

All event names live in one place — the `EVENTS` map in `src/lib/mixpanel.ts`.
Add new events there; don't pass raw strings at call sites.

## Auto-attached properties (super properties)

Registered on every page view, so every event carries them automatically:

| Property | Meaning |
|----------|---------|
| `page` | friendly page name (`home`, `services`, `agents`, `agent-lending`, `about`, `contact`, `promptick`) |
| `path` | raw pathname |

## Event catalog

| Event | Fires when | Notable properties |
|-------|-----------|--------------------|
| `landed-page` | every page view (initial load + client-side navigation) | `navigation_type` |
| `viewed-section` | a home-page section first scrolls ≥30% into view | `section` |
| `clicked-nav-link` | a top-nav link is clicked | `label`, `destination`, `location` (`header` / `mobile-nav`) |
| `clicked-logo` | the nav logo is clicked | `destination` |
| `opened-menu` / `closed-menu` | mobile nav toggled | `location` |
| `clicked-cta` | a call-to-action link (global CTA block; the Industries "Learn more" / act links) | `label`, `destination`, `location` (`global-cta` / `industries`), `industry?` |
| `clicked-button` | a tracked button (nav demo button, "Meet all the agents", agent filters) | `label`, `location`, `destination?` |
| `clicked-agent-card` | a per-agent card is clicked (the `/agents` marketplace) | `agent`, `location` (`marketplace` / `roster`), `flagship?` |
| `clicked-footer-link` | a footer sitemap link | `label`, `destination`, `group` |
| `started-lead-form` | first focus on the lead form | `interest` |
| `submitted-lead-form` | the form is submitted (post-honeypot) | `interest` |
| `completed-lead-form` | `/api/lead` returned success | `interest` |
| `failed-lead-form` | submission errored | `interest`, `reason` |

The lead-form funnel is `started → submitted → completed | failed`.

## Helpers

- `src/components/site/TrackedLink.tsx` — a `next/link` that fires an event on
  click. Use it to instrument links inside server components.
- `src/components/site/SectionView.tsx` — wraps a section and fires
  `viewed-section` once on first scroll-in.

## Verifying

Run the app, interact, then check the **Events** view in the relevant Mixpanel
project (or query via the Mixpanel MCP). Disable ad/privacy blockers when
testing — they block `api-eu.mixpanel.com`.
