import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ValueProps } from "@/components/home/ValueProps";
import { Industries } from "@/components/home/Industries";
import { Services } from "@/components/home/Services";
import { Outcomes } from "@/components/home/Outcomes";
import { Process } from "@/components/home/Process";
import { Company } from "@/components/home/Company";
import { Contact } from "@/components/home/Contact";
import { SectionView } from "@/components/site/SectionView";

// Narrative arc (ai71-style): who we are → the industry split (lending /
// partnerships / social media, agents within each) → bridge into services →
// how it works → proof → engagement → company → CTA.
export default function Home() {
  return (
    <>
      <SectionView name="hero"><Hero /></SectionView>
      <SectionView name="marquee"><Marquee /></SectionView>
      <SectionView name="value-props"><ValueProps /></SectionView>
      <SectionView name="industries"><Industries /></SectionView>
      <SectionView name="services"><Services /></SectionView>
      <SectionView name="outcomes"><Outcomes /></SectionView>
      <SectionView name="process"><Process /></SectionView>
      <SectionView name="company"><Company /></SectionView>
      <SectionView name="contact"><Contact /></SectionView>
    </>
  );
}
