import type { Metadata } from "next";

import { ProductSection, TestimonialsSection } from "@/components/home-sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "PocketBill",
  description: "Discover PocketBill, the smart billing and business management software from FrontWebTech."
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="PocketBill"
        title="Smarter billing, inventory, and business operations in one focused product"
        description="PocketBill helps shops and businesses manage billing, printing, inventory, orders, customers, and reports through a modern operational dashboard."
      />
      <ProductSection />
      <TestimonialsSection />
    </>
  );
}
