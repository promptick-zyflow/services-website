import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ValueProps } from "@/components/home/ValueProps";
import { AgentsRoster } from "@/components/home/AgentsRoster";
import { Orchestration } from "@/components/home/Orchestration";
import { Outcomes } from "@/components/home/Outcomes";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProps />
      <AgentsRoster />
      <Orchestration />
      <Outcomes />
      <Process />
      <Contact />
    </>
  );
}
