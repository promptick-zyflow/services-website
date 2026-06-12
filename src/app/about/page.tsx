import type { Metadata } from "next";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zyflow is an AI services and development partner — the services arm of the Pragee group — on a mission to make every company AI-enabled, with a human always in command.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <TwoFronts />
      <Founders />
      <Values />
      <Group />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-citron/10 blur-3xl" />
      <Section className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">About Zyflow</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Making every company{" "}
            <span className="flux-text">AI-enabled.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            Zyflow is an AI services and development partner — founded in 2025,
            bootstrapped, and run on the same AI we deploy for clients.
            Services-led today, with agents as the flagship, and a human always
            in command.
          </p>
        </div>
      </Section>
    </section>
  );
}

/* ---------------- Mission & vision ---------------- */
function MissionVision() {
  return (
    <Section className="py-20">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-surface p-10">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-6 font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
              Make every company AI-enabled — agents that own real work
              end-to-end, with a human always in command.
            </p>
          </div>
        </Reveal>
        <Reveal i={1}>
          <div className="h-full rounded-3xl border border-line bg-surface p-10">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-6 font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
              A world where any company, in any industry, can get an agent for
              any workflow — as easily as hiring for the role.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- How we get there ---------------- */
function TwoFronts() {
  return (
    <Section className="py-16">
      <div className="rounded-3xl border border-line bg-ink/40 p-8 sm:p-12">
        <Eyebrow>How we get there</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Services meet you where you are
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Custom development, agent creation, AI infrastructure and team
              enablement — delivered against your hardest workflows, measured
              against your own baseline.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">
              What recurs becomes an agent you can buy
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              The workflows that repeat across engagements — lending, delivery,
              specs, content — harden into ready-made agents companies can
              subscribe to on demand.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Founders ---------------- */
const founders = [
  {
    name: "Sajal Garg",
    role: "Co-founder & Director",
    blurb:
      "Drives the company's strategy, go-to-market and the services business — and runs the agent roster that runs the company.",
  },
  {
    name: "Ankit Bhardwaj",
    role: "Co-founder & Director",
    blurb:
      "Leads engineering and the agent platform — the architecture, infrastructure and delivery behind every agent we ship.",
  },
];

function Founders() {
  return (
    <Section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-citron/5 blur-3xl" />
      <div className="relative z-10 max-w-2xl">
        <Eyebrow>The team</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Two founders. One agent fleet.
        </h2>
        <p className="mt-6 text-muted">
          Zyflow is founder-led and deliberately small — the day-to-day work is
          run by the same deep agents we deploy for clients, with the founders
          in command.
        </p>
      </div>
      <div className="relative z-10 mt-12 grid gap-5 sm:grid-cols-2">
        {founders.map((f, i) => (
          <Reveal key={f.name} i={i}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-line bg-ink font-display text-lg font-bold text-citron">
                {f.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {f.name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint">
                {f.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {f.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Values ---------------- */
const values = [
  { t: "Outcome-First", d: "We focus on finished, production-ready systems that integrate with your tools — never just conceptual demos." },
  { t: "Evidence-Grounded", d: "Our agents make decisions on hard evidence, audit-trail compliance, and marked uncertainty." },
  { t: "Human-in-Command", d: "Every consequential action passes an explicit review gate. You retain control, review, and veto." },
  { t: "Measured Scaling", d: "We baseline existing operations, run brief pilots, and only expand at the pace the results justify." },
  { t: "Radical Transparency", d: "Complete visibility into latency, cost, model performance, and agent prompt logic." },
  { t: "Platform Agnostic", d: "We select and combine models from multiple providers to optimize for your cost and speed." },
];

// [{ 
//   t: "Outcome-First",
//   d: "We deliver production-ready systems that integrate with your existing workflows—not experimental demos."
// },
// {
//   t: "Evidence-Grounded",
//   d: "Our agents operate on verifiable evidence, maintain audit trails, and clearly communicate uncertainty."
// },
// {
//   t: "Human-in-Command",
//   d: "Critical actions require human review and approval. You retain full authority to approve, modify, or reject decisions."
// },
// {
//   t: "Measured Scaling",
//   d: "We establish a baseline, validate results through focused pilots, and scale only when outcomes justify expansion."
// },
// {
//   t: "Radical Transparency",
//   d: "Complete visibility into latency, cost, model performance, and agent decision logic."
// },
// {
//   t: "Platform Agnostic",
//   d: "We choose the best models and infrastructure for each use case, optimizing for performance, reliability, and cost."
// }]

function Values() {
  return (
    <Section className="relative py-24">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-citron/5 blur-3xl" />
      <div className="relative z-10 max-w-2xl">
        <Eyebrow>Values</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          How we work.
        </h2>
      </div>
      <div className="relative z-10 mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.t} i={i % 3} className="bg-surface p-7">
            <span className="font-mono text-xs text-citron">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold">{v.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Group & products ---------------- */
function Group() {
  return (
    <Section className="py-16 pb-24">
      <div className="max-w-2xl">
        <Eyebrow>The group</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          A services arm and a products arm.
        </h2>
        <p className="mt-6 text-muted">
          Zyflow is the services arm of Pragee Technologies. The group&rsquo;s
          products arm ships software of its own — and over time, the agents we
          build for clients harden into ready-made products anyone can buy.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
            <span className="eyebrow">Services arm</span>
            <h3 className="mt-4 font-display text-2xl font-bold">Zyflow</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI services &amp; development, and the flagship agents (Sterling
              and the roster). Delivering verified commercial value.
            </p>
            <Button href="/services" variant="line" className="mt-6 self-start">
              Our services
            </Button>
          </div>
        </Reveal>
        <Reveal i={1}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
            <span className="eyebrow text-spark">Products arm</span>
            <h3 className="mt-4 font-display text-2xl font-bold">Promptick</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              An AI model comparison platform — test and compare models for the
              same use case before you commit. The first product, with more to
              come.
            </p>
            <Button href="/products/promptick" variant="line" className="mt-6 self-start">
              Explore Promptick
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button href="/contact" variant="primary">
          Work with us
        </Button>
        <Button href="/#agents" variant="line">
          Meet the agents
        </Button>
      </div>
    </Section>
  );
}
