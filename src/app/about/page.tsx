import type { Metadata } from "next";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { FleetConstellation } from "@/components/visuals/FleetConstellation";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zyflow's mission is to make every company AI-enabled — turning AI from something you chat with into agents that own real work end-to-end, with a human always in command.",
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
      <div className="drift-a pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-citron/10 blur-3xl" />
      <div className="drift-b pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-glacier/10 blur-3xl" />
      <Section className="relative grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div>
          <p className="eyebrow">About Zyflow</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Making every company{" "}
            <span className="flux-text">AI-enabled.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            We turn AI from something you chat with into agents that own real
            work end-to-end — with a human always in command. Founded in 2025,
            bootstrapped, and built by people who run their own company on the
            same agents they sell.
          </p>
        </div>
        <div className="hidden justify-center lg:flex lg:justify-end">
          <FleetConstellation />
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
    <Section className="py-24">
      <div className="max-w-2xl">
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
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
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
  { t: "Ownership", d: "Treat the company as your own. Own outcomes, not just tasks." },
  { t: "Think holistically", d: "See the whole system, not just the piece in front of you." },
  { t: "Be honest", d: "Candour over comfort — about progress, mistakes, and life." },
  { t: "Solve, then decide", d: "Orient on the problem, discuss openly, make the call, move." },
  { t: "Experiment, fail fast, learn", d: "Try things, fail fast, and learn from what breaks." },
  { t: "Keep your word", d: "Doing what you said, when you said, is respect." },
  { t: "Be kind, lift each other", d: "We grow as a team and a community, not alone." },
  { t: "Take care of yourself", d: "No one grows by running themselves down." },
  { t: "Always be learning", d: "Keep learning, and raise the people around you." },
];

function Values() {
  return (
    <Section className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>Values</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          How we work.
        </h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
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

/* ---------------- Group structure note ---------------- */
function Group() {
  return (
    <Section className="py-16 pb-24">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 text-center sm:p-12">
        <Eyebrow className="justify-center">The group</Eyebrow>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Zyflow is the services arm of the Pragee Technologies group. The
          group also builds products — including{" "}
          <a
            href="https://promptick.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone underline underline-offset-4 hover:text-citron"
          >
            Promptick
          </a>
          , an AI model comparison platform.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/contact" variant="primary">
            Work with us
          </Button>
          <Button href="/#agents" variant="line">
            Meet the agents
          </Button>
        </div>
      </div>
    </Section>
  );
}
