import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Contact } from "@/components/home/Contact";
import { TrackedEmail } from "@/components/site/TrackedEmail";
import { SectionView } from "@/components/site/SectionView";
import { site } from "@/lib/site";

const locations = [
  {
    country: "United Kingdom",
    entity: "Zyflow Automation Limited",
    lines: ["128 City Road", "London EC1V 2NX", "United Kingdom"],
    note: "Company no. 16685056",
    map: "/agents/nation-uk.svg",
    city: "London",
    // City marker position within the outline image (percent)
    dot: { left: "70%", top: "82%" },
  },
  {
    country: "India",
    entity: "Zyflow Automation Private Limited",
    lines: ["I-524 Beta 2", "Greater Noida, UP 201310", "India"],
    map: "/agents/nation-india.svg",
    city: "New Delhi",
    dot: { left: "34%", top: "30%" },
  },
];

function Locations() {
  return (
    <Section className="py-20">
      <Eyebrow>Where we are</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        Two sites. One team.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {locations.map((loc, i) => (
          <Reveal key={loc.country} i={i}>
            <div className="flex h-full min-h-[14rem] items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-8">
              <div>
                <p className="eyebrow">{loc.country}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {loc.entity}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {loc.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                {loc.note && (
                  <p className="mt-3 font-mono text-xs text-faint">{loc.note}</p>
                )}
              </div>

              {/* nation outline, fully visible, with the office city marked */}
              <div className="relative shrink-0" style={{ height: "10.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={loc.map}
                  alt={`${loc.country} outline`}
                  draggable={false}
                  className="h-full w-auto select-none opacity-50"
                />
                <span
                  className="absolute"
                  style={{ left: loc.dot.left, top: loc.dot.top }}
                  title={loc.city}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the workflow that hurts. We'll map it in a free scoping workshop and show you where a deep agent, or our services team, pays off.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <Section view="contact-hero" className="relative pt-24 lg:pt-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              Let&rsquo;s put an agent{" "}
              <span className="flux-text">to work.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Tell us about your goals or the workflow that hurts. We&rsquo;ll
              come back within a day, usually with a scoping-workshop slot.
              Prefer email?{" "}
              <TrackedEmail
                email={site.email}
                location="contact-page"
                className="text-bone underline underline-offset-4 hover:text-citron"
              >
                {site.email}
              </TrackedEmail>
            </p>
          </div>
        </Section>
      </section>
      <SectionView name="locations"><Locations /></SectionView>
      <Contact
        heading="Start with a free scoping workshop."
        blurb="We'll map one high-friction workflow, baseline what it costs you today, and show you exactly where a deep agent pays off, whether or not you proceed."
      />
    </>
  );
}
