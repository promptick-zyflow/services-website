import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

// Four principles, one line each. The fourth folds in the orchestration idea
// that used to live in its own section.
const props = [
  {
    n: "01",
    title: "They own the workflow, not a chat box",
    line: "An end-to-end process, run autonomously — finished work, not a faster way to type.",
  },
  {
    n: "02",
    title: "Grounded, never fabricated",
    line: "Agents recommend, mark uncertainty and show their evidence. They don’t invent.",
  },
  {
    n: "03",
    title: "Human in command, always",
    line: "Every consequential action passes a review gate. You approve, edit, or veto.",
  },
  {
    n: "04",
    title: "One orchestration layer",
    line: "Specialist agents, coordinated by a chief-of-staff that cross-checks the high-stakes moves.",
  },
];

export function ValueProps() {
  return (
    <Section id="why" className="py-28">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>The difference</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Not a copilot.
            <br />
            <span className="text-muted">A colleague that delivers.</span>
          </h2>
          <p className="mt-6 max-w-sm text-muted">
            Most &ldquo;AI&rdquo; tools hand you a faster way to type. Ours hand
            you the finished work — and the trail to trust it.
          </p>
        </div>

        {/* Editorial rows — one principle, one line, hairline-separated */}
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
