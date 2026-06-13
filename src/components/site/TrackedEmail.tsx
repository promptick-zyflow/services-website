"use client";

import type { ReactNode } from "react";
import { track, EVENTS } from "@/lib/mixpanel";

/** A `mailto:` link that fires `clicked-email` when clicked. */
export function TrackedEmail({
  email,
  location,
  className,
  children,
}: {
  email: string;
  location?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => {
        try {
          track(EVENTS.clickedEmail, { email, location });
        } catch {
          // never block the click
        }
      }}
    >
      {children}
    </a>
  );
}
