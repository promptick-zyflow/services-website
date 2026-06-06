import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

const stats = [
  { v: "15–20×", l: "faster pre-submission on a loan case", s: "vs. 4–6 hours of manual broker admin" },
  { v: "24/7", l: "delivery board kept current", s: "hourly sweeps, risk flagged before deadlines slip" },
  { v: "30–50%", l: "of PM time is spec-writing", s: "the part Atlas turns into minutes" },
  { v: "0", l: "outputs shipped unreviewed", s: "a human gate on every consequential action" },
];

export function Outcomes() {
  return (
    <Section id="outcomes" className="py-28">
      <div className="text-center">
        <Eyebrow className="justify-center">Outcomes</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Hours of operational work, compressed into minutes.
        </h2>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} i={i} className="bg-surface p-8 text-center">
            <p className="flux-text font-display text-5xl font-bold tracking-tight">
              {s.v}
            </p>
            <p className="mt-4 text-sm font-medium text-bone">{s.l}</p>
            <p className="mt-2 text-xs leading-relaxed text-faint">{s.s}</p>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-faint">
        Figures reflect Zyflow agents in real deployments. Your numbers depend on
        volume and complexity — we&rsquo;ll baseline them in the pilot.
      </p>
    </Section>
  );
}
