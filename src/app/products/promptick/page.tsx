import type { Metadata } from "next";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { SectionView } from "@/components/site/SectionView";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Promptick, AI Model Comparison",
  description:
    "Promptick is the Zyflow group's product: test and compare AI models against the same use case, side by side, before you commit.",
  alternates: { canonical: "/products/promptick" },
};

export default function PromptickPage() {
  return (
    <>
      <SectionView name="promptick-hero"><Hero /></SectionView>
      <SectionView name="what-it-does"><WhatItDoes /></SectionView>
      <SectionView name="from-the-group"><FromTheGroup /></SectionView>
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-spark/10 blur-3xl" />
      <Section className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">Products · For AI builders & buyers</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Promptick: pick the right model{" "}
            <span className="flux-text">before you commit.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            Promptick is an AI model comparison platform, run the same use
            case across different models and see, side by side, which one
            actually performs. Evaluation and comparison, not inference
            hosting.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="https://promptick.ai" variant="primary">
              Try Promptick
            </Button>
            <Button href="/contact" variant="line">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* ---------------- What it does ---------------- */
const features = [
  {
    icon: "layers",
    t: "Same use case, many models",
    d: "Run one prompt or workflow across multiple AI models and compare outputs directly.",
  },
  {
    icon: "chart",
    t: "Side-by-side comparison",
    d: "See quality, behaviour and fit next to each other, decide on evidence, not vendor claims.",
  },
  {
    icon: "target",
    t: "Built for the decision",
    d: "The question Promptick answers is the one every AI project starts with: which model should we use for this?",
  },
];

function WhatItDoes() {
  return (
    <Section className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>What it does</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Compare models the way you&rsquo;ll actually use them.
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.t} i={i} className="bg-surface p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink text-spark">
              <Icon name={f.icon} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{f.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Group note ---------------- */
function FromTheGroup() {
  return (
    <Section className="py-16 pb-24">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 text-center sm:p-12">
        <Eyebrow className="justify-center">From the same team</Eyebrow>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Promptick is built by the same group that delivers Zyflow&rsquo;s
          agents and AI services, proof that we don&rsquo;t just advise on
          AI products, we ship them.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="https://promptick.ai" variant="primary">
            Open promptick.ai
          </Button>
        </div>
      </div>
    </Section>
  );
}
