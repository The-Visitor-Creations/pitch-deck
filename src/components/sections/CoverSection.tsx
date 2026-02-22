"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import SectionNav from "@/components/SectionNav";
import { cover } from "@/data/deck";

interface CoverSectionProps {
  onNavigate: (index: number) => void;
}

export default function CoverSection({ onNavigate }: CoverSectionProps) {
  return (
    <SectionShell id="cover" index={0} dark>
      {/* Background hero image */}
      {cover.backgroundImage && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover.backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/85 to-transparent" />
        </div>
      )}

      <div className={`flex flex-col justify-center min-h-[60vh] ${cover.backgroundImage ? "relative z-10" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <span className="text-micro font-mono uppercase tracking-[0.12em] text-brand-mustard/60">{cover.location}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="text-display-md sm:text-display-lg md:text-display-xl font-display font-bold tracking-tight text-white text-balance whitespace-pre-line"
        >
          {cover.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="mt-6 flex flex-wrap items-center gap-2 sm:gap-4"
        >
          <span className="text-body-md sm:text-body-lg text-white/40">{cover.tagline}</span>
          <span className="w-1 h-1 bg-white/30 hidden sm:block" />
          <span className="text-body-md sm:text-body-lg text-white/30">{cover.date}</span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0, 0, 0.2, 1] }}
          className="h-[2px] bg-brand-mustard mt-12 origin-left"
        />
      </div>

      <SectionNav currentIndex={0} onNavigate={onNavigate} />
    </SectionShell>
  );
}
