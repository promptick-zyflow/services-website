"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";

/**
 * Nova as a two-agent production loop: a Director sets strategy, a Creator
 * produces, everything passes a quality gate before it ships — then the cycle
 * repeats. Bespoke to content-at-scale.
 */

const LOOP = "M28 28 Q 50 8 72 28 Q 94 55 50 82 Q 6 55 28 28 Z";

const nodes = [
  { key: "director", label: "Director", sub: "Strategy & calendar", icon: "calendar", x: 28, y: 28 },
  { key: "creator", label: "Creator", sub: "Production", icon: "pen", x: 72, y: 28 },
  { key: "qa", label: "Quality gate", sub: "Reviewed before ship", icon: "check", x: 50, y: 82 },
];

export function ContentCycle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-full max-w-sm"
    >
      <div className="absolute inset-[20%] rounded-full bg-spark/10 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <path d={LOOP} stroke="var(--color-line)" strokeWidth="1.5" />
        <path
          d={LOOP}
          stroke="var(--color-spark)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
          className="sys-flow"
        />
        {/* packet travelling the loop */}
        <circle r="1.8" fill="var(--color-spark)">
          <animateMotion dur="5s" repeatCount="indefinite" path={LOOP} />
        </circle>
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.key}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.14, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-ink text-spark">
              <Icon name={n.icon} size={15} />
            </span>
            <div className="pr-1">
              <p className="text-sm font-semibold leading-tight text-bone">{n.label}</p>
              <p className="text-[10px] leading-tight text-faint">{n.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
