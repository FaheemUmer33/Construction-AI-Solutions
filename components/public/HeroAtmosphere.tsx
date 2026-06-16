"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroAtmosphere() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-blueprint opacity-70"
        style={{ backgroundSize: "44px 44px" }}
        animate={reduced ? undefined : { backgroundPosition: ["0px 0px", "44px 22px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(245,179,1,0.15),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(53,99,148,0.2),transparent_32%)]" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-55"
        animate={reduced ? undefined : { x: [-18, 18, -18] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 1440 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 230H1440V260H0V230Z" fill="rgba(3,8,14,0.82)" />
          <path d="M90 230V70H120V230M105 70H305M180 70V230M120 100H260M1170 230V42H1200V230M1185 42H1395M1252 42V230M1200 76H1350" stroke="rgba(210,213,210,0.35)" strokeWidth="6" />
          <path d="M420 230V125H545V230M575 230V95H720V230M760 230V145H850V230" fill="rgba(9,18,30,0.9)" stroke="rgba(245,179,1,0.22)" strokeWidth="3" />
          <path d="M448 150H520M448 180H520M604 124H690M604 154H690M786 170H830" stroke="rgba(210,213,210,0.3)" strokeWidth="3" />
        </svg>
      </motion.div>
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-concrete/35"
          style={{ left: `${8 + index * 8}%`, top: `${18 + (index % 5) * 13}%` }}
          animate={reduced ? undefined : { y: [0, -18, 0], opacity: [0.12, 0.42, 0.12] }}
          transition={{ duration: 7 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-steel/10 via-steel/72 to-[#08111d]" />
    </div>
  );
}
