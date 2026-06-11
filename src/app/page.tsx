import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ValueProps } from "@/components/home/ValueProps";
import { AgentsRoster } from "@/components/home/AgentsRoster";
import { Services } from "@/components/home/Services";
import { Outcomes } from "@/components/home/Outcomes";
import { Process } from "@/components/home/Process";
import { Company } from "@/components/home/Company";
import { Contact } from "@/components/home/Contact";

// Narrative arc (ai71-style): who we are → the agents (Sterling first) →
// bridge into services → how it works → proof → engagement → company → CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProps />
      <AgentsRoster />
      <Services />
      <Outcomes />
      <Process />
      <Company />
      <Contact />
    </>
  );
}
