import mixpanel, { type Dict } from "mixpanel-browser";

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
  landedPage: "landed-page",
  viewedSection: "viewed-section",
  clickedNavLink: "clicked-nav-link",
  clickedLogo: "clicked-logo",
  openedMenu: "opened-menu",
  closedMenu: "closed-menu",
  clickedCta: "clicked-cta",
  clickedButton: "clicked-button",
  clickedAgentCard: "clicked-agent-card",
  clickedFooterLink: "clicked-footer-link",
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
  if (clean.startsWith("/agents/")) return "agent-" + clean.slice("/agents/".length);
  if (clean.startsWith("/products/")) return clean.slice("/products/".length);
  return clean.slice(1).replace(/\//g, "-");
}

/**
 * Register the current page as super properties, so every subsequent event
 * automatically carries `page` and `path` without each call site passing them.
 */
export function setPageContext(path: string) {
  if (!started) return;
  mixpanel.register({
    page: pageNameFromPath(path),
    path: path.split("#")[0].split("?")[0],
  });
}

/** Track a catalog event. No-ops until Mixpanel has been initialised. */
export function track(event: AnalyticsEvent, props?: Dict) {
  if (!started) return;
  mixpanel.track(event, props);
}

/**
 * Track a page view. Updates the page super-properties first (so this and all
 * later events on the page are attributed correctly), then fires `landed-page`.
 * Pass `path` for client-side navigations where `window.location` is still the
 * previous page; omit it on the initial load.
 */
export function trackLandedPage(path?: string, extra?: Dict) {
  if (!started || typeof window === "undefined") return;
  const p = path ?? window.location.pathname;
  setPageContext(p);
  mixpanel.track(EVENTS.landedPage, extra);
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
