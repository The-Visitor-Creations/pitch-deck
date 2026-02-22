"use client";

import { motion } from "framer-motion";
import { stockTicker } from "@/data/deck";

const t = stockTicker;
const isUp = t.change >= 0;

export default function StockTicker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex items-center gap-3 overflow-hidden"
    >
      {/* Symbol + Price */}
      <div className="flex items-center gap-2">
        <span className="text-micro font-mono font-semibold tracking-wider text-white/90">
          {t.exchange}:{t.symbol}
        </span>
        <span className="text-body-sm font-display font-bold text-white">
          ${t.price.toFixed(2)}
        </span>
      </div>

      {/* Change */}
      <span
        className={`text-micro font-mono font-medium ${
          isUp ? "text-green-400" : "text-red-400"
        }`}
      >
        {isUp ? "+" : ""}
        {t.change.toFixed(2)} ({isUp ? "+" : ""}
        {t.changePct.toFixed(1)}%)
      </span>

      {/* Divider */}
      <span className="w-px h-3 bg-white/15 hidden sm:block" />

      {/* Gold spot */}
      <div className="hidden sm:flex items-center gap-1.5">
        <span className="text-micro font-mono text-white/40 uppercase tracking-wider">Au</span>
        <span className="text-micro font-mono text-brand-mustard font-medium">
          ${t.goldSpot.toLocaleString()}
        </span>
      </div>

      {/* Divider */}
      <span className="w-px h-3 bg-white/15 hidden md:block" />

      {/* Vol + MCap */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="text-micro font-mono text-white/40 uppercase tracking-wider">Vol</span>
          <span className="text-micro font-mono text-white/60">{t.volume}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-micro font-mono text-white/40 uppercase tracking-wider">MCap</span>
          <span className="text-micro font-mono text-white/60">{t.marketCap}</span>
        </div>
      </div>
    </motion.div>
  );
}
