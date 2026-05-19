import {
  Activity,
  BarChart3,
  Blocks,
  CloudCog,
  Code2,
  Headphones,
  LayoutDashboard,
  MonitorSmartphone,
  Receipt,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Users,
  WandSparkles
} from "lucide-react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "PocketBill", href: "/product" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "Website Development",
    description:
      "Performance-first company websites, landing pages, and scalable web apps built for growth and conversion.",
    icon: Code2
  },
  {
    title: "Software Development",
    description:
      "Custom business systems, internal tools, and workflow platforms designed around your operations.",
    icon: Blocks
  },
  {
    title: "Android Apps",
    description:
      "Android experiences with clean UX, offline-ready flows, and business-focused functionality.",
    icon: Smartphone
  },
  {
    title: "iOS Apps",
    description:
      "Premium iPhone and iPad applications engineered for speed, polish, and long-term maintainability.",
    icon: MonitorSmartphone
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Modern storefronts, catalog systems, checkout journeys, and backend integrations for online selling.",
    icon: ShoppingCart
  },
  {
    title: "API Integration",
    description:
      "Cloud services, payment gateways, analytics, and secure third-party integrations unified into one stack.",
    icon: CloudCog
  },
  {
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, feature iteration, bug fixing, and dependable post-launch technical support.",
    icon: Headphones
  }
];

export const pocketBillFeatures = [
  {
    title: "Smart Billing",
    description: "Create accurate invoices quickly with modern workflows designed for retail speed.",
    icon: Receipt
  },
  {
    title: "Inventory Tracking",
    description: "Monitor stock levels, low-stock alerts, and movement across products in real time.",
    icon: LayoutDashboard
  },
  {
    title: "Fast Receipt Printing",
    description: "Thermal printer support keeps counters fast and customer queues moving smoothly.",
    icon: Rocket
  },
  {
    title: "Order Management",
    description: "Track live orders, processing status, and operational bottlenecks from one place.",
    icon: Activity
  },
  {
    title: "Business Reports",
    description: "Turn daily transactions into actionable insights with visual reports and analytics.",
    icon: BarChart3
  },
  {
    title: "Customer Management",
    description: "Maintain customer records, purchase history, and communication-ready business data.",
    icon: Users
  }
];

export const portfolioProjects = [
  {
    title: "E-Commerce Website",
    category: "Retail Platform",
    description: "A conversion-focused storefront with dynamic catalogs, offers, and secure checkout.",
    image: "/portfolio/ecommerce.svg"
  },
  {
    title: "School Management Software",
    category: "Education SaaS",
    description: "A portal for student data, attendance, fees, notices, and staff administration.",
    image: "/portfolio/school.svg"
  },
  {
    title: "Billing Software",
    category: "Business Operations",
    description: "A fast invoicing and reporting system tailored for local businesses and shops.",
    image: "/portfolio/billing.svg"
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile Commerce",
    description: "A modern food ordering experience with live order statuses and kitchen workflows.",
    image: "/portfolio/restaurant.svg"
  },
  {
    title: "Business Website",
    category: "Corporate Presence",
    description: "A premium company site designed for trust, lead generation, and brand positioning.",
    image: "/portfolio/business.svg"
  },
  {
    title: "Inventory System",
    category: "Operations Platform",
    description: "An internal stock management platform with analytics, alerts, and user permissions.",
    image: "/portfolio/inventory.svg"
  }
];

export const testimonials = [
  {
    quote:
      "FrontWebTech transformed our manual workflow into a sleek business platform that our team actually enjoys using.",
    name: "Ayesha Rahman",
    role: "Operations Lead, Urban Retail Hub"
  },
  {
    quote:
      "Their design sense and development speed stood out immediately. The final product felt premium from day one.",
    name: "Sourav Mitra",
    role: "Founder, SwiftCart"
  },
  {
    quote:
      "We needed a reliable technical partner, and FrontWebTech delivered with clear communication and smart execution.",
    name: "Nabila Islam",
    role: "Director, NextEdge Academy"
  }
];

export const stats = [
  { value: 48, label: "Projects Completed", suffix: "+" },
  { value: 32, label: "Happy Clients", suffix: "+" },
  { value: 14, label: "Apps Developed", suffix: "+" },
  { value: 24, label: "Support Availability", suffix: "/7" }
];

export const whyChooseUs = [
  {
    title: "Modern Technologies",
    description: "We build with current frameworks, scalable architecture, and future-ready practices.",
    icon: WandSparkles
  },
  {
    title: "Scalable Architecture",
    description: "Solutions are designed to grow with your users, data volume, and product roadmap.",
    icon: Rocket
  },
  {
    title: "Fast Delivery",
    description: "Clear scope, practical execution, and focused iteration keep launches on track.",
    icon: Activity
  },
  {
    title: "Secure Systems",
    description: "From authentication to integrations, we protect data and reduce operational risk.",
    icon: ShieldCheck
  },
  {
    title: "User-Friendly Design",
    description: "Beautiful interfaces are matched with intuitive flows that reduce friction for users.",
    icon: LayoutDashboard
  },
  {
    title: "Dedicated Support",
    description: "We stay involved after launch to maintain performance and support business continuity.",
    icon: Headphones
  }
];

export const timeline = [
  {
    year: "2026",
    title: "FrontWebTech Founded",
    description: "Built to deliver modern digital products for ambitious businesses."
  },
  {
    year: "2026",
    title: "PocketBill Launched",
    description: "Introduced a focused billing solution for shops and growing operations."
  },
  {
    year: "2026+",
    title: "Scaling With Clients",
    description: "Expanding service delivery across software, mobile, and business systems."
  }
];
