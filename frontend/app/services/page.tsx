import type { Metadata } from "next";

import { ContactSection, ServicesSection, WhyChooseUsSection } from "@/components/home-sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore FrontWebTech services including website development, custom software, mobile apps, UI/UX, e-commerce, and cloud integrations."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services for startups, enterprises, and growing digital businesses"
        description="From websites and custom software to mobile applications and cloud integrations, FrontWebTech delivers product-focused solutions built for performance and scale."
      />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
