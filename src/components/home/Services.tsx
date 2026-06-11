import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/ui/Icon";

const offerings = [
  {
    icon: "users",
    t: "AI-enablement of teams",
    d: "Training and workflow-level integration, so adoption sticks beyond the workshop.",
    href: "/services#enablement",
  },
  {
    icon: "sparkle",
    t: "Agent development & creation",
    d: "Custom deep agents for your workflows, CXOs and verticals — human always in command.",
    href: "/services#agent-development",
  },
  {
    icon: "plug",
    t: "Agent & AI infrastructure",
    d: "Model strategy, deployment and spend guardrails — the platform under the agents.",
    href: "/services#infrastructure",
  },
  {
    icon: "code",
    t: "Custom development",
    d: "The dashboards, integrations and tools that agent workflows need to live in your business.",
    href: "/services#custom-development",
  },
];

export function Services() {
  return (
    <Section id="services" className="py-28">
      {/* Bridge statement — agents and services are two halves of one motion */}
      <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
        Ready-made agents get you moving fast. Our services team makes them
        stick — and builds what doesn&rsquo;t exist yet.
      </p>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Services · For every team</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Everything around the agents, delivered too.
          </h2>
        </div>
        <Button href="/services" variant="line">
          Explore services
        </Button>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {offerings.map((o, i) => (
          <Reveal key={o.t} i={i}>
            <Link
              href={o.href}
              className="group flex h-full flex-col bg-surface p-7 transition-colors duration-300 hover:bg-surface-2"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink text-glacier">
                <Icon name={o.icon} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {o.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.d}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-bone">
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
