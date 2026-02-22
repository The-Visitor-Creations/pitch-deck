"use client";

import { motion } from "framer-motion";

interface TileProps {
  number: string;
  title: string;
  subtitle?: string;
  onClick: () => void;
  index: number;
}

export default function Tile({ number, title, subtitle, onClick, index }: TileProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative text-left w-full bg-transparent border border-ink/15 p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden hover:border-l-[3px] hover:border-l-brand-mustard"
    >
      <div className="relative z-10">
        {/* Number */}
        <span className="block text-display-sm font-bold text-ink mb-4 tracking-widest">
          {number}
        </span>

        {/* Title */}
        <h3 className="text-heading-md font-display font-bold text-ink mb-1 transition-colors duration-300">
          {title}
        </h3>

        {subtitle && (
          <p className="text-body-sm text-ink-muted">{subtitle}</p>
        )}

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-1 text-ink-muted group-hover:text-ink transition-colors duration-300">
          <span className="text-body-sm font-medium">View</span>
          <span className="text-body-sm transition-transform duration-300 group-hover:translate-x-1 inline-block">
            &rarr;
          </span>
        </div>
      </div>
    </motion.button>
  );
}
