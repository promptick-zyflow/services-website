"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "@/components/ui/Primitives";

// Hide the global CTA banner on pages that already render the inline Contact form at the bottom
const HIDE_CTA_ROUTES = [
  "/",
  "/services",
  "/contact",
  "/agents/lending",
  "/agents/delivery",
  "/agents/product",
  "/agents/content",
];

export function CTA() {
  const pathname = usePathname();

  // If the route matches any of our contact form pages, hide the redundant CTA box
  if (pathname && HIDE_CTA_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <Section className="pb-16 pt-24 lg:pb-24 lg:pt-32">
      <div className="rounded-3xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-surface/80 to-ink/60 p-10 text-center shadow-[0_0_80px_-20px_var(--color-primary)] backdrop-blur-xl sm:p-16">
        <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="flux-text">Ready to Ship?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Stop chatting about AI and start deploying agents that actually run the work.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_var(--color-primary)]"
          >
            Book your demo
          </Link>
        </div>
      </div>
    </Section>
  );
}
