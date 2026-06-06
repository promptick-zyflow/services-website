"use client";

import { motion } from "motion/react";
import { Button, Section } from "@/components/ui/Primitives";
import { AgentCoreCanvas } from "@/components/three/AgentCoreCanvas";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background grid + 3D core */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 lg:left-[42%]">
        <AgentCoreCanvas />
      </div>
      {/* Fade the canvas into the page bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

      <Section className="relative flex min-h-[calc(100vh-4rem)] items-center">
        <div className="max-w-2xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-citron opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-citron" />
              </span>
              Production deep agents · live today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mt-7 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Agents that{" "}
            <span className="flux-text">run the work</span>,
            <br />
            not just chat about it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            Zyflow builds deep agents that own entire business workflows
            end-to-end — lending, delivery, product specs and content. They do
            the operational heavy lifting autonomously, while you stay in
            command of every decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/#contact" variant="primary">
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="/#agents" variant="line">
              Meet the agents
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7"
          >
            {[
              { v: "15–20 min", l: "lender-ready loan case" },
              { v: "Hourly", l: "delivery-board sweeps" },
              { v: "Human", l: "in command, always" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold text-bone">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Section>
    </section>
  );
}
