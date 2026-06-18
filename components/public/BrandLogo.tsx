"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export function BrandLogo({ className, markOnly = false }: { className?: string; markOnly?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="shrink-0"
      >
        <rect x="2" y="2" width="42" height="42" rx="8" fill="url(#cas-bg)" stroke="rgba(255,255,255,0.18)" />
        <path d="M10 32H36M12 26H34M16 20H30M20 14H26" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeLinecap="round" />
        <motion.path
          d="M13 31V14H18V31M18 16H34L29 20M18 22H27"
          stroke="#dff3e9"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0 }}
          animate={reduced ? undefined : { pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
        />
        <motion.path
          d="M17 30C22 23 27 30 33 22"
          stroke="#a5c7b7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0 }}
          animate={reduced ? undefined : { pathLength: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.45 }}
        />
        <circle cx="17" cy="30" r="2" fill="#a5c7b7" />
        <circle cx="25" cy="27" r="2" fill="#FFFFFF" />
        <circle cx="33" cy="22" r="2" fill="#a5c7b7" />
        <defs>
          <linearGradient id="cas-bg" x1="2" y1="2" x2="44" y2="44">
            <stop stopColor="#215c40" />
            <stop offset="1" stopColor="#02331e" />
          </linearGradient>
        </defs>
      </motion.svg>
      {!markOnly ? (
        <span className="leading-tight">
          <span className="block font-display text-sm font-semibold tracking-[0.08em] text-white">Construction AI</span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-cas-mint">Solutions</span>
        </span>
      ) : null}
    </div>
  );
}
