"use client";

import { motion } from "motion/react";

/**
 * Steward as a board that keeps itself honest: an hourly health "sweep"
 * passes down the columns, and one at-risk card is flagged + escalated.
 * Bespoke to delivery, continuous monitoring, not a static kanban.
 */

const columns = [
  {
    name: "In progress",
    cards: [
      { t: "Payments webhook retry", who: "AM", risk: false },
      { t: "Onboarding empty-state", who: "RK", risk: true },
    ],
  },
  { name: "In review", cards: [{ t: "Rate-limit middleware", who: "JS", risk: false }] },
  { name: "Done", cards: [{ t: "SSO bug fix", who: "AM", risk: false }] },
];

export function BoardPulse() {
  return (
    <div className="glass relative w-full max-w-md overflow-hidden rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Sprint board · synced</span>
        <span className="flex items-center gap-2 text-xs text-glacier">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glacier opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-glacier" />
          </span>
          hourly sweep
        </span>
      </div>

      {/* The sweep line */}
      <div
        className="board-sweep pointer-events-none absolute inset-x-0 z-20 h-12"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-secondary) 22%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative grid grid-cols-3 gap-2">
        {columns.map((col) => (
          <div key={col.name}>
            <p className="mb-2 truncate font-mono text-[10px] uppercase tracking-wider text-faint">
              {col.name}
            </p>
            <div className="space-y-2">
              {col.cards.map((card, i) => (
                <motion.div
                  key={card.t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className={`rounded-lg border p-2.5 ${
                    card.risk
                      ? "border-spark/50 bg-spark/5"
                      : "border-line bg-ink/60"
                  }`}
                >
                  <p className="text-[11px] leading-snug text-bone">{card.t}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-glacier/20 text-[8px] text-glacier">
                      {card.who}
                    </span>
                    {card.risk && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-spark" />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="relative mt-4 flex items-center gap-2 rounded-lg border border-spark/30 bg-spark/5 px-3 py-2"
      >
        <span className="text-spark">⚑</span>
        <span className="text-xs text-bone">
          1 item stalled · escalated to owner with context
        </span>
      </motion.div>
    </div>
  );
}
