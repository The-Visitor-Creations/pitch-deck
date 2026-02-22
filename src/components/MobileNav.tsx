"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/data/deck";

interface MobileNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
  showGrid: boolean;
  onShowGrid: () => void;
}

export default function MobileNav({
  activeSection,
  onNavigate,
  showGrid,
  onShowGrid,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (i: number) => {
    onNavigate(i);
    setOpen(false);
  };

  return (
    <nav className="lg:hidden no-print" role="navigation" aria-label="Mobile navigation">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-3 left-4 z-50 w-10 h-10 bg-brand-charcoal/95 backdrop-blur-sm border border-white/10 flex items-center justify-center"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        <motion.div animate={open ? "open" : "closed"} className="space-y-1.5" aria-hidden="true">
          <motion.div
            className="w-5 h-0.5 bg-white"
            variants={{
              open: { rotate: 45, y: 4 },
              closed: { rotate: 0, y: 0 },
            }}
          />
          <motion.div
            className="w-5 h-0.5 bg-white"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.div
            className="w-5 h-0.5 bg-white"
            variants={{
              open: { rotate: -45, y: -4 },
              closed: { rotate: 0, y: 0 },
            }}
          />
        </motion.div>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[280px] bg-brand-charcoal border-r border-white/10 z-50 py-6"
            >
              <button
                onClick={() => {
                  onShowGrid();
                  setOpen(false);
                }}
                className="px-6 mb-6 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-brand-mustard flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brand-charcoal">
                    <rect x="1" y="1" width="5" height="5" fill="currentColor" />
                    <rect x="8" y="1" width="5" height="5" fill="currentColor" />
                    <rect x="1" y="8" width="5" height="5" fill="currentColor" />
                    <rect x="8" y="8" width="5" height="5" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-body-sm font-medium text-white">Overview</span>
              </button>

              {/* Divider */}
              <div className="border-b border-white/5 mx-6 mb-4" />

              <div className="px-3 space-y-0.5">
                {sections.map((section, i) => {
                  const isActive = !showGrid && activeSection === i;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNav(i)}
                      className={`w-full text-left px-3 py-2.5 flex items-center gap-3 relative ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-brand-mustard" />
                      )}
                      <span
                        className={`w-5 text-caption font-mono ${
                          isActive ? "text-brand-mustard" : "text-white/30"
                        }`}
                      >
                        {section.tileIcon}
                      </span>
                      <span className="text-body-sm font-medium">{section.navLabel}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
