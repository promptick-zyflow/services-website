import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Primitives";
import { AgentMarket } from "@/components/agents/AgentMarket";
import { Contact } from "@/components/home/Contact";
import { SectionView } from "@/components/site/SectionView";

export const metadata: Metadata = {
  title: "Agent Marketplace",
  description:
    "Meet the Zyflow agent roster, ready-made deep agents for lending, project management and social media, with more in the lab.",
  alternates: { canonical: "/agents" },
};

export default function AgentsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <Section view="agents-hero" className="relative py-20 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Agent marketplace</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              Meet all the <span className="flux-text">agents.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Every agent in the roster, by industry and collection. The live
              ones run real workflows in production today; the lab is what
              hardens next.
            </p>
          </div>
        </Section>
      </section>

      <SectionView name="agent-market"><AgentMarket /></SectionView>

      <Contact
        defaultInterest="Agents"
        heading="Want an agent for your workflow?"
        blurb="Book a demo and we'll run one of your real cases through the closest agent, or scope the bespoke one your industry is missing."
      />
    </>
  );
}
