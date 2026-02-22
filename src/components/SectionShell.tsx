"use client";

import { ReactNode } from "react";
import { theme } from "@/lib/theme";

interface SectionShellProps {
  id: string;
  index: number;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

/** Determines if a section bg is "dark" and needs light text */
const DARK_BACKGROUNDS = ["#1C1C1C", "#2F4F4F", "#3A6B6B", "#4682B4"];

export default function SectionShell({
  id,
  index,
  children,
  className = "",
  dark = false,
}: SectionShellProps) {
  const bg = theme.sectionBackgrounds[index] ?? "#F5F5DC";
  const isDark = dark || DARK_BACKGROUNDS.includes(bg);

  return (
    <section
      id={id}
      className={`w-full flex items-start justify-center relative ${className}`}
      data-section-shell
      style={{ backgroundColor: bg }}
    >
      {/* Faint dotted grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? "rgba(255,255,255,0.03)" : "rgba(26,26,26,0.04)"} 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className={`w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
