"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import type { Dict } from "mixpanel-browser";
import { track, type AnalyticsEvent } from "@/lib/mixpanel";

/**
 * A `next/link` that fires a Mixpanel event on click. Lets us instrument links
 * that live inside server components (Footer, CTA, agent cards) without turning
 * those whole trees into client components.
 */
export function TrackedLink({
  event,
  eventProps,
  onClick,
  children,
  ...rest
}: ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventProps?: Dict;
}) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        try {
          track(event, eventProps);
        } catch {
          // Tracking must never block navigation.
        }
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
