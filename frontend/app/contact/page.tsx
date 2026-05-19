import type { Metadata } from "next";

import { ContactSection } from "@/components/home-sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FrontWebTech for website development, software projects, mobile apps, digital solutions, or a PocketBill demo."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build, launch, or improve"
        description="Whether you need a premium business website, a custom software platform, a mobile application, or a PocketBill demo, FrontWebTech is ready to help."
      />
      <ContactSection />
    </>
  );
}
