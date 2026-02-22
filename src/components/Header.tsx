"use client";

import { motion } from "framer-motion";
import { sections } from "@/data/deck";
import { useState, useCallback } from "react";
import StockTicker from "@/components/StockTicker";

interface HeaderProps {
  onNavigate: (index: number) => void;
  showGrid: boolean;
}

const PDF_FILENAME = "Aurelia Gold Corp Investor Deck.pdf";

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export default function Header({ onNavigate, showGrid }: HeaderProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      const res = await fetch("/api/export-pdf");
      if (!res.ok) throw new Error("PDF export failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      if (isMobileDevice()) {
        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = PDF_FILENAME;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Download failed:", err);
      alert("PDF download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  // Quick-jump section indices
  const zoningIndex = sections.findIndex((s) => s.id === "zoning");
  const financialsIndex = sections.findIndex((s) => s.id === "financials");

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[240px] h-14 bg-brand-charcoal/95 backdrop-blur-sm border-b border-white/10 z-30 flex items-center justify-between px-4 sm:px-6 pl-16 lg:pl-6 no-print">
      <div className="flex items-center gap-4">
        {!showGrid && (
          <>
            <StockTicker />
            <span className="w-px h-3 bg-white/15 hidden lg:block" />
            <button
              onClick={() => onNavigate(zoningIndex)}
              className="text-micro font-mono uppercase tracking-[0.12em] text-white/40 hover:text-white/70 transition-colors hidden lg:block"
            >
              Jump to Permits
            </button>
            <span className="text-white/10 hidden lg:block">|</span>
            <button
              onClick={() => onNavigate(financialsIndex)}
              className="text-micro font-mono uppercase tracking-[0.12em] text-white/40 hover:text-white/70 transition-colors hidden lg:block"
            >
              Jump to Financials
            </button>
          </>
        )}
      </div>

      <motion.button
        onClick={handleDownload}
        disabled={downloading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 bg-brand-mustard text-brand-charcoal px-4 py-2.5 sm:py-2 text-body-sm font-bold hover:bg-brand-mustard/90 transition-colors disabled:opacity-50 min-h-[44px] sm:min-h-0"
      >
        {downloading ? (
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="8"
              cy="8"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="28"
              strokeDashoffset="8"
            />
          </motion.svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {downloading ? "Exporting..." : "Download PDF"}
      </motion.button>
    </header>
  );
}
