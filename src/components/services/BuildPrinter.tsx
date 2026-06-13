"use client";

import { useEffect, useState } from "react";

/* ------------------------------------------------------------------
   Services hero visual: the pixel 3D printer "builds" each offering,
   frame by frame. A build label and progress bar stay in sync with
   the print; when the box completes it holds for a beat as "shipped",
   then the next build starts. Toned into the dark theme like the
   home hero scene.
------------------------------------------------------------------ */

const FRAMES = 16;
const TICK_MS = 380;
const SHIP_HOLD_MS = 1500;

const builds = [
  "Sterling · lending agent",
  "Team enablement program",
  "Custom dashboards & APIs",
  "Nova · content agents",
  "Agent infrastructure",
  "Steward · delivery agent",
];

export function BuildPrinter() {
  const [frame, setFrame] = useState(0);
  const [build, setBuild] = useState(0);
  const [shipped, setShipped] = useState(false);

  useEffect(() => {
    if (shipped) {
      const t = setTimeout(() => {
        setShipped(false);
        setFrame(0);
        setBuild((b) => (b + 1) % builds.length);
      }, SHIP_HOLD_MS);
      return () => clearTimeout(t);
    }
    const t = setInterval(() => {
      setFrame((f) => {
        if (f >= FRAMES - 1) {
          setShipped(true);
          return f;
        }
        return f + 1;
      });
    }, TICK_MS);
    return () => clearInterval(t);
  }, [shipped]);

  const progress = (frame / (FRAMES - 1)) * 100;

  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* soft brand glow behind the build plate */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-primary)" }}
        aria-hidden
      />

      {/* the printer, frame by frame */}
      <div
        className="relative mx-auto"
        style={{
          width: "14rem",
          aspectRatio: "48 / 59",
          backgroundImage: "url(/agent-hero/agent-printer.png)",
          backgroundSize: `${FRAMES * 100}% 100%`,
          backgroundPositionX: `${(frame / (FRAMES - 1)) * 100}%`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          filter: "brightness(0.85) saturate(0.9) hue-rotate(-8deg)",
        }}
        aria-hidden
      />

      {/* build status, label + synced progress */}
      <div className="relative mt-6 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-faint">
            {shipped ? "Shipped" : "Building"}
          </span>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: shipped ? "var(--color-primary)" : "var(--color-spark)",
              boxShadow: shipped
                ? "0 0 8px var(--color-primary)"
                : "0 0 8px var(--color-spark)",
            }}
            aria-hidden
          />
        </div>
        <p className="mt-2 truncate font-display text-base font-semibold text-bone">
          {builds[build]}
          {shipped && <span style={{ color: "var(--color-primary)" }}> ✓</span>}
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: "var(--color-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
