import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ProcessVisual } from "@/components/visuals/ProcessVisual";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Zyflow's services arm makes companies AI-enabled: AI-enablement of teams, agent development & creation, agent & AI infrastructure, and custom development — delivered against your hardest workflows.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Offerings />
      <Bridge />
      <ServicesProcess />
      <Pricing />
      <Contact
        defaultInterest="AI services"
        heading="Bring us your hardest workflow."
        blurb="Book a free scoping workshop. We'll map one high-friction workflow with your team, baseline what it costs you today, and show you exactly where AI pays off — whether or not you proceed."
      />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glacier/10 blur-3xl" />
      <Section className="relative py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">Services · For every team</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            AI services that make your company{" "}
            <span className="flux-text">AI-enabled.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            We make companies AI-enabled end to end — enabling your teams,
            building custom agents, running the infrastructure, and shipping
            the software around it. Services-led, measured against your
            baseline.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              Book a free scoping workshop
            </Button>
            <Button href="#offerings" variant="line">
              Explore the services
            </Button>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* ---------------- Problem framing ---------------- */
function Problem() {
  return (
    <Section className="py-20">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Most AI initiatives stall between the demo and the workflow.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            A pilot impresses, then nothing ships: the team isn&rsquo;t
            trained, the agent isn&rsquo;t wired into real tools, inference
            costs surprise everyone, and the surrounding software was never
            built. We work the other way around — start from one real
            workflow, deliver against a measured baseline, and only scale what
            proves out.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- The four offerings ---------------- */
const offerings = [
  {
    id: "enablement",
    icon: "users",
    t: "AI-enablement of teams",
    d: "We train your people and wire AI into how each team actually works — adoption that sticks, not a one-off workshop.",
    points: [
      "Team training on AI tooling & agents",
      "Workflow-level AI integration",
      "Review-gate & guardrail design",
    ],
  },
  {
    id: "agent-development",
    icon: "sparkle",
    t: "Agent development & creation",
    d: "Custom deep agents for your workflows, executives and verticals — grounded in your tools and data, human in command.",
    points: [
      "Custom agents per workflow or vertical",
      "Personal agents for executives",
      "Orchestration across multiple agents",
    ],
  },
  {
    id: "infrastructure",
    icon: "plug",
    t: "Agent & AI infrastructure",
    d: "Model strategy, deployment, monitoring and spend guardrails — the platform under it all, built cost-conscious from the start.",
    points: [
      "Multi-provider model strategy",
      "Cost guardrails & budget control",
      "Deployment, monitoring & ops",
    ],
  },
  {
    id: "custom-development",
    icon: "code",
    t: "Custom development",
    d: "Full-stack software — the dashboards, integrations and internal tools your AI workflows (and the rest of your business) live in.",
    points: [
      "Web apps, dashboards & APIs",
      "Tool & system integrations",
      "Production hardening & support",
    ],
  },
];

function Offerings() {
  return (
    <Section id="offerings" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative z-10 max-w-2xl">
        <Eyebrow>What we deliver</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Four services. One goal: AI that owns real work.
        </h2>
      </div>
      <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2">
        {offerings.map((o, i) => (
          <Reveal key={o.id} i={i % 2}>
            <div
              id={o.id}
              className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink text-glacier">
                <Icon name={o.icon} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{o.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{o.d}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {o.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-full border border-line bg-ink/50 px-3 py-1 text-xs text-muted"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Bridge to the agents ---------------- */
function Bridge() {
  return (
    <Section className="py-16">
      <div className="rounded-3xl border border-line bg-ink/40 p-10 text-center sm:p-14">
        <p className="mx-auto max-w-3xl font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
          Services and agents are two halves of one company.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted">
          These services stand on their own — including software with nothing
          to do with AI. When a workflow is a fit, our ready-made{" "}
          <Link href="/#agents" className="text-bone underline underline-offset-4 hover:text-glacier">
            agents
          </Link>{" "}
          are the fastest way in.
        </p>
      </div>
    </Section>
  );
}

/* ---------------- Pricing note ---------------- */
function Pricing() {
  return (
    <Section className="relative py-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-glacier/5 blur-3xl" />
      <div className="relative z-10 grid gap-8 rounded-3xl border border-line bg-surface/50 p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Priced per engagement, not per seat.
        </h2>
        <p className="text-lg leading-relaxed text-muted">
          Services are scoped as a project or statement of work, sized to your
          usage and workload. Agent deployments run on a subscription plus
          usage basis. Either way, the scoping workshop that sizes it is
          free.
        </p>
      </div>
    </Section>
  );
}

/* ---------------- Engagement Process ---------------- */
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

function ServicesProcess() {
  return (
    <Section id="process" className="py-24">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
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
          <ol className="relative mt-12 space-y-4">
            {phases.map((p, i) => (
              <Reveal as="li" key={p.n} i={i}>
                <div className="group relative rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:bg-surface-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-primary">{p.n}</span>
                      <h3 className="font-display text-lg font-semibold">
                        {p.t}
                      </h3>
                    </div>
                    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProcessVisual />
        </div>
      </div>
    </Section>
  );
}
