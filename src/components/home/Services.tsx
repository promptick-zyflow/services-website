import { Section, Eyebrow, Button } from "@/components/ui/Primitives";
import { ServicesSystem } from "@/components/visuals/ServicesSystem";

export function Services() {
  return (
    <Section id="services" className="py-28">
      {/* Pillar bridge — agents are one half, services the other */}
      <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
        Two halves of one company — autonomous agents that own the work, and
        the AI services &amp; development to put it all to work.
      </p>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>AI Services · For every team</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Services that make your whole company AI-enabled.
          </h2>
        </div>
        <Button href="/services" variant="line">
          Explore services
        </Button>
      </div>

      <div className="mt-14">
        <ServicesSystem />
      </div>
    </Section>
  );
}
