"use client";

import { motion } from "motion/react";

const models = [
  {
    name: "Model A",
    scores: [{ l: "Quality", v: 92 }, { l: "Speed", v: 61 }, { l: "Cost fit", v: 74 }],
    winner: true,
  },
  {
    name: "Model B",
    scores: [{ l: "Quality", v: 78 }, { l: "Speed", v: 88 }, { l: "Cost fit", v: 55 }],
    winner: false,
  },
  {
    name: "Model C",
    scores: [{ l: "Quality", v: 64 }, { l: "Speed", v: 70 }, { l: "Cost fit", v: 90 }],
    winner: false,
  },
];

/**
 * Promptick product mock: one use case run across three models, scores
 * side by side. Bars animate in when scrolled into view.
 */
export function ModelCompare() {
  return (
    <div className="glass w-full max-w-md rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Comparison · run #128</span>
        <span className="flex items-center gap-2 text-xs text-spark">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-spark" />
          </span>
          3 models · same prompt
        </span>
      </div>

      {/* The use case under test */}
      <div className="rounded-lg border border-line bg-ink/60 px-3.5 py-2.5">
        <p className="truncate font-mono text-[11px] text-muted">
          &ldquo;Summarise this contract and flag unusual clauses…&rdquo;
        </p>
      </div>

      {/* Model columns */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {models.map((m, mi) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: mi * 0.15, duration: 0.45 }}
            className={`rounded-lg border p-3 ${
              m.winner
                ? "border-spark/40 bg-spark/5"
                : "border-line bg-ink/40"
            }`}
          >
            <div className="flex items-center justify-between gap-1">
              <p className="truncate text-[11px] font-medium text-bone">
                {m.name}
              </p>
              {m.winner && (
                <span className="rounded-full bg-spark/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-spark">
                  Best
                </span>
              )}
            </div>
            <div className="mt-3 space-y-2.5">
              {m.scores.map((s, si) => (
                <div key={s.l}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
                      {s.l}
                    </span>
                    <span className="font-mono text-[9px] text-muted">
                      {s.v}
                    </span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-line/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.v}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + mi * 0.15 + si * 0.1,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: m.winner
                          ? "var(--color-spark)"
                          : "var(--color-citron)",
                        opacity: m.winner ? 1 : 0.7,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1 }}
        className="mt-4 flex items-center justify-between rounded-lg border border-spark/30 bg-spark/5 px-4 py-3"
      >
        <span className="text-xs text-bone">
          Model A wins on quality for this use case
        </span>
        <span className="font-display text-sm font-bold text-spark">92</span>
      </motion.div>
    </div>
  );
}
