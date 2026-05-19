"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { Shell } from "../ui/shell";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Shell className="pt-4">
        <div className="rounded-full border border-white/10 bg-white/70 px-4 py-3 shadow-glow backdrop-blur-xl dark:bg-slate-950/70">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      active
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-600 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-950 md:inline-flex"
              >
                Start a Project
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        pathname === item.href
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : "bg-slate-950/5 text-slate-700 hover:bg-slate-950/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-gradient-to-r from-brand-500 to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                    onClick={() => setOpen(false)}
                  >
                    Start a Project
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Shell>
    </header>
  );
}
