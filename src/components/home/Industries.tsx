"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { Section, Eyebrow, accentVar, cx } from "@/components/ui/Primitives";
import { industries, type Industry, type Persona } from "@/lib/agents";

/* ------------------------------------------------------------------
   Industry split, ai71-style: three tall cards side by side in the
   site's surface palette with film grain. Each card carries its agent
   persona as pixel art, dull and desaturated at rest, full colour
   once the card activates. Hovering (or tapping) a card opens it in
   place into a panel of rotating use-case slides (dot pagination)
   with Learn-more + act CTAs. One open at a time.
------------------------------------------------------------------ */
export function Industries() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="agents" className="py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">Industries</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Bring the agents to your industry.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {industries.map((ind) => (
          <IndustryCard
            key={ind.id}
            industry={ind}
            open={openId === ind.id}
            onOpen={() => setOpenId(ind.id)}
            onClose={() => setOpenId(null)}
          />
        ))}
      </div>

      {/* Marketplace link, after the cards, bottom right */}
      <div className="mt-6 flex justify-end">
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-bone hover:underline"
        >
          Meet all the agents
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </Section>
  );
}

/* Pixel-art persona portrait. Dull at rest; full colour when active. */
function PersonaArt({
  persona,
  active,
  className,
}: {
  persona: Persona;
  active: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={persona.art}
      alt={`${persona.name} pixel-art persona`}
      draggable={false}
      className={cx(
        "pixelated w-auto select-none transition-all duration-700",
        active
          ? "opacity-100 grayscale-0"
          : "opacity-40 brightness-90 grayscale",
        className
      )}
    />
  );
}

function IndustryCard({
  industry,
  open,
  onOpen,
  onClose,
}: {
  industry: Industry;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const accent = accentVar(industry.accent);
  const [slide, setSlide] = useState(0);

  // Auto-advance the use-case slides while the card is open.
  useEffect(() => {
    if (!open) return;
    setSlide(0);
    const t = setInterval(
      () => setSlide((s) => (s + 1) % industry.slides.length),
      5000
    );
    return () => clearInterval(t);
  }, [open, industry.slides.length]);

  const active = industry.slides[slide];
  const activePersona =
    industry.personas.find((p) => p.name === active.agent) ??
    industry.personas[0];
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      // Hover in → open the carousel; hover out → back to the initial card.
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onClick={open ? onClose : undefined}
      className={cx(
        "relative flex min-h-[32rem] flex-col overflow-hidden rounded-3xl transition-all duration-500",
        open
          ? // No bounding card while open, the carousel floats on the page.
            "card-open"
          : "grain-card border bg-gradient-to-b from-surface to-ink"
      )}
    >
      {/* ---------- At rest: dull persona portrait(s) ---------- */}
      {!open && (
        <div
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={(e) => e.key === "Enter" && onOpen()}
          aria-expanded={false}
          className="group relative flex h-full w-full cursor-pointer flex-col p-8 text-left"
        >
          {/* audience chips, top centre */}
          <span className="relative z-10 flex flex-wrap justify-center gap-2">
            {industry.audience.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1 text-xs italic text-bone/85 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </span>

          {/* personas, pixel art + fancy names, centre stage */}
          <span className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 py-6">
            <span className="flex items-end justify-center gap-6">
              {industry.personas.map((p) => (
                <PersonaArt
                  key={p.name}
                  persona={p}
                  active={false}
                  className={
                    industry.personas.length > 1 ? "h-32 sm:h-36" : "h-40 sm:h-44"
                  }
                />
              ))}
            </span>
            <span className="flux-text font-display text-3xl font-bold italic tracking-tight">
              {industry.personas.map((p) => p.name).join(" & ")}
            </span>
          </span>

          {/* big name + arrow, anchored low */}
          <span className="relative z-10 flex items-end gap-2">
            <span className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              {industry.name}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              className="mb-1.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M5 17 17 5M8 5h9v9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* bottom row: live status */}
          <span className="relative z-10 mt-5 flex items-center gap-2 text-xs text-bone/80">
            <span className="live-dot" aria-hidden />
            Live
          </span>
        </div>
      )}

      {/* ---------- Open: use-case slides ---------- */}
      {open && (
        <div className="relative flex h-full w-full flex-col p-8">
          {/* rounded persona avatar, top-left of the container */}
          {active.art && (
            <span
              className="absolute left-5 top-5 z-20 grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-line bg-surface-2"
              title={activePersona.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePersona.art}
                alt={`${activePersona.name} avatar`}
                draggable={false}
                className="pixelated h-9 w-auto select-none"
              />
            </span>
          )}

          <div className="relative z-10 flex flex-wrap justify-center gap-2">
            {industry.audience.map((chip) => (
              <span key={chip} className="text-xs italic text-bone/70">
                {chip}
              </span>
            ))}
          </div>

          {/* per-stage art (greyed), or the persona for cards without stage art */}
          <div className="relative z-10 my-auto flex flex-col items-center py-6 text-center">
            {active.art ? (
              // Fixed square stage so the carousel never shifts; the icon
              // keeps its native frame aspect inside it.
              <span
                key={`stage-${slide}`}
                className="slide-fade grid h-24 w-24 place-items-center"
                aria-hidden
              >
                <span
                  className="select-none opacity-50 brightness-90 grayscale"
                  style={{
                    aspectRatio: `${active.art.w} / ${active.art.h}`,
                    ...(active.art.h >= active.art.w
                      ? { height: "100%" }
                      : { width: "100%" }),
                    backgroundImage: `url(${active.art.src})`,
                    backgroundSize: `${active.art.frames * 100}% 100%`,
                    backgroundPositionX: "0%",
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated",
                    display: "block",
                  }}
                />
              </span>
            ) : (
              <PersonaArt
                key={`art-${activePersona.name}`}
                persona={activePersona}
                active
                className="slide-fade h-28"
              />
            )}
            <p
              key={slide}
              className="slide-fade mx-auto mt-6 max-w-xs font-display text-2xl font-medium leading-snug text-bone"
            >
              {active.text}
            </p>
            {!active.art && active.agent && (
              <p className="slide-fade mt-3 flux-text font-display text-lg font-bold italic">
                {active.agent}
              </p>
            )}
          </div>

          {/* dots */}
          <div className="relative z-10 flex justify-center gap-2.5">
            {industry.slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Use case ${i + 1}`}
                onClick={(e) => {
                  stop(e);
                  setSlide(i);
                }}
                className="grid h-4 w-4 place-items-center"
              >
                <span
                  className="h-2 w-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === slide ? accent : "var(--color-line)",
                    transform: i === slide ? "scale(1.25)" : "none",
                  }}
                />
              </button>
            ))}
          </div>

          {/* CTAs, learn (follows active slide) + act */}
          <div className="relative z-10 mt-7 flex flex-col items-center gap-4">
            <Link
              href={active.href}
              onClick={stop}
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: accent }}
            >
              Learn more
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]/60"
                aria-hidden
              />
            </Link>
            <Link
              href={industry.actHref}
              onClick={stop}
              className="text-sm font-medium text-bone underline-offset-4 hover:underline"
            >
              {industry.actLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
