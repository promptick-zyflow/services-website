import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

const props = [
  {
    n: "01",
    title: "They own the workflow, not a chat box",
    body: "A copilot waits for prompts. A deep agent runs an end-to-end process on its own — ingesting inputs, taking the intermediate steps, and producing a finished result you can act on.",
  },
  {
    n: "02",
    title: "Grounded, never fabricated",
    body: "Our agents recommend; they don't invent. They mark uncertainty, ask the sharp question instead of guessing, and surface the evidence behind every output.",
  },
  {
    n: "03",
    title: "Human in command, always",
    body: "Every consequential action passes a review gate. You approve, edit, or veto. The agent compresses the hours of work; the judgment stays with your team.",
  },
  {
    n: "04",
    title: "One orchestration layer",
    body: "Each agent is a specialist, but they run on a shared framework with a chief-of-staff that coordinates hand-offs and cross-checks high-stakes moves.",
  },
];

export function ValueProps() {
  return (
    <Section id="why" className="py-28">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>The difference</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Not a copilot.
            <br />
            <span className="text-muted">A colleague that delivers.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Most &ldquo;AI&rdquo; tools hand you a faster way to type. Zyflow
            agents hand you the finished work — and the audit trail to trust it.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {props.map((p, i) => (
            <Reveal
              key={p.n}
              i={i}
              className="group relative bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="font-mono text-sm text-citron">{p.n}</span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
