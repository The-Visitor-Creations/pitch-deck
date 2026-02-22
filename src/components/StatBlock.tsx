"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

interface StatBlockProps {
  stat: string;
  label: string;
  description?: string;
  index?: number;
  dark?: boolean;
}

export default function StatBlock({
  stat,
  label,
  description,
  index = 0,
  dark = false,
}: StatBlockProps) {
  const sizeClass = stat.length > 12
    ? "text-heading-md sm:text-display-sm"
    : stat.length > 6
    ? "text-display-sm sm:text-display-md"
    : "text-display-lg";

  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-t border-current/20 pt-4 space-y-2"
    >
      <span
        className={`block ${sizeClass} font-display font-bold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <CountUp
          value={stat}
          duration={1200}
          delay={index * 100 + 200}
        />
      </span>
      <span
        className={`block text-micro font-mono uppercase tracking-[0.12em] ${
          dark ? "text-white/50" : "text-ink-muted/50"
        }`}
      >
        {label}
      </span>
      {description && (
        <p
          className={`text-body-md mt-2 ${
            dark ? "text-white/70" : "text-ink-light"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
