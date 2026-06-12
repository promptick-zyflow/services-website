"use client";

import { motion } from "motion/react";
import { Section, Button } from "@/components/ui/Primitives";
import { AgentCoreCanvas } from "@/components/three/AgentCoreCanvas";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      {/* Animated 3D agent core — full-bleed background */}
      <div className="absolute inset-0">
        <AgentCoreCanvas />
      </div>

      {/* Fade the canvas into the page bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

      <Section className="relative flex min-h-[calc(100vh-4rem)] items-center">
        <div className="max-w-2xl py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: "var(--color-primary)" }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
              </span>
              AI services & agents · human in command
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mt-7 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            AI that{" "}
            <span className="flux-text">runs the work</span>,
            <br />
            not just chats about it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            Zyflow is an AI services and development partner — we build the
            agents, software and infrastructure that put AI to work across your
            business, with a human always in command.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" variant="primary">
              Book a demo
            </Button>
            <Button href="/#agents" variant="line">
              What we do
            </Button>
          </motion.div>
        </div>
      </Section>
    </section>
  );
}
