"use client";

import { motion } from "motion/react";

export function ProcessVisual() {
  const steps = [
    {
      num: "01",
      title: "Scoping",
      desc: "1 Week · No Cost",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      color: "var(--color-citron)",
      glow: "rgba(94, 144, 246, 0.15)",
    },
    {
      num: "02",
      title: "Pilot",
      desc: "2–5 Weeks · Active Tools",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      color: "var(--color-secondary)",
      glow: "rgba(192, 213, 255, 0.15)",
    },
    {
      num: "03",
      title: "Scale",
      desc: "Production Deployment",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: "var(--color-spark)",
      glow: "rgba(255, 138, 76, 0.15)",
    },
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col gap-6 py-4">
      {/* Connecting animated line */}
      <div className="absolute left-[26px] top-6 bottom-6 w-px bg-line z-0">
        <motion.div
          animate={{
            y: ["0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-1/3 w-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </div>

      {steps.map((s, idx) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.5 }}
          className="relative z-10 flex items-center gap-5"
        >
          {/* Circular Indicator */}
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-ink text-bone transition-colors duration-300"
            style={{
              borderColor: s.color,
              boxShadow: `0 0 15px -3px ${s.glow}`,
            }}
          >
            <span style={{ color: s.color }}>{s.icon}</span>
          </div>

          {/* Details Card */}
          <div className="glass flex-1 rounded-2xl p-4">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display text-sm font-semibold text-bone">
                {s.title}
              </h4>
              <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
                Phase {s.num}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              {s.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
