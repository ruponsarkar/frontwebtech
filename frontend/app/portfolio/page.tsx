import type { Metadata } from "next";

import { PortfolioSection, TestimonialsSection } from "@/components/home-sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View sample software, website, mobile app, and operations platform projects by FrontWebTech."
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A portfolio shaped around business goals, software quality, and product clarity"
        description="These showcase cards represent the kinds of business systems and digital products FrontWebTech is positioned to deliver for modern clients."
      />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
