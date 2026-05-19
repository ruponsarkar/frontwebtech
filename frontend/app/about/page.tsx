import type { Metadata } from "next";

import { AboutSection, StatisticsSection, WhyChooseUsSection } from "@/components/home-sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about FrontWebTech, its founders, vision, and approach to premium software and digital product development."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built for businesses that need digital products with substance and polish"
        description="FrontWebTech combines thoughtful design, modern engineering, and practical business understanding to create software that helps companies operate better and grow faster."
      />
      <AboutSection />
      <WhyChooseUsSection />
      <StatisticsSection />
    </>
  );
}
