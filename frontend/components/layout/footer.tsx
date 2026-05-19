import Link from "next/link";

import { navigation, services } from "@/data/site";

import { Logo } from "../logo";
import { Shell } from "../ui/shell";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              FrontWebTech builds premium software, mobile apps, digital products, and modern business systems for ambitious companies.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Powered with innovation alongside PageUp Technologies at pageuptechnologies.com.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Quick Links
            </h3>
            <div className="mt-5 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Services
            </h3>
            <div className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <p key={service.title} className="text-sm text-slate-700 dark:text-slate-300">
                  {service.title}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Product
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p>PocketBill</p>
              <p>Billing Automation</p>
              <p>Inventory Management</p>
              <p>Reports & Analytics</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FrontWebTech. All rights reserved.</p>
          <p>Founder & CEO: Rupon Sarkar | Co-founder: Nirmali Sarkar</p>
        </div>
      </Shell>
    </footer>
  );
}
