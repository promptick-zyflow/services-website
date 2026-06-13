import type { Metadata } from "next";
import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { TrackedLink } from "@/components/site/TrackedLink";
import { SectionView } from "@/components/site/SectionView";
import { LendingFunnel } from "@/components/visuals/LendingFunnel";
import { Contact } from "@/components/home/Contact";
import { getAgent } from "@/lib/agents";

const agent = getAgent("loan-broker")!;

export const metadata: Metadata = {
  title: "AI Loan Broker & Lender Agent",
  description:
    "Sterling turns a 4–6 hour pre-submission workflow into 15–20 minutes: document parsing, Companies House enrichment, product detection, decline screening and a lender-ready case pack. It recommends; you decide.",
  alternates: { canonical: "/agents/lending" },
};

export default function LoanBrokerPage() {
  return (
    <>
      <SectionView name="agent-hero"><Hero /></SectionView>
      <SectionView name="problem"><Problem /></SectionView>
      <SectionView name="how-it-works"><HowItWorks /></SectionView>
      <SectionView name="capabilities"><Capabilities /></SectionView>
      <SectionView name="case-pack"><CasePack /></SectionView>
      <SectionView name="audience"><Audience /></SectionView>
      <SectionView name="trust"><Trust /></SectionView>
      <SectionView name="engagement"><Engagement /></SectionView>
      <Contact
        defaultInterest="Loan broker agent"
        heading="See Sterling run one of your real cases."
        blurb="Book a demo and we'll process a sample application end-to-end, so you can judge the case pack, the screening and the time saved on your own deals."
      />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-citron/10 blur-3xl" />
      <Section className="relative grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div>
          <TrackedLink
            href="/#agents"
            event="clicked-nav-link"
            eventProps={{ label: "← Zyflow agents", destination: "/#agents", location: "agent-hero" }}
            className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-muted"
          >
            ← Zyflow agents
          </TrackedLink>
          <p className="mt-6 font-mono text-sm text-citron">
            codename: {agent.codename} · {agent.domain}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Lender-ready cases,
            <br />
            <span className="flux-text">in minutes not hours.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Sterling runs a broker&rsquo;s entire pre-submission workflow
            autonomously, enriching financials, detecting the right products,
            screening against lender rules and chasing missing documents. You
            get a submission-ready case pack. It recommends; you always decide.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              Book a demo
            </Button>
            <Button href="#how" variant="line">
              How it works
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            {[
              { v: "15–20 min", l: "per case, vs. 4–6 hrs manual" },
              { v: "5 products", l: "auto-detected per deal" },
              { v: "Recommends", l: "never decides for you" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold">{s.v}</dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col items-center gap-10 lg:items-end">
          {/* Sterling's brand persona, idling above the funnel */}
          <div className="persona-float relative">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-citron/30 blur-3xl"
              aria-hidden
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agents/sterling.svg"
              alt="Sterling pixel-art persona"
              draggable={false}
              className="pixelated relative select-none"
              style={{
                height: "9rem",
                width: "auto",
                filter:
                  "drop-shadow(0 6px 14px color-mix(in srgb, var(--color-citron) 35%, transparent))",
              }}
            />
          </div>
          <LendingFunnel />
        </div>
      </Section>
    </section>
  );
}

/* ---------------- Problem ---------------- */
function Problem() {
  return (
    <Section className="py-20">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The deal is won on speed. The admin kills it.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Every commercial case means the same grind: reading bank statements
            and accounts, looking up the company, working out which lender
            products fit, checking decline criteria, and emailing the borrower
            for the three documents they forgot. It&rsquo;s 4–6 hours of skilled
            work per file, and it&rsquo;s the bottleneck between a hot enquiry
            and a submitted case.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- How it works ---------------- */
const lifecycle = [
  { k: "Intake", d: "The borrower's application and documents land by email. Sterling reads and structures them automatically." },
  { k: "Detection", d: "It works out which of the lending products the deal fits, including multi-facility scenarios." },
  { k: "Enrichment", d: "Company financials are pulled from Companies House and attached to the case." },
  { k: "Screening", d: "The deal is checked against each lender's decline rules before it ever goes out." },
  { k: "Case pack", d: "A structured, submission-ready summary is staged for your review and sign-off." },
];

function HowItWorks() {
  return (
    <Section id="how" className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          One application in. A lender-ready case out.
        </h2>
      </div>
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {lifecycle.map((s, i) => (
          <Reveal as="li" key={s.k} i={i} className="relative bg-surface p-6">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-citron/40 font-mono text-xs text-citron">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{s.k}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{s.d}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Capabilities ---------------- */
const caps = [
  {
    icon: "doc",
    t: "Document processing",
    d: "Bank statements, filed accounts, ID and credit reports parsed and structured, no manual data entry.",
  },
  {
    icon: "search",
    t: "Companies House enrichment",
    d: "Company lookups and financials pulled automatically and attached to the case.",
  },
  {
    icon: "layers",
    t: "Product & facility detection",
    d: "The right lending products matched to each deal, including blended multi-facility structures.",
  },
  {
    icon: "shield",
    t: "Decline-rule screening",
    d: "Configurable lender criteria, turnover, sector, purpose, credit, checked before submission.",
  },
  {
    icon: "mail",
    t: "Automated borrower comms",
    d: "Sterling chases the missing documents and clarifications, so you don't have to.",
  },
  {
    icon: "chart",
    t: "Pipeline visibility",
    d: "Every case and its status in one view, what's ready, what's waiting, what's at risk.",
  },
];

function Capabilities() {
  return (
    <Section className="py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Everything between enquiry and submission.
          </h2>
        </div>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c, i) => (
          <Reveal key={c.t} i={i % 3} className="group bg-surface p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink text-citron transition-colors group-hover:border-citron/40">
              <Icon name={c.icon} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Sample case pack ---------------- */
function CasePack() {
  const rows = [
    ["Borrower", "ACME Trading Ltd · est. 2014"],
    ["Facility detected", "SME term loan + bridging (blended)"],
    ["Companies House", "Filings & accounts attached ✓"],
    ["Decline screening", "Passed · 0 flags against lender criteria"],
    ["Outstanding docs", "None, borrower chased & complete"],
    ["Recommendation", "Submit to Lender A · broker to confirm"],
  ];
  return (
    <Section className="py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A case pack you can actually submit.
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Not a chat transcript, a structured summary with the financials,
            the product fit, the screening result and a clear recommendation.
            Every claim is backed by the source document, so you can trust it at
            a glance and sign off in minutes.
          </p>
          <p className="mt-6 max-w-md text-sm text-faint">
            Sterling never makes the lending decision. It does the legwork and
            hands you a defensible recommendation, the call is always yours.
          </p>
        </div>
        <Reveal>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-faint">
                Case summary
              </span>
              <span className="rounded-full bg-citron/15 px-3 py-1 text-xs text-citron">
                Ready for review
              </span>
            </div>
            <dl className="divide-y divide-line">
              {rows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-start justify-between gap-6 px-6 py-4"
                >
                  <dt className="text-sm text-faint">{k}</dt>
                  <dd className="text-right text-sm font-medium text-bone">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- Audience + testimonial ---------------- */
const icps = [
  "Solo & specialist brokers",
  "Growing brokerages",
  "Multi-product firms",
  "Specialist packagers",
  "Lender BDM teams",
];

function Audience() {
  return (
    <Section className="py-24">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-surface to-ink/60 p-8 sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Built for UK commercial lending.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {icps.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-line bg-ink/50 px-4 py-2 text-sm text-muted"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative rounded-2xl border border-line bg-ink/40 p-8">
            <span
              className="absolute left-6 top-3 font-display text-6xl text-citron/20"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="relative text-lg leading-relaxed text-bone">
              The case packs come back so complete that submitting is almost an
              afterthought. We&rsquo;re turning enquiries around the same day
              instead of end of week.
            </blockquote>
            <figcaption className="mt-6 text-sm text-faint">
             , Director, commercial finance brokerage{" "}
              <span className="text-faint/60">(anonymised pilot)</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Trust ---------------- */
const trust = [
  { t: "Recommends, never decides", d: "Sterling stages a recommendation; the lending decision is always the broker's." },
  { t: "Evidence on every claim", d: "Each figure links back to the source document for a defensible audit trail." },
  { t: "Human review gate", d: "Nothing is submitted without your explicit sign-off." },
  { t: "Your data, your control", d: "Documents and case data stay within your controlled environment." },
];

function Trust() {
  return (
    <Section className="py-24">
      <div className="max-w-2xl">
        <Eyebrow>Trust & compliance</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Fast, but accountable.
        </h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {trust.map((t, i) => (
          <Reveal key={t.t} i={i} className="bg-surface p-7">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-citron/10 text-citron">
              <Icon name="shield" />
            </div>
            <h3 className="mt-5 font-display text-base font-semibold leading-snug">
              {t.t}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Engagement ---------------- */
function Engagement() {
  return (
    <Section className="py-24">
      <div className="rounded-3xl border border-line bg-surface/50 p-8 text-center sm:p-14">
        <Eyebrow className="justify-center">Engagement</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Start with a measured pilot.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          We baseline what a case costs your team today, run Sterling against
          real deals for a few weeks, and price the rollout against the hours it
          gives back. No platform lock-in, no big-bang migration.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="#contact" variant="primary">
            Book a scoping call
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Icons ---------------- */
function Icon({ name }: { name: string }) {
  const p = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "doc":
      return (
        <svg {...p}>
          <path d="M14 3v4a1 1 0 001 1h4" />
          <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
          <path d="M9 9h1M9 13h6M9 17h6" />
        </svg>
      );
    case "search":
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "layers":
      return (
        <svg {...p}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...p}>
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 3 3 4-5" />
        </svg>
      );
    default:
      return null;
  }
}
