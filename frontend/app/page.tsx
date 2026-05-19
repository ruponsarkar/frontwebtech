import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfolioSection,
  ProductSection,
  ServicesSection,
  StatisticsSection,
  TestimonialsSection,
  WhyChooseUsSection
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <ContactSection />
    </>
  );
}
