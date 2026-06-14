"use client";

import Link from "next/link";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { track, EVENTS } from "@/lib/mixpanel";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost" | "line";
  children: ReactNode;
  className?: string;
  /** Opt this button out of automatic analytics (e.g. form-submit buttons
   *  that already have their own dedicated event). */
  noTrack?: boolean;
  /** Override the tracked label — use when `children` isn't a plain string. */
  trackLabel?: string;
  /** Where the button lives, recorded as the `location` property. */
  trackLocation?: string;
} & Omit<ComponentProps<"button">, "ref">;

/**
 * Shared button/CTA. Auto-fires analytics on every click: primary-variant
 * buttons are calls-to-action (`clicked-cta`); others are `clicked-button`.
 * The label is taken from the button text (or `trackLabel`), and the current
 * page rides along as a super property. Set `noTrack` to opt out.
 */
export function Button({
  href,
  variant = "primary",
  children,
  className,
  noTrack,
  trackLabel,
  trackLocation,
  ...rest
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";
  const styles = {
    primary:
      "bg-[var(--color-primary)] text-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_var(--color-primary)]",
    ghost: "bg-surface-2 text-bone hover:bg-[#1c2029] border border-line",
    line: "text-bone border border-line hover:border-bone/40 hover:bg-white/[0.03]",
  }[variant];

  const cls = cx(base, styles, className);
  const { onClick, ...buttonRest } = rest;

  const fireTrack = () => {
    if (noTrack) return;
    const label =
      trackLabel ?? (typeof children === "string" ? children : undefined);
    const event = variant === "primary" ? EVENTS.clickedCta : EVENTS.clickedButton;
    try {
      track(event, { label, destination: href, variant, location: trackLocation });
    } catch {
      // never block the click
    }
  };

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        onClick={(e) => {
          fireTrack();
          (onClick as MouseEventHandler<HTMLAnchorElement> | undefined)?.(e);
        }}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cls}
      onClick={(e) => {
        fireTrack();
        onClick?.(e);
      }}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
