import type { Metadata } from "next";
import { Section } from "@/components/ui/Primitives";
import { Contact } from "@/components/home/Contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the workflow that hurts. We'll map it in a free scoping workshop and show you where a deep agent — or our services team — pays off.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <Section className="relative pt-24 lg:pt-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              Let&rsquo;s put an agent{" "}
              <span className="flux-text">to work.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Tell us about your goals or the workflow that hurts. We&rsquo;ll
              come back within a day — usually with a scoping-workshop slot.
              Prefer email?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-bone underline underline-offset-4 hover:text-citron"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Section>
      </section>
      <Contact
        heading="Start with a free scoping workshop."
        blurb="We'll map one high-friction workflow, baseline what it costs you today, and show you exactly where a deep agent pays off — whether or not you proceed."
      />
    </>
  );
}
