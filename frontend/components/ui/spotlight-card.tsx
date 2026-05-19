import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function SpotlightCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-white/70 p-6 shadow-glow backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-brand-300/60 dark:bg-white/5",
        className
      )}
      {...props}
    />
  );
}
