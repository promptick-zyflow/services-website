import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function Company() {
  return (
    <Section className="py-28">
      {/* Company statement — the one-sentence IA (ai71 pattern) */}
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink/60 p-10 text-center sm:p-16">
        <div className="aurora pointer-events-none absolute inset-0 opacity-50" />
        <div className="drift-a pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-citron/10 blur-3xl" />
        <div className="drift-b pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-glacier/10 blur-3xl" />
        <Eyebrow className="relative justify-center">Zyflow</Eyebrow>
        <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          We deliver production AI agents and AI services that make companies
          AI-enabled.
        </h2>
        <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Founder-led and bootstrapped, we run our own company on the same
          agent fleet we deploy for clients — and what proves out in the field
          hardens into agents you can simply subscribe to.
        </p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/about" variant="line">
            About us
          </Button>
          <Button href="/contact" variant="primary">
            Work with us
          </Button>
        </div>
      </div>

      {/* Products strip — Promptick teaser */}
      <Reveal>
        <Link
          href="/products/promptick"
          className="group mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-line bg-surface/40 p-7 transition-colors duration-300 hover:bg-surface sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-5">
            <span className="font-display text-lg font-bold text-spark">
              Promptick
            </span>
            <div className="hidden h-8 w-px bg-line sm:block" />
            <div>
              <p className="text-sm font-medium text-bone">
                From the same team: an AI model comparison platform.
              </p>
              <p className="text-xs text-faint">
                Test and compare models for your use case — before you commit.
              </p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-sm font-medium text-bone">
            Explore
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </Reveal>
    </Section>
  );
}
