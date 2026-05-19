"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  CalendarRange,
  CircleDollarSign,
  CloudLightning,
  Database,
  Mail,
  MapPin,
  Phone,
  Printer,
  ShoppingBag,
  Sparkles,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

import {
  pocketBillFeatures,
  portfolioProjects,
  services,
  stats,
  testimonials,
  timeline,
  whyChooseUs
} from "@/data/site";

import { AnimatedCounter } from "./animated-counter";
import { FadeIn } from "./animations";
import { SectionHeading } from "./section-heading";
import { Shell } from "./ui/shell";
import { SpotlightCard } from "./ui/spotlight-card";

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(31,166,255,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(245,247,255,0.82))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(31,166,255,0.2),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),_transparent_24%),linear-gradient(180deg,_#050816,_#0a1022)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:42px_42px] opacity-40" />
      <div className="absolute left-8 top-24 -z-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-8 right-10 -z-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/15" />
      <Shell className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-100/70 px-4 py-2 text-sm text-brand-800 backdrop-blur dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-200">
              <Sparkles className="h-4 w-4" />
              Founded in 2026 | Premium Digital Product Studio
            </div>
            <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Building Powerful Digital Solutions for Modern Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              FrontWebTech helps companies grow through high-performance websites, custom software, mobile apps, and business-ready digital systems crafted with precision.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-950"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-300"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              {["Startup-ready systems", "Mobile-first experiences", "Cloud-integrated workflows"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SpotlightCard className="relative min-h-[560px] p-5 sm:p-8">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(87,196,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.18),_transparent_32%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl dark:bg-white dark:text-slate-950">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="whitespace-nowrap text-xs uppercase tracking-[0.3em] text-white/60 dark:text-slate-500">
                        Platform Design
                      </p>
                      <h3 className="mt-3 whitespace-nowrap font-display text-xl font-semibold">
                        Product blueprint
                      </h3>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Responsive UI", "Scalable Flow"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-4 dark:border-slate-200 dark:bg-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mt-4 rounded-[18px] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 p-4 dark:from-brand-200 dark:to-violet-200">
                      <div className="h-3 w-24 rounded-full bg-white/60 dark:bg-slate-400/40" />
                      <div className="mt-3 grid grid-cols-[1.15fr_0.85fr] gap-3">
                        <div className="rounded-[16px] bg-slate-950/25 p-3 dark:bg-white/70">
                          <div className="h-20 rounded-[14px] bg-white/20 dark:bg-white" />
                          <div className="mt-3 flex gap-2">
                            <div className="h-8 flex-1 rounded-2xl bg-white/20 dark:bg-white" />
                            <div className="h-8 w-10 rounded-2xl bg-white/30 dark:bg-white" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="rounded-[16px] bg-white/15 p-3 dark:bg-white">
                            <div className="h-2 w-16 rounded-full bg-white/50 dark:bg-slate-300" />
                            <div className="mt-3 h-10 rounded-2xl bg-white/20 dark:bg-slate-100" />
                          </div>
                          <div className="rounded-[16px] bg-white/15 p-3 dark:bg-white">
                            <div className="h-2 w-20 rounded-full bg-white/50 dark:bg-slate-300" />
                            <div className="mt-3 h-2 w-4/5 rounded-full bg-cyan-400/60 dark:bg-brand-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/60 p-5 shadow-xl backdrop-blur dark:bg-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">Code Delivery</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {["UI", "API", "Cloud", "iOS", "Android", "Data"].map((tag) => (
                      <div
                        key={tag}
                        className="rounded-2xl border border-white/20 bg-white/60 px-3 py-4 text-center text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Research", "User goals mapped"],
                      ["Launch", "Ready for build"]
                    ].map(([title, desc]) => (
                      <div key={title} className="flex items-center justify-between gap-4 rounded-[18px] border border-white/20 bg-white/50 px-4 py-3 dark:bg-white/5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{title}</p>
                          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{desc}</p>
                        </div>
                        <div className="h-2 w-16 rounded-full bg-gradient-to-r from-brand-400 to-cyan-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>
      </Shell>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Shell>
        <SectionHeading
          eyebrow="About FrontWebTech"
          title="A modern software company focused on ambitious digital growth"
          description="FrontWebTech is a modern software company focused on scalable digital products, websites, mobile apps, and enterprise software solutions. The company combines innovation, performance, and user-focused design to help businesses grow digitally."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn>
            <SpotlightCard className="h-full">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                <CalendarRange className="h-4 w-4" />
                ESTD 2026
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Founded by Rupon Sarkar with Nirmali Sarkar as co-founder, FrontWebTech exists to bridge product vision and technical execution for companies that need more than just a basic website.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ["Rupon Sarkar", "Founder & CEO", "Software Engineer leading product strategy, architecture, and engineering delivery."],
                  ["Nirmali Sarkar", "Co-founder", "Supporting growth, operations, and strategic direction across initiatives."]
                ].map(([name, role, desc]) => (
                  <div key={name} className="rounded-[24px] border border-white/10 bg-white/60 p-5 dark:bg-white/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-violet-500 text-lg font-semibold text-slate-950">
                      {name.charAt(0)}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-slate-950 dark:text-white">{name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{role}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {timeline.map((item) => (
                <SpotlightCard key={item.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">{item.year}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </SpotlightCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </Shell>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <Shell>
        <SectionHeading
          eyebrow="Services"
          title="Product engineering and digital solutions designed to move businesses forward"
          description="We deliver polished digital experiences and practical business platforms that blend performance, design, and long-term scalability."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <SpotlightCard className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-violet-500/20 text-brand-600 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

function ProductMockup({ title, icon: Icon, lines }: { title: string; icon: LucideIcon; lines: string[] }) {
  return (
    <SpotlightCard className="h-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">PocketBill UI</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-violet-500/20 text-brand-600 dark:text-brand-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {lines.map((line, index) => (
          <div key={line} className="rounded-2xl bg-slate-950/5 p-4 dark:bg-white/5">
            <div className="mb-2 h-2 w-16 rounded-full bg-brand-400/60" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-700 dark:text-slate-200">{line}</p>
              <div className={`h-2 rounded-full ${index % 2 === 0 ? "w-20 bg-cyan-400/60" : "w-12 bg-violet-400/60"}`} />
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

export function ProductSection() {
  return (
    <section id="pocketbill" className="py-24">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Main Product"
              title="PocketBill powers smarter billing and business management"
              description="PocketBill is a smart billing and business management software for shops and businesses, combining billing, inventory, orders, customer records, reporting, and thermal receipt printing in one modern interface."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pocketBillFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <FadeIn key={feature.title} delay={index * 0.04}>
                    <SpotlightCard className="h-full p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-violet-500/20 text-brand-600 dark:text-brand-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </SpotlightCard>
                  </FadeIn>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Request Demo
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <ProductMockup title="Dashboard Mockup" icon={BarChart3} lines={["Daily sales overview", "Shop performance snapshot", "Top moving products"]} />
            </FadeIn>
            <FadeIn delay={0.05}>
              <ProductMockup title="Billing Screen" icon={CircleDollarSign} lines={["Quick invoice entry", "Discounts and taxes", "Receipt-ready checkout"]} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProductMockup title="Inventory UI" icon={Database} lines={["Stock in and stock out", "Low inventory alerts", "Category-based organization"]} />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ProductMockup title="Thermal Printing" icon={Printer} lines={["Fast thermal output", "Counter-optimized print flow", "Compact receipt formatting"]} />
            </FadeIn>
          </div>
        </div>
      </Shell>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <Shell>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work across software, commerce, and digital operations"
          description="A sample of the product types and digital systems FrontWebTech can craft for startups, service businesses, schools, and growing operations."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.04}>
              <SpotlightCard className="group h-full">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950 to-brand-900 p-3 text-white dark:from-white dark:to-brand-100 dark:text-slate-950">
                  <div className="flex items-center justify-between">
                    <p className="px-2 pb-3 text-xs uppercase tracking-[0.3em] text-white/60 dark:text-slate-500">{project.category}</p>
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/10 dark:bg-white/70">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent dark:from-white/20" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className="rounded-2xl bg-slate-950/65 px-3 py-2 backdrop-blur dark:bg-white/70">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/60 dark:text-slate-500">Preview</p>
                        <p className="mt-1 text-sm font-medium text-white dark:text-slate-900">{project.title}</p>
                      </div>
                      <div className="hidden gap-2 md:flex">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <Shell>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The technical depth of an engineering partner with the polish of a premium design studio"
          description="We focus on business outcomes, but we also care deeply about architecture, maintainability, speed, and the quality people feel when they use what we build."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <SpotlightCard className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-violet-500/20 text-brand-600 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <Shell>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that care about quality and momentum"
          description="FrontWebTech is built to be the kind of technical partner clients can rely on when delivery quality matters."
          center
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <SpotlightCard className="h-full">
                <div className="flex gap-1 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-200">“{testimonial.quote}”</p>
                <div className="mt-8">
                  <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-24">
      <Shell>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function ContactSection() {
  const contactItems: Array<{ icon: LucideIcon; label: string; value: string }> = [
    { icon: Mail, label: "Email", value: "contact@frontwebtech.com" },
    { icon: Phone, label: "Phone", value: "+91 9707132913" },
    { icon: MapPin, label: "Address", value: "202, Ambari, Hojai, Assam" }
  ];
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    projectDetails: ""
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: ""
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your inquiry..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry.");
      }

      setStatus({
        type: "success",
        message: result.message || "Your inquiry has been sent successfully."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        projectDetails: ""
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong while sending your inquiry."
      });
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section id="contact" className="py-24">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something scalable, polished, and useful"
              description="Tell us what you want to launch, improve, or automate. We’ll help shape it into a product-ready solution."
            />
            <div className="mt-10 space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <SpotlightCard key={label} className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-violet-500/20 text-brand-600 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{value}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
          <SpotlightCard className="p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-white/10 bg-white/60 px-4 py-3 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-400 dark:bg-white/5"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-white/10 bg-white/60 px-4 py-3 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-400 dark:bg-white/5"
                    placeholder="you@example.com"
                    type="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Company
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/60 px-4 py-3 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-400 dark:bg-white/5"
                  placeholder="Company or brand name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Project Details
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-2xl border border-white/10 bg-white/60 px-4 py-3 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-400 dark:bg-white/5"
                  placeholder="Tell us about your website, app, software, or PocketBill demo request."
                />
              </label>
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex w-fit rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.type === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-600 dark:text-emerald-300"
                      : status.type === "error"
                        ? "text-rose-600 dark:text-rose-300"
                        : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </SpotlightCard>
        </div>
      </Shell>
    </section>
  );
}
