"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Animate on mount instead of on scroll -- use above the fold. */
  immediate?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 24,
  className = "",
  immediate = false,
}) => {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  const transition = { duration: 0.55, delay, ease };

  if (immediate) {
    return (
      <motion.div
        data-reveal
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
