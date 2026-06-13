import { initMixpanel, trackLandedPage } from "@/lib/mixpanel";

// Runs after the HTML loads but before React hydration — the right place to
// boot analytics so early events aren't missed.
try {
  initMixpanel();
  // The initial, full-page load. `onRouterTransitionStart` only fires on
  // subsequent client-side navigations, so the first view is tracked here.
  trackLandedPage();
} catch {
  // Never let an analytics failure break page interactivity.
}

// Fires when an App Router client-side navigation begins. `url` is the
// destination, so we pass it explicitly — `window.location` is still the
// previous page at this point.
export function onRouterTransitionStart(
  url: string,
  navigationType: "push" | "replace" | "traverse",
) {
  try {
    trackLandedPage(url, { navigation_type: navigationType });
  } catch {
    // Swallow — tracking must not interfere with navigation.
  }
}
