"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

      <Section className="relative grid min-h-[calc(100vh-4rem)] items-center lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 rounded-2xl sm:rounded-full border border-line bg-surface/50 p-2 backdrop-blur-md focus-within:border-[var(--color-primary)] focus-within:ring-1 focus-within:ring-[var(--color-primary)]"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! We'll be in touch."); }}
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full bg-transparent px-4 py-2 text-sm text-bone placeholder:text-muted focus:outline-none"
              required
            />
            <button
              type="submit"
              className="flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl sm:rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-ink)" }}
            >
              Get Early Access
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-muted"
          >
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Cancel anytime
            </span>
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

        {/* Right side Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full opacity-20 blur-[100px]" style={{ backgroundColor: "var(--color-primary)" }} />
          
          {/* Dashboard glass card */}
          <div className="relative rounded-3xl border border-line bg-surface/60 p-7 backdrop-blur-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-line" />
                  <div className="h-3 w-3 rounded-full bg-line" />
                  <div className="h-3 w-3 rounded-full bg-line" />
                </div>
                <div className="ml-4 font-mono text-xs uppercase tracking-widest text-faint">Agent Orchestrator</div>
              </div>
              <div className="flex h-6 items-center rounded-full bg-black/40 border border-line px-3 text-[10px] font-bold tracking-widest uppercase text-bone">
                <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
                System Active
              </div>
            </div>

            {/* Content */}
            <div className="mt-7 flex flex-col gap-5">
              {/* Active Task */}
              <div className="rounded-2xl border border-line bg-ink/70 p-5 shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-muted">Current Workflow</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--color-secondary)" }}>Processing...</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-line overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-transparent animate-pulse" style={{ backgroundImage: "linear-gradient(to right, transparent, var(--color-primary), var(--color-secondary))" }} />
                </div>
              </div>

              {/* Logs */}
              <div className="flex flex-col gap-3 font-mono text-xs text-muted bg-obsidian/40 rounded-2xl p-5 border border-line/50">
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--color-primary)" }}>[09:41:02]</span>
                  <span>Ingested application from external client...</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--color-primary)" }}>[09:41:05]</span>
                  <span>Enriching financial data...</span>
                </div>
                <div className="flex items-center gap-3 text-bone">
                  <span style={{ color: "var(--color-secondary)" }}>[09:41:12]</span>
                  <span>Detected 5 matching internal products.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--color-primary)" }}>[09:41:14]</span>
                  <span className="animate-pulse">Screening against decline criteria...</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-2 grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <div className="text-3xl font-bold text-bone">98.4%</div>
                  <div className="mt-2 text-[10px] uppercase tracking-wider text-muted font-medium">Automation Rate</div>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundColor: "var(--color-primary)" }} />
                  <div className="relative text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>14m 20s</div>
                  <div className="relative mt-2 text-[10px] uppercase tracking-wider text-muted font-medium">Avg Resolution Time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </section>
  );
}
