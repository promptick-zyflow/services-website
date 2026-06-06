"use client";

import { motion } from "motion/react";

const columns = [
  {
    name: "In progress",
    cards: [
      { t: "Payments webhook retry", who: "AM", est: "5h" },
      { t: "Onboarding empty-state", who: "RK", est: "3h" },
    ],
  },
  {
    name: "In review",
    cards: [{ t: "Rate-limit middleware", who: "JS", est: "2h" }],
  },
  {
    name: "Done",
    cards: [{ t: "SSO bug fix", who: "AM", est: "4h" }],
  },
];

export function BoardMock() {
  return (
    <div className="glass w-full max-w-md rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Sprint 14 · org board</span>
        <span className="flex items-center gap-2 text-xs text-glacier">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glacier opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-glacier" />
          </span>
          synced
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {columns.map((col, ci) => (
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
                  transition={{ delay: (ci * 2 + i) * 0.12, duration: 0.4 }}
                  className="rounded-lg border border-line bg-ink/60 p-2.5"
                >
                  <p className="text-[11px] leading-snug text-bone">{card.t}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-glacier/20 text-[8px] text-glacier">
                      {card.who}
                    </span>
                    <span className="font-mono text-[9px] text-faint">
                      {card.est}
                    </span>
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
        transition={{ delay: 0.8 }}
        className="mt-4 flex items-center gap-2 rounded-lg border border-spark/30 bg-spark/5 px-3 py-2"
      >
        <span className="text-spark">⚑</span>
        <span className="text-xs text-bone">
          1 item overdue · escalated to owner
        </span>
      </motion.div>
    </div>
  );
}
