"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { track } from "@/lib/mixpanel";

/**
 * Wraps a page section and fires `viewed-section` once, the first time at least
 * 30% of it scrolls into view. Used to measure which blocks people actually
 * reach. The wrapper div is layout-neutral (no styling of its own).
 */
export function SectionView({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !fired.current) {
          fired.current = true;
          try {
            track("viewed-section", { section: name });
          } catch {
            // ignore
          }
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return <div ref={ref}>{children}</div>;
}
