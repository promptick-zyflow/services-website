import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

const phases = [
  {
    n: "01",
    t: "Scoping workshop",
    tag: "Week 1 · no cost",
    d: "We map one high-friction workflow and baseline what it costs you today.",
  },
  {
    n: "02",
    t: "Pilot",
    tag: "Weeks 2–5",
    d: "One agent, wired into your real tools with review gates — measured against that baseline.",
  },
  {
    n: "03",
    t: "Deploy & scale",
    tag: "Ongoing",
    d: "Productionise what works, then add agents at the pace the results justify.",
  },
];

export function Process() {
  return (
    <Section id="process" className="py-28">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Engagement</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Start with one workflow.
            <br />
            <span className="text-muted">Prove it, then scale.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted">
            No big-bang transformation. We earn each step with measured results
            against your own baseline.
          </p>
        </div>

        <ol className="relative space-y-4">
          {phases.map((p, i) => (
            <Reveal as="li" key={p.n} i={i}>
              <div className="group relative rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:bg-surface-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-citron">{p.n}</span>
                    <h3 className="font-display text-xl font-semibold">
                      {p.t}
                    </h3>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
