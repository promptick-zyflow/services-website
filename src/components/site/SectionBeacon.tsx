"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/mixpanel";

/**
 * A zero-size marker that reports `viewed-section` for its PARENT element the
 * first time it scrolls into view. Rendered by the `Section` primitive when a
 * `view` name is supplied, so any section can opt into impression tracking
 * with a single prop and no wrapper element.
 */
export function SectionBeacon({ name }: { name: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fired.current) {
          fired.current = true;
          try {
            trackSectionView(name);
          } catch {
            // ignore
          }
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return <span ref={ref} aria-hidden style={{ display: "none" }} />;
}
