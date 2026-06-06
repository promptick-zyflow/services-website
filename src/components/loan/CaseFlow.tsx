"use client";

import { motion } from "motion/react";

const stages = [
  { k: "Intake", d: "Application captured from email" },
  { k: "Detection", d: "Products auto-matched to the deal" },
  { k: "Enrichment", d: "Companies House data pulled in" },
  { k: "Screening", d: "Checked against lender decline rules" },
  { k: "Case pack", d: "Structured summary, submission-ready" },
];

export function CaseFlow() {
  return (
    <div className="glass relative w-full max-w-md rounded-2xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="eyebrow">Live case · ACME-0427</span>
        <span className="flex items-center gap-2 text-xs text-citron">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-citron opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-citron" />
          </span>
          processing
        </span>
      </div>

      <ol className="relative space-y-1">
        <span
          className="absolute left-[15px] top-2 bottom-2 w-px bg-line"
          aria-hidden
        />
        {stages.map((s, i) => (
          <motion.li
            key={s.k}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-4 rounded-lg p-2"
          >
            <span className="relative z-10 mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-citron/40 bg-ink">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.2, type: "spring", stiffness: 300 }}
                className="h-2 w-2 rounded-full bg-citron"
              />
            </span>
            <div>
              <p className="text-sm font-medium text-bone">{s.k}</p>
              <p className="text-xs text-faint">{s.d}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mt-5 flex items-center justify-between rounded-lg border border-citron/30 bg-citron/5 px-4 py-3">
        <span className="text-sm text-bone">Ready for broker review</span>
        <span className="font-display text-sm font-bold text-citron">
          ~17 min
        </span>
      </div>
    </div>
  );
}
