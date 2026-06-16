"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function PageFade({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      animate={reduced ? undefined : { opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
