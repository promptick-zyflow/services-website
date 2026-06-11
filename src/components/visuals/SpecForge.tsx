"use client";

import { motion } from "motion/react";

/**
 * Atlas turning a thin, messy ticket into a structured requirement: scattered
 * input fragments resolve into a clean PRD whose sections fill in, one item
 * marked PROPOSED (never fabricated). Bespoke to requirements work.
 */

const fragments = [
  { t: "“users keep losing work”", x: "left-0 top-2", r: "-rotate-6" },
  { t: "slack: can we autosave?", x: "right-0 top-0", r: "rotate-3" },
  { t: "ticket #214", x: "left-6 top-12", r: "rotate-2" },
];

const sections = [
  { k: "Problem", w: "85%", proposed: false },
  { k: "Scope", w: "70%", proposed: false },
  { k: "MVP", w: "78%", proposed: false },
  { k: "Acceptance criteria", w: "64%", proposed: true },
];

export function SpecForge() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Messy input fragments */}
      <div className="relative mx-auto mb-4 h-20 w-full">
        {fragments.map((f, i) => (
          <motion.span
            key={f.t}
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className={`absolute ${f.x} ${f.r} rounded-md border border-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] text-faint`}
          >
            {f.t}
          </motion.span>
        ))}
        {/* converging arrow */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-citron"
          aria-hidden
        >
          ↓
        </motion.span>
      </div>

      {/* Structured requirement */}
      <div className="glass rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="eyebrow">Requirement</span>
          <span className="rounded-full bg-citron/15 px-2.5 py-0.5 text-[10px] text-citron">
            spec-ready
          </span>
        </div>
        <div className="space-y-3.5">
          {sections.map((s, i) => (
            <div key={s.k}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-bone">{s.k}</span>
                {s.proposed && (
                  <span className="rounded bg-citron/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-citron">
                    Proposed
                  </span>
                )}
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: s.w }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background: s.proposed
                      ? "color-mix(in srgb, var(--color-citron) 45%, transparent)"
                      : "var(--color-citron)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
