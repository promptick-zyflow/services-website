"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Heavy WebGL bundle, never SSR'd, only loaded client-side after first paint.
const AgentCore = dynamic(() => import("./AgentCore"), { ssr: false });

/* CSS aurora fallback, shown on mobile, reduced-motion, or before the 3D mounts. */
function AuroraFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center lg:left-[42%]">
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
  const [active, setActive] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

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

  // Drive the orb's render loop only while it's actually on-screen and the
  // tab is visible, frees the GPU once the user scrolls past the hero.
  useEffect(() => {
    if (!enable3D) return;
    const el = wrapRef.current;
    if (!el) return;

    let onScreen = true;
    const update = () => setActive(onScreen && !document.hidden);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        update();
      },
      { threshold: 0.01 }
    );
    io.observe(el);
    document.addEventListener("visibilitychange", update);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [enable3D]);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {enable3D ? <AgentCore active={active} /> : <AuroraFallback />}
    </div>
  );
}
