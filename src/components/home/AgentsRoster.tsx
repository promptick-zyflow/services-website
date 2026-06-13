import Link from "next/link";
import { Section, Eyebrow, accentVar, cx } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { agents, moreAgents, type Agent } from "@/lib/agents";

export function AgentsRoster() {
  const [flagship, ...rest] = agents;

  return (
    <Section id="agents" className="py-28">
      <div className="max-w-2xl">
        <Eyebrow>The agents</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Ready-made agents for the work that runs your business.
        </h2>
      </div>

      <div className="mt-14 space-y-5">
        {/* Sterling, the wide commercial flagship */}
        <Reveal>
          <AgentCard agent={flagship} featured />
        </Reveal>

        {/* The supporting three */}
        <div className="grid gap-5 sm:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} i={i} className="flex flex-col h-full">
              <AgentCard agent={a} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* More agents, quiet teaser */}
      <Reveal>
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

/* ------------------------------------------------------------------
   Progressive-reveal card: minimal at rest (chip + name + one line),
   capabilities + CTA reveal on hover (desktop) / shown inline (mobile).
   Each card carries a soft, slowly-breathing gradient in its accent.
------------------------------------------------------------------ */
export function AgentCard({ agent, featured }: { agent: Agent; featured?: boolean }) {
  const accent = accentVar(agent.accent);
  const Wrapper = agent.href ? Link : "div";

  return (
    <Wrapper
      href={agent.href ?? "#"}
      className={cx(
        "group relative flex flex-col h-full overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500",
        agent.href && "hover:-translate-y-1 hover:border-bone/25",
        featured ? "min-h-[22rem] p-9 sm:p-12" : "min-h-[20rem] p-8"
      )}
    >
      {/* Accent gradient wash, intensifies on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(130% 95% at 12% 6%, color-mix(in srgb, ${accent} ${featured ? 26 : 20}%, transparent) 0%, transparent 58%),
            radial-gradient(120% 100% at 92% 100%, color-mix(in srgb, ${accent} 12%, transparent) 0%, transparent 62%)
          `,
        }}
        aria-hidden
      />
      {/* Slowly-breathing organic blob */}
      <div
        className="card-aurora pointer-events-none absolute -inset-[35%] opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
        style={{
          backgroundImage: `radial-gradient(closest-side, color-mix(in srgb, ${accent} 32%, transparent), transparent)`,
        }}
        aria-hidden
      />

      {/* Top row, audience chip + status */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-bone/90 backdrop-blur-sm">
            {agent.audience}
          </span>
          {featured && (
            <span
              className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
              style={{
                color: accent,
                backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`,
              }}
            >
              Flagship
            </span>
          )}
        </span>
        <span className="flex shrink-0 items-center gap-2 text-xs text-bone/70">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: agent.status === "live" ? accent : "#5a5d66" }}
          />
          {agent.status === "live" ? "Live" : "Preview"}
        </span>
      </div>

      {/* Name + one-line outcome, anchored low; detail rises on hover */}
      <div className={cx("relative z-10 mt-auto", featured && "max-w-xl")}>
        <h3
          className={cx(
            "font-display font-bold tracking-tight",
            featured ? "text-4xl sm:text-5xl" : "text-2xl"
          )}
        >
          {agent.name}
        </h3>
        <p
          className={cx(
            "mt-3 leading-relaxed text-bone/85",
            featured ? "text-lg" : "text-sm"
          )}
        >
          {agent.tagline}
        </p>

        {/* Progressive reveal, space is always reserved so the card never
            changes size (no layout shift); detail fades + slides in on hover,
            and is shown inline on touch where there is no hover. */}
        <div className="pt-6 opacity-100 transition-all duration-500 ease-out lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <ul className="flex flex-wrap gap-2">
            {agent.capabilities.slice(0, featured ? 4 : 3).map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-bone/80 backdrop-blur-sm"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4">
            {agent.metric ? (
              <span className="text-sm">
                <span className="font-display font-bold" style={{ color: accent }}>
                  {agent.metric.value}
                </span>
                <span className="ml-2 text-bone/60">{agent.metric.label}</span>
              </span>
            ) : (
              <span />
            )}

            {agent.href && (
              <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-bone">
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
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
