import type { ReactNode } from "react";
import { SectionBeacon } from "@/components/site/SectionBeacon";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------- Button ---------------- */

// Button lives in its own client module (it self-tracks clicks); re-exported
// here so existing `@/components/ui/Primitives` imports keep working.
export { Button } from "./Button";

/* ---------------- Section ---------------- */

export function Section({
  children,
  id,
  className,
  view,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  /** When set, reports a `viewed-section` impression under this name. */
  view?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12",
        className
      )}
    >
      {view && <SectionBeacon name={view} />}
      {children}
    </section>
  );
}

/* ---------------- Eyebrow ---------------- */

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cx("eyebrow flex items-center gap-3", className)}>
      <span className="inline-block h-px w-8 opacity-60" style={{ backgroundColor: "var(--color-primary)" }} aria-hidden />
      {children}
    </p>
  );
}

/* ---------------- Accent dot ---------------- */

export function accentVar(accent: "citron" | "glacier" | "spark") {
  return `var(--color-${accent})`;
}

export { cx };
