import mixpanel, { type Dict } from "mixpanel-browser";
import { agents } from "@/lib/agents";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let started = false;

/* ------------------------------------------------------------------
   Event catalog — the single source of truth for analytics names.
   Convention: `<action>-<object>`, lowercase, hyphen-separated, action
   first. The specifics (which page, which label, where a link leads)
   live in PROPERTIES, not the name, so the set of names stays bounded
   and reports stay easy to break down. See docs/analytics.md.
------------------------------------------------------------------ */
export const EVENTS = {
  clickedNavLink: "clicked-nav-link",
  clickedLogo: "clicked-logo",
  openedMenu: "opened-menu",
  closedMenu: "closed-menu",
  clickedCta: "clicked-cta",
  clickedButton: "clicked-button",
  clickedAgentCard: "clicked-agent-card",
  clickedFooterLink: "clicked-footer-link",
  clickedEmail: "clicked-email",
  searchedAgents: "searched-agents",
  selectedInterest: "selected-interest",
  startedLeadForm: "started-lead-form",
  submittedLeadForm: "submitted-lead-form",
  completedLeadForm: "completed-lead-form",
  failedLeadForm: "failed-lead-form",
} as const;

export type AnalyticsEvent = (typeof EVENTS)[keyof typeof EVENTS];

/**
 * Initialise the Mixpanel browser SDK. Safe to call more than once — the body
 * only runs on the first invocation and is a no-op when no token is configured
 * (e.g. local clones without an `.env.local`).
 *
 * Called from `src/instrumentation-client.ts`, which runs after the document
 * loads but before React hydration.
 */
export function initMixpanel() {
  if (started || !token || typeof window === "undefined") return;
  started = true;

  mixpanel.init(token, {
    // The Zyflow projects are on EU data residency — events MUST go to the EU
    // ingestion host or they're silently dropped (the US host still returns
    // status:1 but the data never lands in the project).
    api_host: "https://api-eu.mixpanel.com",
    // We track page views manually (initial load + client-side route changes)
    // so the App Router's SPA navigations are captured, not just hard loads.
    track_pageview: false,
    persistence: "localStorage",
  });
}

/** True once `initMixpanel()` has run with a valid token. */
export function isMixpanelReady() {
  return started;
}

/** Map a pathname to a short, stable, human-friendly page name. */
export function pageNameFromPath(path: string): string {
  const clean = path.split("#")[0].split("?")[0].replace(/\/+$/, "");
  if (clean === "" || clean === "/") return "home";
  if (clean === "/agents") return "agents";
  // All agent detail pages share one template → one page name. The specific
  // agent rides along as a super property (see setPageContext).
  if (clean.startsWith("/agents/")) return "agent";
  if (clean.startsWith("/products/")) return clean.slice("/products/".length);
  return clean.slice(1).replace(/\//g, "-");
}

/** Route slug for an agent detail page, e.g. /agents/lending → "lending". */
function agentSlugFromPath(path: string): string | null {
  const clean = path.split("#")[0].split("?")[0].replace(/\/+$/, "");
  const m = clean.match(/^\/agents\/([^/]+)$/);
  return m ? m[1] : null;
}

/**
 * Register the current page as super properties, so every subsequent event
 * automatically carries `page` (and, on agent detail pages, which `agent`)
 * without each call site passing them. Agent context is cleared when leaving
 * an agent page so it never leaks onto other pages.
 */
export function setPageContext(path: string) {
  if (!started) return;
  const cleanPath = path.split("#")[0].split("?")[0];
  const page = pageNameFromPath(path);
  const slug = agentSlugFromPath(path);

  if (slug) {
    const codename = agents.find((a) => a.href === `/agents/${slug}`)?.codename;
    mixpanel.register({
      page,
      path: cleanPath,
      agent: slug,
      ...(codename ? { codename } : {}),
    });
  } else {
    mixpanel.register({ page, path: cleanPath });
    mixpanel.unregister("agent");
    mixpanel.unregister("codename");
  }
}

/** Track a catalog event. No-ops until Mixpanel has been initialised. */
export function track(event: AnalyticsEvent, props?: Dict) {
  if (!started) return;
  mixpanel.track(event, props);
}

/** Lowercase hyphen slug for embedding a name inside an event name. */
function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Track a page view with a PAGE-SPECIFIC event name, e.g. `landed-home-page`,
 * `landed-services-page`, `landed-agent-lending-page`. Updates the page
 * super-properties first (so every later event on the page is attributed),
 * then fires the named event. Pass `path` for client-side navigations where
 * `window.location` is still the previous page; omit it on the initial load.
 */
export function trackLandedPage(path?: string, extra?: Dict) {
  if (!started || typeof window === "undefined") return;
  const p = path ?? window.location.pathname;
  setPageContext(p);
  mixpanel.track(`landed-${pageNameFromPath(p)}-page`, extra);
}

/**
 * Track a section impression with a SECTION-SPECIFIC event name, e.g.
 * `viewed-hero-section`, `viewed-offerings-section`. The readable section name
 * is also kept as the `section` property (alongside the page super property).
 */
export function trackSectionView(section: string) {
  if (!started) return;
  mixpanel.track(`viewed-${slugify(section)}-section`, { section });
}

/** Tie subsequent events to a known user (call from your auth flow). */
export function identify(userId: string, traits?: Dict) {
  if (!started) return;
  mixpanel.identify(userId);
  if (traits) mixpanel.people.set(traits);
}

/** Clear identity, e.g. on logout. */
export function resetIdentity() {
  if (!started) return;
  mixpanel.reset();
}

export default mixpanel;
