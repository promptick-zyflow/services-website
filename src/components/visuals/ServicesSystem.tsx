"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { track, EVENTS } from "@/lib/mixpanel";

/**
 * Services as a system map: four service offerings surround a glowing
 * "Your agents" core, connected by curved gradient lines that flow inward.
 * Hovering a node reveals its one-liner and brightens its connector.
 *
 * The hub-and-spoke shape is specific to this section's meaning, the four
 * services are everything *around* the agents.
 */

type Node = {
  key: string;
  label: string;
  line: string;
  href: string;
  icon: string; // pixel-art icon path (public), gray at rest, brand on hover
  // position in the 800×520 viewBox, and the connector path from node → core
  pos: { x: number; y: number };
  path: string;
};

const VB = { w: 800, h: 520 };
const CORE = { x: 400, y: 260 };

const nodes: Node[] = [
  {
    key: "enablement",
    label: "Team enablement",
    line: "Training and workflow-level integration, so AI adoption sticks beyond the workshop.",
    href: "/services#enablement",
    icon: "/agents/svc-teams.svg",
    pos: { x: 400, y: 72 },
    path: "M400 72 C 462 134 462 198 400 260",
  },
  {
    key: "agent-development",
    label: "Agent development",
    line: "Custom deep agents for your workflows, CXOs and verticals, human always in command.",
    href: "/services#agent-development",
    icon: "/agents/svc-brain.svg",
    pos: { x: 660, y: 260 },
    path: "M660 260 C 598 322 482 322 400 260",
  },
  {
    key: "infrastructure",
    label: "Agent & AI infrastructure",
    line: "Model strategy, deployment and spend guardrails, the platform under the agents.",
    href: "/services#infrastructure",
    icon: "/agents/svc-stars.svg",
    pos: { x: 400, y: 448 },
    path: "M400 448 C 338 386 338 322 400 260",
  },
  {
    key: "custom-development",
    label: "Custom development",
    line: "The dashboards, integrations and tools that agent workflows need to live in your business.",
    href: "/services#custom-development",
    icon: "/agents/svc-cursor.png",
    pos: { x: 140, y: 260 },
    path: "M140 260 C 202 198 318 198 400 260",
  },
];

const pct = (n: number, total: number) => `${(n / total) * 100}%`;

export function ServicesSystem() {
  const [active, setActive] = useState<string | null>(null);
  const current = nodes.find((n) => n.key === active);

  return (
    <div>
      {/* ---- Desktop: the system map ---- */}
      <div className="hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-2xl"
          style={{ aspectRatio: `${VB.w} / ${VB.h}` }}
        >
          {/* Connectors */}
          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden
          >
            <defs>
              <radialGradient
                id="sysGrad"
                cx={CORE.x}
                cy={CORE.y}
                r="280"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.9" />
                <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {nodes.map((n) => {
              const isActive = active === n.key;
              const dim = active !== null && !isActive;
              return (
                <g key={n.key}>
                  {/* faint base rail */}
                  <path
                    d={n.path}
                    stroke="var(--color-line)"
                    strokeWidth={1.5}
                    strokeOpacity={dim ? 0.4 : 1}
                  />
                  {/* flowing energy toward the core */}
                  <path
                    d={n.path}
                    stroke="url(#sysGrad)"
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeLinecap="round"
                    className="sys-flow transition-opacity duration-300"
                    style={{ opacity: dim ? 0.15 : isActive ? 1 : 0.55 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Core */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: pct(CORE.x, VB.w), top: pct(CORE.y, VB.h) }}
          >
            <div className="relative grid place-items-center">
              {/* glow */}
              <div className="absolute h-32 w-32 animate-pulse rounded-full bg-[var(--color-primary)] opacity-20 blur-2xl" />
              {/* rotating ring */}
              <div
                className="spin-slow absolute h-28 w-28 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, color-mix(in srgb, var(--color-primary) 70%, transparent), transparent 55%)",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                }}
              />
              {/* glass disc */}
              <div className="glass relative grid h-24 w-24 place-items-center rounded-full text-center">
                <div>
                  <span className="mx-auto flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-[var(--color-primary)] opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  </span>
                  <p className="mt-1.5 font-display text-sm font-semibold leading-tight text-bone">
                    Your
                    <br />
                    business
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service nodes */}
          {nodes.map((n, i) => (
            <motion.div
              key={n.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: pct(n.pos.x, VB.w), top: pct(n.pos.y, VB.h) }}
            >
              <Link
                href={n.href}
                onMouseEnter={() => setActive(n.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.key)}
                onBlur={() => setActive(null)}
                onClick={() =>
                  track(EVENTS.clickedButton, {
                    label: n.label,
                    destination: n.href,
                    location: "services-system",
                  })
                }
                className="svc-chip group/node glass flex items-center gap-2.5 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--color-primary)_45%,transparent)]"
              >
                <span
                  className="grid shrink-0 place-items-center rounded-lg border border-line bg-ink"
                  style={{ height: "2.75rem", width: "2.75rem" }}
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={n.icon}
                    alt=""
                    draggable={false}
                    className="svc-icon select-none object-contain"
                    style={{ height: "2rem", width: "2rem" }}
                  />
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-bone">
                  {n.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Hover caption, fixed height so nothing shifts */}
        <div className="mx-auto mt-6 flex min-h-[3.5rem] max-w-xl items-center justify-center text-center">
          {current ? (
            <motion.p
              key={current.key}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm leading-relaxed text-muted"
            >
              <span className="font-medium text-bone">{current.label}.</span>{" "}
              {current.line}
            </motion.p>
          ) : (
            <p className="text-sm text-faint">
              Four services that make your business AI-enabled, hover one to
              see what it does.
            </p>
          )}
        </div>
      </div>

      {/* ---- Mobile: a clean stacked list ---- */}
      <ul className="space-y-px overflow-hidden rounded-2xl border border-line bg-line lg:hidden">
        {nodes.map((n) => (
          <li key={n.key}>
            <Link
              href={n.href}
              onClick={() =>
                track(EVENTS.clickedButton, {
                  label: n.label,
                  destination: n.href,
                  location: "services-system",
                })
              }
              className="svc-chip flex gap-4 bg-surface p-5"
            >
              <span
                className="grid shrink-0 place-items-center rounded-lg border border-line bg-ink"
                style={{ height: "2.75rem", width: "2.75rem" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={n.icon}
                  alt=""
                  draggable={false}
                  className="svc-icon select-none object-contain"
                  style={{ height: "2rem", width: "2rem" }}
                />
              </span>
              <div>
                <p className="font-display text-base font-semibold">{n.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{n.line}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
