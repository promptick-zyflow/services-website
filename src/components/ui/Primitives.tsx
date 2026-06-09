import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------- Button ---------------- */

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost" | "line";
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  href,
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";
  const styles = {
    primary:
      "bg-[var(--color-primary)] text-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_var(--color-primary)]",
    ghost:
      "bg-surface-2 text-bone hover:bg-[#1c2029] border border-line",
    line: "text-bone border border-line hover:border-bone/40 hover:bg-white/[0.03]",
  }[variant];

  const cls = cx(base, styles, className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* ---------------- Section ---------------- */

export function Section({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12",
        className
      )}
    >
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
