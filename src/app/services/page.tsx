import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Process } from "@/components/home/Process";
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
      <Process />
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
            Ready-made agents are the fast path — but most companies also need
            the work around them: teams that know how to use AI, agents built
            for their own workflows, infrastructure that doesn&rsquo;t blow the
            budget, and software that ties it together. That&rsquo;s what our
            services arm delivers.
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
    d: "We train your people on the tools and embed AI into how each team actually works — from prompt-to-production habits to review gates. Adoption that sticks, not a one-off workshop.",
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
    d: "Custom deep agents for your specific workflows, CXO needs and business verticals — built on the same platform as our live roster, grounded in your tools and data, with a human always in command.",
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
    d: "The platform under the agents: model and provider selection, flat-rate vs metered cost strategy, deployment, monitoring and spend guardrails. We run our own fleet this way — cost shocks included, lessons learned.",
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
    d: "Full-stack product and software development alongside the AI work — the dashboards, integrations and internal tools that agent workflows need to live in your business.",
    points: [
      "Web apps, dashboards & APIs",
      "Tool & system integrations",
      "Production hardening & support",
    ],
  },
];

function Offerings() {
  return (
    <Section id="offerings" className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>What we deliver</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Four services. One goal: AI that owns real work.
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
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
          Ready-made agents get you moving fast. Services make them stick —
          and build what doesn&rsquo;t exist yet.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted">
          Many engagements start with one of our{" "}
          <Link href="/#agents" className="text-bone underline underline-offset-4 hover:text-glacier">
            live agents
          </Link>{" "}
          and grow into custom work from there.
        </p>
      </div>
    </Section>
  );
}

/* ---------------- Pricing note ---------------- */
function Pricing() {
  return (
    <Section className="py-16">
      <div className="grid gap-8 rounded-3xl border border-line bg-surface/50 p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
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
