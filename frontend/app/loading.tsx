export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/70 px-6 py-4 shadow-glow backdrop-blur-xl dark:bg-white/5">
        <span className="h-3 w-3 animate-pulse rounded-full bg-brand-500" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 [animation-delay:150ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-violet-400 [animation-delay:300ms]" />
        <p className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-300">Loading FrontWebTech...</p>
      </div>
    </div>
  );
}
