"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Tile from "@/components/Tile";
import CoverSection from "@/components/sections/CoverSection";
import TeamSection from "@/components/sections/TeamSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import PropertySection from "@/components/sections/PropertySection";
import ZoningSurroundingsSection from "@/components/sections/ZoningSurroundingsSection";
import FinancialsSection from "@/components/sections/FinancialsSection";
import HomeTypeSection from "@/components/sections/HomeTypeSection";
import ClosingSection from "@/components/sections/ClosingSection";
import { sections } from "@/data/deck";

/** All section components in order */
const SECTION_COMPONENTS = [
  CoverSection,
  OpportunitySection,
  PropertySection,
  ZoningSurroundingsSection,
  HomeTypeSection,
  FinancialsSection,
  TeamSection,
  ClosingSection,
];

export default function Home() {
  const [showGrid, setShowGrid] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false); // true while programmatic scroll is in progress

  // ── Navigate by scrolling to a section ──
  const navigateToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= sections.length) return;

      if (showGrid) {
        setShowGrid(false);
        setActiveSection(index);
        // Wait a tick for sections to render, then scroll
        setTimeout(() => {
          const el = sectionRefs.current[index];
          if (el) {
            isScrolling.current = true;
            const top = el.getBoundingClientRect().top + window.scrollY - 56;
            window.scrollTo({ top, behavior: "smooth" });
            setTimeout(() => { isScrolling.current = false; }, 1000);
          }
        }, 50);
        return;
      }

      const el = sectionRefs.current[index];
      if (el) {
        isScrolling.current = true;
        setActiveSection(index);
        const top = el.getBoundingClientRect().top + window.scrollY - 56; // 56px header
        window.scrollTo({ top, behavior: "smooth" });
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    },
    [showGrid]
  );

  const showGridView = useCallback(() => {
    setShowGrid(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ── Intersection Observer: track which section is in the viewport ──
  useEffect(() => {
    if (showGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return; // don't fight programmatic scrolls
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) {
              setActiveSection(idx);
            }
          }
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px", // fires when section crosses ~top 40% of viewport
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showGrid]);

  // ── Keyboard navigation ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "Escape" && !showGrid) {
        showGridView();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showGrid, showGridView]);

  return (
    <div className="min-h-screen bg-brand-charcoal">
      <Navigation
        activeSection={activeSection}
        onNavigate={navigateToSection}
        showGrid={showGrid}
        onShowGrid={showGridView}
      />
      <MobileNav
        activeSection={activeSection}
        onNavigate={navigateToSection}
        showGrid={showGrid}
        onShowGrid={showGridView}
      />
      <Header onNavigate={navigateToSection} showGrid={showGrid} />

      <main className="lg:ml-[240px] pt-14 relative">
        {/* ── Grid overview ── */}
        {showGrid && (
          <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-surface-white">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="mb-12">
                <span className="section-label text-ink">TSX: AUR — Investor Deck</span>
                <h1 className="text-display-md sm:text-display-lg font-display font-bold tracking-tight text-ink mb-2">
                  Aurelia Gold Corp
                </h1>
                <p className="text-body-lg text-ink-muted max-w-xl">
                  Advanced-stage gold exploration — Whitefish Lake Project, Northern Ontario.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, i) => (
                  <Tile
                    key={section.id}
                    number={section.tileIcon}
                    title={section.navLabel}
                    subtitle={section.subtitle}
                    onClick={() => navigateToSection(i)}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── All sections stacked vertically ── */}
        {!showGrid && (
          <div>
            {SECTION_COMPONENTS.map((SectionComponent, i) => (
              <div
                key={sections[i].id}
                ref={(el) => { sectionRefs.current[i] = el; }}
              >
                <SectionComponent onNavigate={navigateToSection} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Grain overlay */}
      <div className="grain-overlay no-print" />

      {/* Mobile progress bar */}
      {!showGrid && (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-ink/20 z-50 lg:hidden no-print">
          <motion.div
            className="h-full bg-brand-mustard"
            animate={{
              width: `${((activeSection + 1) / sections.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
}
