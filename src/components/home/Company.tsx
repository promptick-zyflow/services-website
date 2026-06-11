import { Section, Eyebrow, Button } from "@/components/ui/Primitives";

export function Company() {
  return (
    <Section className="py-28">
      {/* Company statement — the one-sentence IA (ai71 pattern) */}
      <div className="rounded-3xl border border-line bg-gradient-to-b from-surface to-ink/60 p-10 text-center sm:p-16">
        <Eyebrow className="justify-center">Zyflow</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          An AI services &amp; development partner that makes companies
          AI-enabled.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Founder-led and bootstrapped, we run our own company on the same AI
          we deploy for clients — agents, software and infrastructure, with a
          human always in command.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/about" variant="line">
            About us
          </Button>
          <Button href="/contact" variant="primary">
            Work with us
          </Button>
        </div>
      </div>
    </Section>
  );
}
