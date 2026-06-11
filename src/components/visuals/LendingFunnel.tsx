"use client";

import { motion } from "motion/react";

/**
 * Sterling as a funnel: many raw applications narrow, stage by stage, into a
 * single submission-ready case pack. A "deal" pulse travels down the spine.
 * Bespoke to the lending pipeline — intake → enrich → detect → screen → pack.
 */

const stages = [
  { k: "Intake", d: "Applications captured", w: 100 },
  { k: "Enrich", d: "Companies House pulled", w: 85 },
  { k: "Detect", d: "Products matched", w: 70 },
  { k: "Screen", d: "Decline rules checked", w: 55 },
];

export function LendingFunnel() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Funnel body silhouette */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="funnelFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon points="3,2 97,2 70,98 30,98" fill="url(#funnelFill)" />
        <line x1="3" y1="2" x2="30" y2="98" stroke="var(--color-line)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <line x1="97" y1="2" x2="70" y2="98" stroke="var(--color-line)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Travelling "deal" pulse */}
      <span
        className="funnel-drop pointer-events-none absolute left-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-citron"
        style={{ boxShadow: "0 0 16px 4px color-mix(in srgb, var(--color-primary) 60%, transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-3 py-3">
        {stages.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: `${s.w}%` }}
            className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3"
          >
            <span className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-citron/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-bone">{s.k}</span>
            </span>
            <span className="truncate text-[11px] text-faint">{s.d}</span>
          </motion.div>
        ))}

        {/* Output — the case pack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 w-[46%] rounded-xl border border-citron/40 bg-citron/10 px-4 py-3 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M3 7.4l2.6 2.6L11 4.6"
                stroke="var(--color-citron)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold text-bone">Case pack</span>
          </div>
          <span className="mt-0.5 block text-[10px] text-citron">
            submission-ready
          </span>
        </motion.div>
      </div>
    </div>
  );
}
