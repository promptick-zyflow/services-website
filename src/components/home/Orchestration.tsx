import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    k: "Capture",
    t: "Work arrives the way it already does",
    d: "Email, a ticket, a board, a document drop. No new habits — the agent meets your workflow where it lives.",
  },
  {
    k: "Reason",
    t: "The agent does the deep work",
    d: "It parses, enriches, cross-references and drafts — running the same multi-step process a skilled operator would, autonomously.",
  },
  {
    k: "Review",
    t: "You approve at the gate",
    d: "Every consequential output is staged for a human. Approve, edit, or send it back. Nothing irreversible happens without you.",
  },
  {
    k: "Deliver",
    t: "Finished work, with a trail",
    d: "A lender-ready case, a planned sprint, a spec, a published asset — plus the evidence and decisions behind it.",
  },
];

export function Orchestration() {
  return (
    <Section id="orchestration" className="py-28">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-surface to-ink/60 p-8 sm:p-12 lg:p-16">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A reliable loop, not a black box.
          </h2>
          <p className="mt-6 text-muted">
            Every Zyflow agent runs the same four-beat cycle. Specialists handle
            their domain; a chief-of-staff agent coordinates hand-offs and
            cross-checks the high-stakes moves — all on the Hermes orchestration
            framework.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.k} i={i} className="relative bg-surface p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-citron/40 font-mono text-xs text-citron">
                  {i + 1}
                </span>
                <span className="eyebrow !text-citron/80">{s.k}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              {i < steps.length - 1 && (
                <span
                  className="absolute right-4 top-7 hidden text-faint md:block"
                  aria-hidden
                >
                  →
                </span>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
