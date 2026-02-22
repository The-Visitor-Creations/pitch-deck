"use client";

import { motion } from "framer-motion";
import { sections } from "@/data/deck";

interface SectionNavProps {
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function SectionNav({ currentIndex, onNavigate }: SectionNavProps) {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  return (
    <div className="relative mt-12 pt-6 border-t border-current/20" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5), 0 0 2px rgba(0,0,0,0.3)" }}>
      <div className="flex items-center justify-between">
        <button
          onClick={() => hasPrev && onNavigate(currentIndex - 1)}
          disabled={!hasPrev}
          className={`flex items-center gap-2 text-micro font-mono uppercase tracking-[0.12em] transition-colors ${
            hasPrev
              ? "opacity-90 hover:opacity-100"
              : "opacity-25 cursor-not-allowed"
          }`}
          aria-label="Previous section"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {hasPrev && sections[currentIndex - 1].navLabel}
        </button>

        {/* Dots — square indicators */}
        <div className="flex items-center gap-0.5">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              aria-label={`Go to ${sections[i].navLabel}`}
              className="p-2"
            >
              <motion.div
                className={`rounded-none transition-colors ${
                  i === currentIndex
                    ? "bg-brand-mustard w-6 h-2"
                    : "bg-current/40 w-2 h-2 hover:bg-current/60"
                }`}
                layout
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => hasNext && onNavigate(currentIndex + 1)}
          disabled={!hasNext}
          className={`flex items-center gap-2 text-micro font-mono uppercase tracking-[0.12em] transition-colors ${
            hasNext
              ? "opacity-90 hover:opacity-100"
              : "opacity-25 cursor-not-allowed"
          }`}
          aria-label="Next section"
        >
          {hasNext && sections[currentIndex + 1].navLabel}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
