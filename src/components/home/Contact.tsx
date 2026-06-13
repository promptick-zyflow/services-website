import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/leadform/LeadForm";

export function Contact({
  defaultInterest,
  heading = "Point an agent at your hardest workflow.",
  blurb = "Book a 30-minute scoping call. We'll map one workflow, baseline what it costs you today, and show you exactly where a deep agent pays off.",
}: {
  defaultInterest?: string;
  heading?: string;
  blurb?: string;
}) {
  return (
    <Section id="contact" className="py-28">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-ink/60 p-8 sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-citron/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-glacier/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Get started</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-6 max-w-md text-muted">{blurb}</p>

            <ul className="mt-8 space-y-3">
              {[
                "Free scoping workshop, no commitment",
                "Pilot measured against your own baseline",
                "Human review gates from day one",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-citron/15">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2.5 6.2l2.3 2.3L9.5 3.5"
                        stroke="var(--color-citron)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <LeadForm defaultInterest={defaultInterest} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
