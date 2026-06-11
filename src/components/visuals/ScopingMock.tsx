"use client";

import { motion } from "motion/react";

const steps = [
  { k: "Workflow mapped", d: "Loan pre-submission · intake to case pack" },
  { k: "Baseline measured", d: "≈ 14 hrs/week of skilled admin" },
  { k: "Agent fit assessed", d: "High — multi-step, document-heavy, rule-bound" },
  { k: "Pilot scoped", d: "One agent, real tools, review gates from day one" },
];

/**
 * What you walk out of the free scoping workshop with — animated like a
 * live worksheet being filled in.
 */
export function ScopingMock() {
  return (
    <div className="glass w-full max-w-md rounded-2xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="eyebrow">Scoping workshop · week 1</span>
        <span className="rounded-full bg-citron/15 px-3 py-1 text-xs text-citron">
          Free
        </span>
      </div>

      <ol className="relative space-y-1">
        <span
          className="absolute left-[15px] top-2 bottom-2 w-px bg-line"
          aria-hidden
        />
        {steps.map((s, i) => (
          <motion.li
            key={s.k}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-4 rounded-lg p-2"
          >
            <span className="relative z-10 mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-citron/40 bg-ink">
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.25, type: "spring", stiffness: 300 }}
              >
                <path
                  d="M3 7.4l2.6 2.6L11 4.6"
                  stroke="var(--color-citron)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </span>
            <div>
              <p className="text-sm font-medium text-bone">{s.k}</p>
              <p className="text-xs text-faint">{s.d}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.95 }}
        className="mt-5 flex items-center justify-between rounded-lg border border-citron/30 bg-citron/5 px-4 py-3"
      >
        <span className="text-sm text-bone">You decide with numbers, not a pitch</span>
        <span className="font-display text-sm font-bold text-citron">Day 5</span>
      </motion.div>
    </div>
  );
}
