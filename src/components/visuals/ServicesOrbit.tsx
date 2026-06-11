"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";

const nodes = [
  { icon: "users", label: "Team enablement", pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { icon: "sparkle", label: "Agent development", pos: "left-full top-1/2 -translate-x-1/2 -translate-y-1/2" },
  { icon: "plug", label: "AI infrastructure", pos: "left-1/2 top-full -translate-x-1/2 -translate-y-1/2" },
  { icon: "code", label: "Custom development", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

/**
 * Animated orbit diagram: the four service offerings slowly circling the
 * client's workflow. Pure CSS rotation (orbit / orbit-reverse keep labels
 * upright); motion handles the entrance.
 */
export function ServicesOrbit() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-full max-w-md select-none"
      aria-hidden
    >
      {/* Ambient glow */}
      <div className="absolute inset-[20%] rounded-full bg-glacier/10 blur-3xl" />

      {/* Static rings */}
      <div className="absolute inset-[6%] rounded-full border border-line/70" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-line/50" />

      {/* Center node — the client's workflow */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="glass grid h-28 w-28 place-items-center rounded-full text-center">
          <div>
            <span className="relative mx-auto flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-citron opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-citron" />
            </span>
            <p className="mt-2 font-display text-xs font-semibold leading-tight text-bone">
              Your
              <br />
              workflow
            </p>
          </div>
        </div>
      </div>

      {/* Orbiting service nodes — wrapper rotates, nodes counter-rotate */}
      <div className="orbit absolute inset-[6%]">
        {nodes.map((n) => (
          <div key={n.label} className={`absolute ${n.pos}`}>
            <div className="orbit-reverse">
              <div className="glass flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-glacier">
                  <Icon name={n.icon} size={14} />
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-bone">
                  {n.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
