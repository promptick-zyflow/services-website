"use client";

import { motion } from "motion/react";

// Layout in a 400×400 viewBox: chief-of-staff hub in the middle, the four
// deployed agents around it, the human review gate on top.
const HUB = { x: 200, y: 215 };
const YOU = { x: 200, y: 52 };
const agents = [
  { name: "Sterling", role: "Lending", x: 58, y: 160 },
  { name: "Steward", role: "Delivery", x: 342, y: 160 },
  { name: "Atlas", role: "Specs", x: 92, y: 330 },
  { name: "Nova", role: "Content", x: 308, y: 330 },
];

/**
 * The agent fleet as a constellation: specialists wired to a chief-of-staff
 * hub, with every consequential action flowing up through the human gate.
 */
export function FleetConstellation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-md select-none"
      aria-hidden
    >
      <div className="absolute inset-[18%] rounded-full bg-citron/10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative w-full">
        {/* Connections: agents → hub */}
        {agents.map((a) => (
          <line
            key={a.name}
            x1={a.x}
            y1={a.y}
            x2={HUB.x}
            y2={HUB.y}
            stroke="var(--color-line)"
            strokeWidth="1"
            className="dash-flow"
          />
        ))}
        {/* Connection: hub → human gate (accented — the review path) */}
        <line
          x1={HUB.x}
          y1={HUB.y - 26}
          x2={YOU.x}
          y2={YOU.y + 24}
          stroke="var(--color-citron)"
          strokeOpacity="0.5"
          strokeWidth="1.2"
          className="dash-flow"
        />

        {/* Human gate */}
        <g>
          <circle cx={YOU.x} cy={YOU.y} r="24" fill="var(--color-ink)" stroke="var(--color-citron)" strokeOpacity="0.6" />
          <circle cx={YOU.x} cy={YOU.y} r="24" fill="none" stroke="var(--color-citron)" strokeOpacity="0.25" className="node-pulse" strokeWidth="5" />
          <text x={YOU.x} y={YOU.y + 1} textAnchor="middle" fill="var(--color-bone)" fontSize="11" fontWeight="600" fontFamily="var(--font-display)">
            You
          </text>
          <text x={YOU.x} y={YOU.y - 36} textAnchor="middle" fill="var(--color-faint)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="2">
            IN COMMAND
          </text>
        </g>

        {/* Chief-of-staff hub */}
        <g>
          <circle cx={HUB.x} cy={HUB.y} r="26" fill="var(--color-surface)" stroke="var(--color-line)" />
          <circle cx={HUB.x} cy={HUB.y} r="26" fill="none" stroke="var(--color-glacier)" strokeOpacity="0.3" className="node-pulse" strokeWidth="4" />
          <text x={HUB.x} y={HUB.y - 1} textAnchor="middle" fill="var(--color-bone)" fontSize="10" fontWeight="600" fontFamily="var(--font-display)">
            Kratos
          </text>
          <text x={HUB.x} y={HUB.y + 11} textAnchor="middle" fill="var(--color-faint)" fontSize="7.5" fontFamily="var(--font-mono)">
            chief of staff
          </text>
        </g>

        {/* Agent nodes */}
        {agents.map((a, i) => (
          <motion.g
            key={a.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.15, duration: 0.5 }}
          >
            <circle cx={a.x} cy={a.y} r="21" fill="var(--color-surface)" stroke="var(--color-line)" />
            <circle cx={a.x} cy={a.y} r="21" fill="none" stroke="var(--color-glacier)" strokeOpacity="0.2" className="node-pulse" strokeWidth="3" />
            <text x={a.x} y={a.y + 1} textAnchor="middle" fill="var(--color-bone)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-display)">
              {a.name}
            </text>
            <text x={a.x} y={a.y + 12} textAnchor="middle" fill="var(--color-faint)" fontSize="7.5" fontFamily="var(--font-mono)">
              {a.role}
            </text>
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}
