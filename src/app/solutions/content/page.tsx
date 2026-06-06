import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { ContentLoop } from "@/components/visuals/ContentLoop";
import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/ui/Icon";
import {
  LandingHero,
  Banner,
  BenefitCards,
  CapabilityGrid,
  Integrations,
  Quote,
  EngagementBand,
} from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "AI Content Director & Creator Agents",
  description:
    "A two-agent content engine: a Director sets strategy, calendar and brand voice; a Creator produces articles, social, email and video on a single deterministic plan. Every output passes a quality gate before it ships.",
  alternates: { canonical: "/solutions/content" },
};

const director = [
  "Content strategy & positioning",
  "Editorial calendar planning",
  "Brand-voice definition & enforcement",
  "Topic & angle ideation",
  "Performance analysis",
  "Editorial review & sign-off",
];

const creator = [
  "Long-form articles & blogs",
  "Social posts, threads & captions",
  "Email campaigns & newsletters",
  "Ad copy & landing copy",
  "Social-native video & scripts",
  "SEO-optimised long-form",
];

export default function ContentPage() {
  return (
    <>
      <LandingHero
        codename="Nova"
        domain="Content at scale"
        accent="spark"
        title={
          <>
            An enterprise content engine,
            <br />
            <span className="flux-text">run by two agents.</span>
          </>
        }
        subhead="A Director sets the strategy, calendar and brand voice. A Creator produces the work — from long-form to social-native video — on a single deterministic plan. Every piece passes a quality gate before it ships, with your team in the loop."
        stats={[
          { v: "Two agents", l: "strategy + production" },
          { v: "One voice", l: "brand consistency, enforced" },
          { v: "QA-gated", l: "nothing ships unreviewed" },
        ]}
        visual={<ContentLoop />}
      />

      <Banner
        heading="Content breaks at the seam between strategy and execution."
        body="Strategy lives in one head, production in another. Brand voice drifts the moment volume goes up, freelancers come and go, and the calendar slips. Scaling output usually means scaling the inconsistency with it — louder, but not better."
      />

      {/* Two-agent profiles */}
      <Section id="how" className="py-24">
        <div className="max-w-2xl">
          <Eyebrow>The model</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Two specialists, one engine.
          </h2>
          <p className="mt-6 text-muted">
            Not one generalist trying to do everything — a Director that owns the
            plan and the brand, and a Creator that executes against it. The
            Director reviews what the Creator makes, so quality scales with
            volume instead of fighting it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {[
            { role: "Content Director", icon: "target", caps: director, note: "Owns the what & the why" },
            { role: "Content Creator", icon: "pen", caps: creator, note: "Owns the how & the make" },
          ].map((a, i) => (
            <Reveal key={a.role} i={i}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-spark/10 blur-3xl" />
                <div className="relative flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-ink text-spark">
                    <Icon name={a.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{a.role}</h3>
                    <p className="font-mono text-xs text-faint">{a.note}</p>
                  </div>
                </div>
                <ul className="relative mt-7 grid gap-3 sm:grid-cols-2">
                  {a.caps.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spark/70" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <BenefitCards
        eyebrow="Use cases"
        accent="spark"
        heading="Where the engine earns its keep."
        cards={[
          { who: "Marketing teams", icon: "megaphone", benefit: "Run campaigns at scale without diluting the brand — strategy and output stay in sync." },
          { who: "Agencies", icon: "users", benefit: "Produce white-label content for multiple clients, each with its own enforced voice." },
          { who: "Internal comms", icon: "mail", benefit: "Keep newsletters, announcements and updates consistent, on-message and on-time." },
        ]}
      />

      <CapabilityGrid
        eyebrow="Quality guarantees"
        accent="spark"
        heading="Volume you can actually publish."
        items={[
          { icon: "palette", t: "Brand-voice consistency", d: "A defined voice the Creator writes to and the Director enforces — every piece, every channel." },
          { icon: "shield", t: "Original & checked", d: "Plagiarism-free output, fact-reviewed before it reaches you." },
          { icon: "search", t: "SEO built in", d: "Long-form structured for search intent, not bolted on after the fact." },
          { icon: "film", t: "Deterministic production", d: "Video and rich media run from a single plan, so output is repeatable — not a slot-machine pull." },
          { icon: "check", t: "Human in the loop", d: "Review and approval gates wherever you want them — you sign off before publish." },
          { icon: "loop", t: "A learning loop", d: "Performance feeds back into strategy, so the next cycle is sharper than the last." },
        ]}
      />

      <Integrations
        heading="Publishes into the stack you already run"
        items={["WordPress", "Webflow", "Social schedulers", "Email platforms", "Notion", "Webhook / API"]}
      />

      <Quote
        accent="spark"
        quote="We tripled output and the brand actually got tighter, not looser. The review gate is the part that sold our editor."
        attribution="Head of content · B2B marketing team (anonymised pilot)"
      />

      <EngagementBand
        heading="Stand up your content engine on one campaign."
        body="We define your brand voice with the Director, produce a real batch with the Creator, and route it through your review gate — so you can judge the quality and the consistency before scaling it."
        cta="See sample output"
      />

      <Contact
        defaultInterest="Content agents"
        heading="Scale content without losing the brand."
        blurb="Book a demo and we'll define your voice, produce a sample batch, and show you the Director–Creator loop — including the quality gate that runs before anything ships."
      />
    </>
  );
}
