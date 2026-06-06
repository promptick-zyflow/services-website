"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Heavy WebGL bundle — never SSR'd, only loaded client-side after first paint.
const AgentCore = dynamic(() => import("./AgentCore"), { ssr: false });

/* CSS aurora fallback — shown on mobile, reduced-motion, or before the 3D mounts. */
function AuroraFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-[min(70vw,30rem)] w-[min(70vw,30rem)]">
        <div className="aurora absolute inset-0 rounded-full" />
        <div className="absolute inset-[18%] rounded-full border border-citron/20" />
        <div className="absolute inset-[30%] rounded-full border border-glacier/10" />
        <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-citron/30 to-glacier/20 blur-xl" />
      </div>
    </div>
  );
}

export function AgentCoreCanvas() {
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const bigEnough = window.matchMedia("(min-width: 768px)").matches;
    if (reduced || !bigEnough) return;

    // Defer mounting the heavy canvas until the browser is idle, so it
    // never competes with the hero's text for LCP.
    const start = () => setEnable3D(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0">
      {enable3D ? <AgentCore /> : <AuroraFallback />}
    </div>
  );
}
