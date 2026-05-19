import Link from "next/link";

import { Shell } from "./ui/shell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      <Shell className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] rounded-[40px] bg-gradient-to-br from-brand-200/70 via-cyan-100/40 to-violet-200/60 blur-3xl dark:from-brand-500/20 dark:via-cyan-400/10 dark:to-violet-500/10" />
        <div className="rounded-[36px] border border-white/10 bg-white/70 px-8 py-16 shadow-glow backdrop-blur-xl dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-950"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-slate-300/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Shell>
    </section>
  );
}
