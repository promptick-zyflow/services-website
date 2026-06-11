import type { Metadata } from "next";
import { Section } from "@/components/ui/Primitives";
import { Contact } from "@/components/home/Contact";
import { ScopingMock } from "@/components/visuals/ScopingMock";
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
        <div className="drift-a pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-citron/10 blur-3xl" />
        <div className="drift-b pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-glacier/10 blur-3xl" />
        <Section className="relative grid gap-14 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-32">
          <div>
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
          <div className="hidden justify-center lg:flex lg:justify-end">
            <ScopingMock />
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
