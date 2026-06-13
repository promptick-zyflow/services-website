"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/components/ui/Primitives";

/* Branded replacement for the native <select>: same field styling as
   the rest of the form at rest, with a themed popover listbox. Carries
   its value via a hidden input so it works inside plain FormData forms. */
export function Select({
  id,
  name,
  options,
  defaultValue,
}: {
  id?: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const [hi, setHi] = useState(Math.max(0, options.indexOf(defaultValue ?? options[0])));
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (o: string) => {
    setValue(o);
    setOpen(false);
  };

  const onTriggerKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setHi((h) =>
        e.key === "ArrowDown"
          ? Math.min(options.length - 1, h + 1)
          : Math.max(0, h - 1)
      );
    } else if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      choose(options[hi]);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKey}
        className="flex h-11 w-full items-center justify-between gap-3 rounded-lg border border-line bg-ink/60 px-3 text-left text-sm text-bone outline-none transition-colors focus:border-citron/50"
      >
        <span className="truncate">{value}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={cx(
            "shrink-0 text-faint transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        >
          <path
            d="m2.5 4.5 3.5 3.5 3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-activedescendant={`${name}-opt-${hi}`}
          className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-line bg-surface-2 py-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]"
        >
          {options.map((o, i) => (
            <li key={o} id={`${name}-opt-${i}`} role="option" aria-selected={o === value}>
              <button
                type="button"
                onClick={() => choose(o)}
                onMouseEnter={() => setHi(i)}
                className={cx(
                  "flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition-colors duration-150",
                  i === hi ? "bg-white/[0.06] text-bone" : "text-muted"
                )}
              >
                <span className="truncate">{o}</span>
                {o === value && (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0"
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden
                  >
                    <path
                      d="M2.5 7.5 6 11l5.5-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
