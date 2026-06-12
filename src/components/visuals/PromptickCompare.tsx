"use client";

import { motion } from "motion/react";

export function PromptickCompare() {
  const models = [
    {
      name: "Standard Model",
      type: "Fast & cost-effective",
      latency: "0.4s",
      cost: "$0.15 / 1M tokens",
      accuracy: "81%",
      output: "User is reporting a login error on the mobile app due to a timeout.",
      status: "Sufficient for simple tasks",
      accent: "var(--color-primary)",
      glow: "rgba(94, 144, 246, 0.1)",
    },
    {
      name: "Reasoning Model",
      type: "Deep cognitive & precise",
      latency: "3.2s",
      cost: "$2.50 / 1M tokens",
      accuracy: "97%",
      output: "1. Root Cause: Auth server timeout.\n2. Impact: High (blocks login).\n3. Fix: Retry login handshake.",
      status: "Required for complex reasoning",
      accent: "var(--color-spark)",
      glow: "rgba(255, 138, 76, 0.1)",
    },
  ];

  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Input query */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-line bg-ink/65 p-4 sm:p-5"
      >
        <p className="eyebrow mb-2">Input Prompt</p>
        <p className="text-sm font-medium text-bone leading-relaxed">
          &ldquo;Analyze this error log, identify root cause, and draft a structured summary.&rdquo;
        </p>
      </motion.div>

      {/* Comparison Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {models.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-5"
            style={{
              borderColor: `color-mix(in srgb, ${m.accent} 25%, var(--color-line))`,
            }}
          >
            {/* Ambient subtle card glow */}
            <div
              className="absolute -right-12 -top-12 h-24 w-24 rounded-full blur-2xl"
              style={{ background: m.glow }}
            />

            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {m.type}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-bone">
                {m.name}
              </h3>
            </div>

            <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-line py-3">
              <div>
                <dt className="text-[9px] uppercase tracking-wider text-faint">Latency</dt>
                <dd className="mt-0.5 text-xs font-semibold text-bone">{m.latency}</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-wider text-faint">Cost</dt>
                <dd className="mt-0.5 text-xs font-semibold text-bone truncate">{m.cost.split(" ")[0]}</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-wider text-faint">Accuracy</dt>
                <dd className="mt-0.5 text-xs font-semibold" style={{ color: m.accent }}>
                  {m.accuracy}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex-1">
              <p className="font-mono text-[9px] uppercase tracking-wider text-faint">Output</p>
              <div className="mt-1.5 rounded-lg bg-ink/50 p-3 font-mono text-[11px] leading-relaxed text-bone/85">
                {m.output.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-full border border-line bg-ink/30 px-3 py-1.5 text-center">
              <p className="text-[10px] font-medium text-muted">{m.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
