import Link from "next/link";
import type { ReactNode } from "react";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/ui/Icon";

type Accent = "citron" | "glacier" | "spark";

function accentHex(a: Accent) {
  return `var(--color-${a})`;
}

/* ---------------- Landing hero ---------------- */
export function LandingHero({
  codename,
  domain,
  accent = "citron",
  title,
  subhead,
  stats,
  visual,
}: {
  codename: string;
  domain: string;
  accent?: Accent;
  title: ReactNode;
  subhead: string;
  stats: { v: string; l: string }[];
  visual: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{ background: accentHex(accent), opacity: 0.1 }}
      />
      <Section className="relative grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div>
          <Link
            href="/#agents"
            className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-muted"
          >
            ← Zyflow agents
          </Link>
          <p
            className="mt-6 font-mono text-sm"
            style={{ color: accentHex(accent) }}
          >
            codename: {codename} · {domain}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {subhead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              Book a demo
            </Button>
            <Button href="#how" variant="line">
              How it works
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold">{s.v}</dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center lg:justify-end">{visual}</div>
      </Section>
    </section>
  );
}

/* ---------------- Banner (problem statement) ---------------- */
export function Banner({
  heading,
  body,
}: {
  heading: string;
  body: ReactNode;
}) {
  return (
    <Section className="py-20">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted">{body}</p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Step flow ---------------- */
export function StepFlow({
  id,
  eyebrow,
  heading,
  steps,
  accent = "citron",
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  steps: { k: string; d: string }[];
  accent?: Accent;
}) {
  const cols =
    steps.length === 3
      ? "md:grid-cols-3"
      : steps.length === 5
        ? "md:grid-cols-5"
        : "md:grid-cols-4";
  return (
    <Section id={id} className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {heading}
        </h2>
      </div>
      <ol
        className={`mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${cols}`}
      >
        {steps.map((s, i) => (
          <Reveal as="li" key={s.k} i={i} className="relative bg-surface p-6">
            <span
              className="grid h-7 w-7 place-items-center rounded-full border font-mono text-xs"
              style={{
                color: accentHex(accent),
                borderColor: `color-mix(in srgb, ${accentHex(accent)} 40%, transparent)`,
              }}
            >
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{s.k}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{s.d}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Capability grid ---------------- */
export function CapabilityGrid({
  eyebrow,
  heading,
  items,
  accent = "citron",
}: {
  eyebrow: string;
  heading: string;
  items: { icon: string; t: string; d: string }[];
  accent?: Accent;
}) {
  return (
    <Section className="py-24">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <Reveal key={c.t} i={i % 3} className="group bg-surface p-8">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink transition-colors"
              style={{ color: accentHex(accent) }}
            >
              <Icon name={c.icon} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Feature split (text + visual) ---------------- */
export function FeatureSplit({
  eyebrow,
  heading,
  body,
  note,
  visual,
  reverse,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  note?: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <Section className="py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-md text-muted">{body}</p>
          {note && <p className="mt-6 max-w-md text-sm text-faint">{note}</p>}
        </div>
        <Reveal className={reverse ? "lg:order-1" : ""}>{visual}</Reveal>
      </div>
    </Section>
  );
}

/* ---------------- Benefit cards (audience-specific) ---------------- */
export function BenefitCards({
  eyebrow,
  heading,
  cards,
  accent = "citron",
}: {
  eyebrow: string;
  heading: string;
  cards: { who: string; benefit: string; icon: string }[];
  accent?: Accent;
}) {
  return (
    <Section className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal
            key={c.who}
            i={i}
            className="rounded-2xl border border-line bg-surface p-8"
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-xl bg-ink"
              style={{ color: accentHex(accent) }}
            >
              <Icon name={c.icon} />
            </div>
            <p
              className="mt-5 font-mono text-xs uppercase tracking-widest"
              style={{ color: accentHex(accent) }}
            >
              {c.who}
            </p>
            <p className="mt-3 text-base leading-relaxed text-bone">
              {c.benefit}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Quote ---------------- */
export function Quote({
  quote,
  attribution,
  accent = "citron",
}: {
  quote: string;
  attribution: string;
  accent?: Accent;
}) {
  return (
    <Section className="py-16">
      <figure className="relative mx-auto max-w-3xl rounded-3xl border border-line bg-ink/40 p-10 text-center sm:p-14">
        <span
          className="font-display text-5xl"
          style={{ color: `color-mix(in srgb, ${accentHex(accent)} 30%, transparent)` }}
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
          {quote}
        </blockquote>
        <figcaption className="mt-6 text-sm text-faint">
          — {attribution}
        </figcaption>
      </figure>
    </Section>
  );
}

/* ---------------- Integrations row ---------------- */
export function Integrations({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <Section className="py-16">
      <div className="rounded-3xl border border-line bg-surface/40 p-8 sm:p-10">
        <p className="text-center text-sm text-faint">{heading}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {items.map((i) => (
            <span
              key={i}
              className="rounded-full border border-line bg-ink/50 px-4 py-2 font-mono text-sm text-muted"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Audience chips + supporting card ---------------- */
export function AudienceChips({
  eyebrow,
  heading,
  chips,
  aside,
}: {
  eyebrow: string;
  heading: string;
  chips: string[];
  aside: ReactNode;
}) {
  return (
    <Section className="py-24">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-surface to-ink/60 p-8 sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {heading}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-ink/50 px-4 py-2 text-sm text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          {aside}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Small CTA band ---------------- */
export function EngagementBand({
  heading,
  body,
  cta = "Book a scoping call",
}: {
  heading: string;
  body: string;
  cta?: string;
}) {
  return (
    <Section className="py-24">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 text-center sm:p-14">
        <Eyebrow className="justify-center">Engagement</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">{body}</p>
        <div className="mt-8 flex justify-center">
          <Button href="#contact" variant="primary">
            {cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
