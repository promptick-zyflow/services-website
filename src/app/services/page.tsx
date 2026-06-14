import type { Metadata } from "next";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { TrackedLink } from "@/components/site/TrackedLink";
import { SectionView } from "@/components/site/SectionView";
import { Process } from "@/components/home/Process";
import { Customers } from "@/components/home/Customers";
import { Contact } from "@/components/home/Contact";
import { BuildPrinter } from "@/components/services/BuildPrinter";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Zyflow's services arm makes companies AI-enabled: AI-enablement of teams, agent development & creation, agent & AI infrastructure, and custom development, delivered against your hardest workflows.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <SectionView name="services-hero"><Hero /></SectionView>
      <SectionView name="customers"><Customers /></SectionView>
      <SectionView name="problem"><Problem /></SectionView>
      <SectionView name="offerings"><Offerings /></SectionView>
      <SectionView name="bridge"><Bridge /></SectionView>
      <SectionView name="process"><Process /></SectionView>
      <SectionView name="pricing"><Pricing /></SectionView>
      <Contact
        defaultInterest="AI services"
        heading="Bring us your hardest workflow."
        blurb="Book a free scoping workshop. We'll map one high-friction workflow with your team, baseline what it costs you today, and show you exactly where AI pays off, whether or not you proceed."
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
      <Section className="relative grid items-center gap-12 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">Services · For every team</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            AI services that make your company{" "}
            <span className="flux-text">AI-enabled.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            We make companies AI-enabled end to end, enabling your teams,
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

        {/* The build line, every engagement comes off this printer */}
        <BuildPrinter />
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
            built. We work the other way around, start from one real
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
    icon: "/agents/svc-teams.svg",
    t: "AI-enablement of teams",
    d: "We train your people and wire AI into how each team actually works, adoption that sticks, not a one-off workshop.",
    points: [
      "Team training on AI tooling & agents",
      "Workflow-level AI integration",
      "Review-gate & guardrail design",
    ],
  },
  {
    id: "agent-development",
    icon: "/agents/svc-brain.svg",
    t: "Agent development & creation",
    d: "Custom deep agents for your workflows, executives and verticals, grounded in your tools and data, human in command.",
    points: [
      "Custom agents per workflow or vertical",
      "Personal agents for executives",
      "Orchestration across multiple agents",
    ],
  },
  {
    id: "infrastructure",
    icon: "/agents/svc-stars.svg",
    t: "Agent & AI infrastructure",
    d: "Model strategy, deployment, monitoring and spend guardrails, the platform under it all, built cost-conscious from the start.",
    points: [
      "Multi-provider model strategy",
      "Cost guardrails & budget control",
      "Deployment, monitoring & ops",
    ],
  },
  {
    id: "custom-development",
    icon: "/agents/svc-cursor.png",
    t: "Custom development",
    d: "Full-stack software, the dashboards, integrations and internal tools your AI workflows (and the rest of your business) live in.",
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
              <div
                className="grid place-items-center rounded-xl border border-line bg-ink"
                style={{ height: "3.25rem", width: "3.25rem" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.icon}
                  alt=""
                  draggable={false}
                  loading="eager"
                  className="svc-icon-bright select-none object-contain"
                  style={{ height: "2.25rem", width: "2.25rem" }}
                />
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
          These services stand on their own, including software with nothing
          to do with AI. When a workflow is a fit, our ready-made{" "}
          <TrackedLink
            href="/#agents"
            event="clicked-button"
            eventProps={{ label: "agents", destination: "/#agents", location: "services-bridge" }}
            className="text-bone underline underline-offset-4 hover:text-glacier"
          >
            agents
          </TrackedLink>{" "}
          are the fastest way in.
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
