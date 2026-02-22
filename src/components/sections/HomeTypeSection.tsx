"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionNav from "@/components/SectionNav";
import HomeCard from "@/components/HomeCard";
import { premiumCondoUnit, maxDensityCondoUnit, townhomeUnit } from "@/data/deck";

interface HomeTypeSectionProps {
  onNavigate: (index: number) => void;
}

const scenarios = [
  {
    key: "open-pit",
    label: "Open Pit",
    data: premiumCondoUnit,
  },
  {
    key: "underground",
    label: "Underground",
    data: maxDensityCondoUnit,
  },
  {
    key: "phased-hybrid",
    label: "Phased Hybrid",
    data: townhomeUnit,
  },
] as const;

export default function HomeTypeSection({ onNavigate }: HomeTypeSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = scenarios[activeIndex];

  // Always dark — charcoal bg
  const navOverrides =
    "[&_button]:text-white/40 [&_button:hover]:text-white/70 [&_div]:bg-white/10 [&_.bg-ink]:bg-white";

  return (
    <section
      id="homes"
      className="min-h-full w-full flex items-start justify-center relative"
      data-section-index={4}
    >
      {/* Animated background — always charcoal */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundColor: "#1C1C1C" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 relative z-10 text-white"
      >
        <div>
          {/* Scenario toggle */}
          <div className="flex flex-wrap items-center gap-1 mb-6 sm:mb-8 lg:mb-10 bg-white/8 border border-white/10 rounded-full p-1 w-fit max-w-full">
            {scenarios.map((scenario, i) => (
              <button
                key={scenario.key}
                onClick={() => setActiveIndex(i)}
                className={`relative px-3 md:px-5 py-2 rounded-full text-body-sm font-medium transition-colors duration-300 ${
                  activeIndex === i ? "text-brand-charcoal" : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeIndex === i && (
                  <motion.div
                    layoutId="home-scenario-bg"
                    className="absolute inset-0 bg-brand-mustard rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{scenario.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
            >
              <HomeCard home={active.data} dark={true} />
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className={navOverrides}>
            <SectionNav currentIndex={4} onNavigate={onNavigate} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
