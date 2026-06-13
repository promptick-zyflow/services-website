import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

// Company-level principles, how we work across both pillars (agents and
// services), one line each.
const props = [
  {
    n: "01",
    title: "We own the outcome",
    line: "Finished, working results you can act on, whether that’s an agent, a custom build, or your team enabled. Not a demo.",
  },
  {
    n: "02",
    title: "Grounded, never hype",
    line: "We recommend on evidence, mark uncertainty and show the trail behind every output.",
  },
  {
    n: "03",
    title: "Human in command, always",
    line: "Every consequential action passes a review gate. You approve, edit, or veto.",
  },
  {
    n: "04",
    title: "Start small, scale on proof",
    line: "One workflow, measured against your baseline. We earn each step before the next, no big-bang transformation.",
  },
];

export function ValueProps() {
  return (
    <Section id="why" className="py-28">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            We hand you the finished work.
            <br />
            <span className="text-muted">Not a demo.</span>
          </h2>
          <p className="mt-6 max-w-sm text-muted">
            Agents, custom builds, or your own team enabled to run AI, however
            we deliver, you get working outcomes measured against your baseline.
          </p>
        </div>

        {/* Editorial rows, one principle, one line, hairline-separated */}
        <ul className="border-t border-line">
          {props.map((p, i) => (
            <Reveal as="li" key={p.n} i={i}>
              <div className="group flex gap-6 border-b border-line py-7 transition-colors duration-300 sm:gap-10 sm:py-8">
                <span className="font-mono text-sm text-citron/70 transition-colors duration-300 group-hover:text-citron">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {p.line}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
