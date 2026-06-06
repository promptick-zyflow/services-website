"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";

const beats = [
  { k: "Director plans", d: "Strategy, calendar & brand voice", icon: "calendar", who: "Director" },
  { k: "Creator produces", d: "Articles, social, email, video", icon: "pen", who: "Creator" },
  { k: "Director reviews", d: "On-brand, fact-checked, QA-gated", icon: "check", who: "Director" },
  { k: "Publish", d: "Shipped to your channels", icon: "rocket", who: "—" },
];

export function ContentLoop() {
  return (
    <div className="glass relative w-full max-w-md rounded-2xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="eyebrow">Content engine · loop</span>
        <span className="flex items-center gap-2 text-xs text-spark">
          <Icon name="loop" size={14} />
          continuous
        </span>
      </div>

      <ol className="relative space-y-2">
        <span
          className="absolute left-[19px] top-3 bottom-3 w-px bg-line"
          aria-hidden
        />
        {beats.map((b, i) => (
          <motion.li
            key={b.k}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.16, duration: 0.45 }}
            className="relative flex items-start gap-4 rounded-lg p-2"
          >
            <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-spark/40 bg-ink text-spark">
              <Icon name={b.icon} size={18} />
            </span>
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-bone">{b.k}</p>
                <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-faint">
                  {b.who}
                </span>
              </div>
              <p className="text-xs text-faint">{b.d}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mt-4 rounded-lg border border-spark/30 bg-spark/5 px-4 py-2.5 text-center text-xs text-bone">
        Nothing publishes without passing the quality gate.
      </div>
    </div>
  );
}
