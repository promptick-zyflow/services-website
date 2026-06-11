import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { BoardMock } from "@/components/visuals/BoardMock";
import {
  LandingHero,
  Banner,
  StepFlow,
  CapabilityGrid,
  Integrations,
  Quote,
  EngagementBand,
} from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "AI Project Management Agent",
  description:
    "Steward is an always-on project manager that runs your delivery board: org-wide sync, complete metadata, velocity and burndown, and risk escalated before deadlines slip. Works with GitHub Projects, Linear and Jira.",
  alternates: { canonical: "/agents/delivery" },
};

export default function ProjectManagementPage() {
  return (
    <>
      <LandingHero
        codename="Steward"
        domain="Delivery & operations"
        accent="glacier"
        title={
          <>
            The project manager
            <br />
            <span className="flux-text">that never sleeps.</span>
          </>
        }
        subhead="Steward owns your delivery board end-to-end. Every hour it syncs your repos, enforces complete metadata, tracks velocity and burndown, and escalates risk before a deadline slips. It doesn't build the work — it makes sure the work ships."
        stats={[
          { v: "Hourly", l: "board health sweeps" },
          { v: "Org-wide", l: "every repo, one board" },
          { v: "0 chasing", l: "status updates, automated" },
        ]}
        visual={<BoardMock />}
      />

      <Banner
        heading="Delivery doesn't fail loudly. It drifts."
        body="An estimate never gets filled in. An owner quietly changes. A blocker sits for a week. By the time it surfaces in a status meeting, the sprint is already off. The overhead of keeping a board honest — and reading the early-warning signs — is a full-time job nobody actually has time for."
      />

      <StepFlow
        id="how"
        eyebrow="How it works"
        accent="glacier"
        heading="A board that keeps itself honest."
        steps={[
          { k: "Sync", d: "Every repo and issue is pulled onto one board — nothing lives in a silo." },
          { k: "Enforce", d: "Each item gets a complete set of fields: owner, estimate, priority, iteration, status." },
          { k: "Track", d: "Velocity, burndown and capacity are computed continuously, not at sprint's end." },
          { k: "Flag", d: "Missing data, overdue and stalled items are detected and surfaced automatically." },
          { k: "Escalate", d: "Real risk is routed to the owner with context — before it becomes a slip." },
        ]}
      />

      <CapabilityGrid
        eyebrow="Capabilities"
        accent="glacier"
        heading="Everything a good PM does — every hour."
        items={[
          { icon: "board", t: "Org-wide board sync", d: "Every repo and issue ingested into a single source of truth, kept current automatically." },
          { icon: "list", t: "Metadata enforcement", d: "Owner, estimate, priority, iteration and status filled in — or flagged when they're not." },
          { icon: "link", t: "Dependencies & critical path", d: "Cross-item dependencies tracked so the path to done stays visible." },
          { icon: "gauge", t: "Velocity & burndown", d: "Capacity, throughput and burndown computed live — no manual reporting." },
          { icon: "bell", t: "Risk & overdue alerts", d: "Stalled, overdue and at-risk work detected early and escalated with context." },
          { icon: "chart", t: "Automated summaries", d: "A standing read of board health, delivered where your team already works." },
        ]}
      />

      <Integrations
        heading="Runs on the boards you already use"
        items={["GitHub Projects", "Linear", "Jira", "Asana", "Notion", "Webhook / API"]}
      />

      <Quote
        accent="glacier"
        quote="It's like having a PM who actually reads every ticket, every hour, and only pings you when something genuinely needs a decision."
        attribution="Engineering lead · multi-repo product team (anonymised pilot)"
      />

      <EngagementBand
        heading="Point Steward at your board for two weeks."
        body="We connect it to your real repos in read-first mode, baseline your current board health, and show you the risk it surfaces before any deadline moves. Expand only when it's earning its keep."
      />

      <Contact
        defaultInterest="Project management agent"
        heading="Let Steward run your delivery board."
        blurb="Book a demo and we'll wire Steward into a sample of your repos — so you can see the sync, the risk flags and the velocity tracking on your own work."
      />
    </>
  );
}
