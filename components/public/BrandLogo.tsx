"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export function BrandLogo({ className, markOnly = false }: { className?: string; markOnly?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="shrink-0"
      >
        <rect x="2" y="2" width="38" height="38" rx="8" fill="url(#civora-bg)" stroke="rgba(255,255,255,0.18)" />
        <motion.path
          d="M29 11H18L12 21L18 31H29"
          stroke="#F5B301"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0 }}
          animate={reduced ? undefined : { pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
        />
        <path d="M20 15H31M20 21H31M20 27H31" stroke="rgba(210,213,210,0.55)" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 21H7M35 21H31" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" />
        <defs>
          <linearGradient id="civora-bg" x1="2" y1="2" x2="40" y2="40">
            <stop stopColor="#142238" />
            <stop offset="1" stopColor="#07101B" />
          </linearGradient>
        </defs>
      </motion.svg>
      {!markOnly ? (
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-[0.16em] text-white">CIVORA</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Infrastructure</span>
        </span>
      ) : null}
    </div>
  );
}
