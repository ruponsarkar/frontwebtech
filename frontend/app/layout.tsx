import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontwebtech.com"),
  title: {
    default: "FrontWebTech | Premium Software & Digital Solutions Company",
    template: "%s | FrontWebTech"
  },
  description:
    "FrontWebTech is a modern software and digital solutions company building websites, custom software, mobile apps, e-commerce platforms, UI/UX systems, and business tools like PocketBill.",
  keywords: [
    "FrontWebTech",
    "software company",
    "website development",
    "mobile app development",
    "custom software",
    "PocketBill",
    "digital solutions"
  ],
  openGraph: {
    title: "FrontWebTech",
    description:
      "Building powerful digital solutions for modern businesses with premium web, mobile, and software products.",
    url: "https://frontwebtech.com",
    siteName: "FrontWebTech",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FrontWebTech",
    description:
      "Premium digital solutions, custom software, mobile apps, and PocketBill business software."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(31,166,255,0.18),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.16),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.10),transparent_22%)]" />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
