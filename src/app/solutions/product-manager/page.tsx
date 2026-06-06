import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { SpecTransform } from "@/components/visuals/SpecTransform";
import {
  LandingHero,
  Banner,
  StepFlow,
  BenefitCards,
  FeatureSplit,
  CapabilityGrid,
  EngagementBand,
} from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "AI Product Manager Agent",
  description:
    "Atlas turns vague ideas into production-ready specs in minutes: structured PRDs, user stories, and acceptance criteria with edge cases. It asks the sharp question instead of guessing, and marks proposals PROPOSED until a human confirms.",
  alternates: { canonical: "/solutions/product-manager" },
};

export default function ProductManagerPage() {
  return (
    <>
      <LandingHero
        codename="Atlas"
        domain="Requirements & specs"
        accent="citron"
        title={
          <>
            Vague idea in.
            <br />
            <span className="flux-text">Production-ready spec out.</span>
          </>
        }
        subhead="Atlas reads a thin ticket and drafts a well-formed requirement — problem, scope, MVP, acceptance criteria, success metrics — or asks the sharp clarifying questions that close the gap. It never fabricates: proposals are marked PROPOSED until a human confirms."
        stats={[
          { v: "30–50%", l: "of PM time is spec-writing" },
          { v: "Minutes", l: "idea → structured PRD" },
          { v: "PROPOSED", l: "never guesses, marks it" },
        ]}
        visual={<SpecTransform />}
      />

      <Banner
        heading="The hardest part of a feature is writing down what it actually is."
        body="Translating a hallway conversation into a PRD — with a clear problem, a bounded scope, user stories and unambiguous acceptance criteria — is high-cognitive-load work. It's where features get vague, where engineers and stakeholders quietly disagree, and where half a PM's week disappears."
      />

      <StepFlow
        id="how"
        eyebrow="How it works"
        heading="Three steps from notes to a spec your team can build."
        steps={[
          { k: "Describe", d: "Paste your notes, a thin ticket, or a few lines of intent. Messy is fine." },
          { k: "Structure", d: "Atlas drafts a PRD: problem, scope, MVP, user stories and acceptance criteria — flagging what it had to assume." },
          { k: "Confirm & export", d: "You review, answer any batched questions, and push the spec to Linear, Jira or GitHub." },
        ]}
      />

      <FeatureSplit
        eyebrow="Sample output"
        heading="A real transformation, not a longer prompt."
        body="Atlas doesn't hand you a wall of prose. It produces a structured requirement with a bounded scope, decomposed user stories, and acceptance criteria that include the edge cases — the document an engineer can pick up and build from without a follow-up meeting."
        note="Anything it can't infer is marked PROPOSED and surfaced as a question — so the gaps are explicit, never silently invented."
        visual={<SpecTransform />}
        reverse
      />

      <BenefitCards
        eyebrow="Who it's for"
        heading="One agent, three kinds of relief."
        cards={[
          { who: "Founders", icon: "rocket", benefit: "Go from a napkin idea to a spec your first engineers can build — without hiring a PM yet." },
          { who: "Product managers", icon: "pen", benefit: "Kill the blank-page problem and keep every spec consistent, so reviews are about the product, not the formatting." },
          { who: "Engineering teams", icon: "code", benefit: "Receive clear, unambiguous acceptance criteria with the edge cases already considered — fewer mid-sprint surprises." },
        ]}
      />

      <CapabilityGrid
        eyebrow="Capabilities"
        heading="Requirements engineering, done properly."
        items={[
          { icon: "search", t: "Requirements gathering", d: "Pulls structure out of chat, notes and thin tickets — and asks when intent is unclear." },
          { icon: "doc", t: "Structured PRDs", d: "Problem, scope, MVP, success metrics — a consistent shape every time." },
          { icon: "list", t: "User-story decomposition", d: "Breaks the work into stories an engineer can estimate and own." },
          { icon: "check", t: "Acceptance criteria", d: "Testable criteria that include the edge cases, not just the happy path." },
          { icon: "shield", t: "Anti-fabrication", d: "Marks assumptions PROPOSED and routes open questions instead of guessing." },
          { icon: "plug", t: "Export anywhere", d: "Pushes finished specs to Linear, Jira and GitHub in the right format." },
        ]}
      />

      {/* Differentiator / FAQ */}
      <FeatureSplit
        eyebrow="Why not just a chatbot?"
        heading="A generic AI will happily make things up. Atlas won't."
        body="Ask a general chatbot for a spec and it produces something plausible — including details it invented, with no signal about what's real. Atlas is built for requirements: it holds a consistent PRD structure, it distinguishes what you said from what it assumed, and it gates a spec as ready only when the requirement is genuinely knowable."
        note="This very page started as a three-line ticket. Atlas turned it into the requirement we built from."
        visual={
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-4 text-sm">
              {[
                ["Generic chatbot", "Confident prose, invented details, no structure you can rely on."],
                ["Atlas", "Consistent PRD, assumptions flagged, gated spec-ready — built to be trusted."],
              ].map(([k, v], i) => (
                <li key={k} className="flex gap-4">
                  <span
                    className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${
                      i === 1
                        ? "bg-citron/15 text-citron"
                        : "bg-surface-2 text-faint"
                    }`}
                  >
                    {i === 1 ? "✓" : "~"}
                  </span>
                  <div>
                    <p className="font-medium text-bone">{k}</p>
                    <p className="text-muted">{v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <EngagementBand
        heading="Run Atlas on your next five tickets."
        body="Bring real, half-formed requests. We'll have Atlas turn them into specs your engineers can build from — and you judge the quality against what your team produces today."
        cta="Try Atlas on your backlog"
      />

      <Contact
        defaultInterest="Product manager agent"
        heading="Turn your backlog into buildable specs."
        blurb="Book a demo and we'll run Atlas on a few of your real tickets — so you can see the PRDs, the clarifying questions and the export into your tracker."
      />
    </>
  );
}
