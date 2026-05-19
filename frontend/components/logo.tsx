import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 via-cyan-300 to-violet-500 text-lg font-semibold text-slate-950 shadow-glow">
        F
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          FrontWebTech
        </span>
        <span className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}
