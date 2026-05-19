"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, motionValue, value]);

  return (
    <div ref={ref} className="rounded-[28px] border border-white/10 bg-white/70 p-6 shadow-glow backdrop-blur-xl dark:bg-white/5">
      <div className="font-display text-4xl font-semibold text-slate-950 dark:text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
