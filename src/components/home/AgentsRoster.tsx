import Link from "next/link";
import { Section, Eyebrow, accentVar } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { agents, moreAgents, type Agent } from "@/lib/agents";

export function AgentsRoster() {
  return (
    <Section id="agents" className="py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>The roster</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Specialist agents for the work that runs your business.
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted">
          Each agent is purpose-built for a domain — deployed on its own, or
          orchestrated together.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {agents.map((a, i) => (
          <Reveal
            key={a.slug}
            i={i % 2}
            // Spearhead treatment: the first agent (Sterling, lending) spans
            // the full row — it's the commercial flagship.
            className={i === 0 ? "lg:col-span-2" : undefined}
          >
            <AgentCard agent={a} featured={i === 0} />
          </Reveal>
        ))}
      </div>

      {/* More agents teaser */}
      <Reveal i={0}>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {moreAgents.map((m) => (
            <div
              key={m.codename}
              className="flex items-center gap-5 rounded-2xl border border-dashed border-line bg-surface/40 p-6"
            >
              <span className="font-display text-lg font-bold text-faint">
                {m.codename}
              </span>
              <div className="h-8 w-px bg-line" />
              <div>
                <p className="text-sm font-medium text-bone">{m.name}</p>
                <p className="text-xs text-faint">{m.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function AgentCard({ agent, featured }: { agent: Agent; featured?: boolean }) {
  const accent = accentVar(agent.accent);
  const Wrapper = agent.href ? Link : "div";

  return (
    <Wrapper
      href={agent.href ?? "#"}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-8 transition-all duration-500 ${
        featured ? "border-citron/30" : "border-line"
      } ${agent.href ? "hover:-translate-y-1 hover:border-bone/20" : ""}`}
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: accent }}
        aria-hidden
      />
      {/* Watermark codename */}
      <span
        className="pointer-events-none absolute -bottom-6 right-4 select-none font-display text-8xl font-bold opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.07]"
        aria-hidden
      >
        {agent.codename}
      </span>

      <div className="relative flex items-center justify-between">
        <span className="flex items-center gap-3">
          <span className="eyebrow">For {agent.domain}</span>
          {featured && (
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest"
              style={{
                color: accent,
                backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
              }}
            >
              Flagship
            </span>
          )}
        </span>
        <span className="flex items-center gap-2 text-xs text-faint">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: agent.status === "live" ? accent : "#5a5d66" }}
          />
          {agent.status === "live" ? "Live" : "Preview"}
        </span>
      </div>

      <div className="relative mt-5 flex items-baseline gap-3">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {agent.name}
        </h3>
      </div>
      <p className="relative mt-1 font-mono text-xs text-faint">
        codename: {agent.codename}
      </p>

      <p
        className="relative mt-5 text-base font-medium"
        style={{ color: accent }}
      >
        {agent.tagline}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">
        {agent.blurb}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {agent.capabilities.slice(0, 4).map((c) => (
          <span
            key={c}
            className="rounded-full border border-line bg-ink/50 px-3 py-1 text-xs text-muted"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-center justify-between pt-8">
        {agent.metric ? (
          <div>
            <span
              className="font-display text-xl font-bold"
              style={{ color: accent }}
            >
              {agent.metric.value}
            </span>
            <span className="ml-2 text-xs text-faint">
              {agent.metric.label}
            </span>
          </div>
        ) : (
          <span />
        )}

        {agent.href ? (
          <span className="flex items-center gap-2 text-sm font-medium text-bone">
            {featured ? "Request a demo" : "Explore"}
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
        ) : (
          <span className="text-xs uppercase tracking-widest text-faint">
            Page soon
          </span>
        )}
      </div>
    </Wrapper>
  );
}
