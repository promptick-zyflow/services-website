"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, accentVar, cx } from "@/components/ui/Primitives";
import { agents, moreAgents } from "@/lib/agents";

/* ------------------------------------------------------------------
   Agent marketplace: a sidebar of collections, categories and search,
   with the agent cards in a grid beside it. Every live card links to
   the agent's detail page; the flagship carries a corner ribbon. Lab
   agents appear as dashed teasers.
------------------------------------------------------------------ */

const collections = ["All", "Flagship", "In the lab"] as const;
const categories = ["Lending", "Project management", "Social media"] as const;
type Filter =
  | (typeof collections)[number]
  | (typeof categories)[number];

export function AgentMarket() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = (text: (string | undefined)[]) =>
    q === "" || text.some((t) => t?.toLowerCase().includes(q));

  const liveVisible = agents.filter((a) => {
    if (!matches([a.codename, a.name, a.tagline, a.industry])) return false;
    if (filter === "All") return true;
    if (filter === "Flagship") return a.collections?.includes("Flagship");
    if (filter === "In the lab") return false;
    return a.industry === filter;
  });
  const labVisible =
    filter === "All" || filter === "In the lab"
      ? moreAgents.filter((m) =>
          matches([m.codename, m.name, m.blurb, m.industry])
        )
      : [];

  const FilterButton = ({ f }: { f: Filter }) => (
    <button
      type="button"
      onClick={() => setFilter(f)}
      className={cx(
        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200",
        filter === f
          ? "bg-white/[0.06] font-medium text-bone"
          : "text-muted hover:bg-white/[0.03] hover:text-bone"
      )}
    >
      {f}
      {filter === f && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--color-primary)" }}
          aria-hidden
        />
      )}
    </button>
  );

  return (
    <Section className="pb-28">
      <div className="grid gap-10 lg:grid-cols-[15rem_1fr]">
        {/* ---------- Side panel ---------- */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-surface p-5">
            {/* collections */}
            <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
              Collections
            </p>
            <div className="mt-2 space-y-1">
              {collections.map((f) => (
                <FilterButton key={f} f={f} />
              ))}
            </div>

            {/* categories */}
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-faint">
              Categories
            </p>
            <div className="mt-2 space-y-1">
              {categories.map((f) => (
                <FilterButton key={f} f={f} />
              ))}
            </div>
          </div>
        </aside>

        {/* ---------- Search + cards ---------- */}
        <div>
          <label className="relative block w-full">
            <span className="sr-only">Search agents</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint"
              aria-hidden
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="m11 11 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search agents…"
              className="w-full rounded-xl border border-line bg-ink py-2.5 pl-10 pr-3 text-sm text-bone placeholder:text-faint focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </label>

          <div className="mt-8">
          {liveVisible.length + labVisible.length === 0 ? (
            <p className="py-20 text-center text-sm text-faint">
              No agents match &ldquo;{query}&rdquo;, try another search.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {liveVisible.map((a) => {
                const flagship = a.collections?.includes("Flagship");
                return (
                  <Link
                    key={a.slug}
                    href={a.href ?? "#"}
                    className="grain-card group relative flex min-h-[23rem] flex-col overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink p-7 transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* flagship corner ribbon */}
                    {flagship && (
                      <span
                        className="absolute -right-12 top-7 z-20 w-44 rotate-45 py-1.5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#0a0a0a] shadow-lg"
                        style={{ background: accentVar(a.accent) }}
                        aria-hidden
                      >
                        Flagship
                      </span>
                    )}

                    {/* industry chip + live light */}
                    <span className="relative z-10 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs italic text-bone/85">
                        {a.industry}
                      </span>
                      {!flagship && (
                        <span className="flex items-center gap-2 text-xs text-bone/80">
                          <span className="live-dot" aria-hidden />
                          Live
                        </span>
                      )}
                    </span>

                    {/* persona, dull at rest, true colour on hover */}
                    <span className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 py-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={a.art}
                        alt={`${a.codename} pixel-art persona`}
                        draggable={false}
                        className="pixelated h-32 w-auto select-none opacity-40 brightness-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                      <span className="flux-text font-display text-2xl font-bold italic tracking-tight">
                        {a.codename}
                      </span>
                    </span>

                    {/* name + outcome */}
                    <span className="relative z-10">
                      <span className="flex items-end gap-2">
                        <span className="font-display text-xl font-bold tracking-tight text-bone">
                          {a.name}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 22 22"
                          fill="none"
                          className="mb-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        >
                          <path
                            d="M5 17 17 5M8 5h9v9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">
                        {a.tagline}
                      </span>
                      {flagship && (
                        <span className="mt-3 flex items-center gap-2 text-xs text-bone/80">
                          <span className="live-dot" aria-hidden />
                          Live
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}

              {/* In the lab, no detail pages yet */}
              {labVisible.map((m) => (
                <div
                  key={m.codename}
                  className="grain-card relative flex min-h-[23rem] flex-col overflow-hidden rounded-3xl border border-dashed border-line bg-surface/40 p-7"
                >
                  <span className="relative z-10 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs italic text-bone/70">
                      {m.industry}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-faint">
                      <span className="h-2 w-2 rounded-full bg-faint/60" aria-hidden />
                      In the lab
                    </span>
                  </span>

                  <span className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 py-6">
                    {/* still in development: a greyed orb, gently floating */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/agent-hero/wip-stone.svg"
                      alt=""
                      draggable={false}
                      aria-hidden
                      className="persona-float h-24 w-auto select-none grayscale"
                      style={{ imageRendering: "pixelated", opacity: 0.45 }}
                    />
                    <span className="font-display text-2xl font-bold italic tracking-tight text-faint">
                      {m.codename}
                    </span>
                  </span>

                  <span className="relative z-10">
                    <span className="font-display text-xl font-bold tracking-tight text-bone/70">
                      {m.name}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-faint">
                      {m.blurb}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </Section>
  );
}
