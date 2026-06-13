import { Section } from "@/components/ui/Primitives";
import { TrackedLink } from "@/components/site/TrackedLink";

export function CTA() {
  return (
    <Section className="pb-16 pt-24 lg:pb-24 lg:pt-32">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-surface/80 to-ink/60 p-10 text-center shadow-[0_0_80px_-20px_var(--color-primary)] backdrop-blur-xl sm:p-16">
        {/* Workshop watermarks: the tool and the AI star, floating greyscale
            on either side of the card */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/agent-hero/tool-hammer.svg"
          alt=""
          draggable={false}
          aria-hidden
          className="persona-float pointer-events-none absolute select-none"
          style={{
            left: "3rem",
            bottom: "3rem",
            height: "8rem",
            width: "auto",
            opacity: 0.14,
            filter: "grayscale(1) brightness(1.6)",
            imageRendering: "pixelated",
            transform: "rotate(-8deg)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/agent-hero/tool-star.svg"
          alt=""
          draggable={false}
          aria-hidden
          className="persona-float pointer-events-none absolute select-none"
          style={{
            right: "3.5rem",
            top: "3rem",
            height: "7rem",
            width: "auto",
            opacity: 0.14,
            filter: "grayscale(1) brightness(1.7)",
            imageRendering: "pixelated",
            animationDelay: "-2.1s",
          }}
        />
        <h2 className="relative font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="flux-text">Ready to Ship?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Stop chatting about AI and start deploying agents that actually run the work.
        </p>
        <div className="mt-10 flex justify-center">
          <TrackedLink
            href="/#contact"
            event="clicked-cta"
            eventProps={{ label: "Book your demo", destination: "/#contact", location: "global-cta" }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_var(--color-primary)]"
          >
            Book your demo
          </TrackedLink>
        </div>
      </div>
    </Section>
  );
}
