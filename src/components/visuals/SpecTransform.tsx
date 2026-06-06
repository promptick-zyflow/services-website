"use client";

import { motion } from "motion/react";

export function SpecTransform() {
  return (
    <div className="w-full max-w-md space-y-3">
      {/* Raw input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-line bg-ink/60 p-5"
      >
        <p className="eyebrow mb-3">Raw ticket</p>
        <p className="text-sm leading-relaxed text-muted">
          &ldquo;we need a way for users to export their data, finance keeps
          asking. csv probably. make it not slow&rdquo;
        </p>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-3 py-1"
      >
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-citron">
          Atlas · structuring
        </span>
        <span className="h-px flex-1 bg-line" />
      </motion.div>

      {/* Structured output */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="glass rounded-2xl p-5"
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="eyebrow !text-citron/80">PRD · data export</p>
          <span className="rounded-full bg-citron/15 px-2.5 py-0.5 text-[10px] text-citron">
            spec-ready
          </span>
        </div>
        <dl className="space-y-2.5 text-xs">
          {[
            ["Problem", "Finance can't self-serve data; manual pulls block close."],
            ["Scope", "CSV export of account data, async for large sets."],
            ["User story", "As an admin, I export my org's records to CSV…"],
            ["Acceptance", "≤10s for 100k rows · email link when ready · audit-logged"],
            ["Out of scope", "Scheduled exports, XLSX — flagged PROPOSED"],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <dt className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-wide text-faint">
                {k}
              </dt>
              <dd className="text-bone/90">{v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  );
}
