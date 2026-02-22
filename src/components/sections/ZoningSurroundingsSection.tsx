"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import SectionNav from "@/components/SectionNav";
import { zoning } from "@/data/deck";

interface ZoningSurroundingsSectionProps {
  onNavigate: (index: number) => void;
}

export default function ZoningSurroundingsSection({ onNavigate }: ZoningSurroundingsSectionProps) {
  return (
    <SectionShell id="zoning" index={3}>
      <div>
        <span className="text-micro font-mono uppercase tracking-[0.12em] text-brand-charcoal/40 mb-4 block">Permits &amp; Regulatory</span>
        <h2 className="text-display-sm sm:text-display-md font-display font-bold tracking-tight text-brand-charcoal mb-3 max-w-3xl">
          {zoning.headline}
        </h2>
        <p className="text-body-lg text-brand-charcoal/50 max-w-2xl mb-12">
          {zoning.subtitle}
        </p>

        {/* Entitlements + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Entitlements card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-charcoal/8 border border-brand-charcoal/12 p-6"
          >
            <h3 className="text-heading-md font-display font-semibold text-brand-charcoal mb-4">
              Permits & Tenure
            </h3>
            <div className="space-y-3">
              {zoning.entitlements.map((item) => (
                <div key={item.label} className="flex justify-between items-baseline gap-4">
                  <span className="text-body-sm text-brand-charcoal/50 flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="text-body-sm text-brand-charcoal text-right font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="mt-6 p-4 bg-brand-charcoal/10 border border-brand-charcoal/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-charcoal/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-charcoal">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <span className="text-body-sm font-semibold text-brand-charcoal block">Exploration Permits Active</span>
                  <span className="text-caption text-brand-charcoal/50">All permits in place for continued drilling; mine EA process initiated</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map / image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden border border-brand-charcoal/12"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoning.mapImage}
              alt="Map showing Whitefish Lake project claims and surrounding mining district"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
            {/* Glow overlay matching property outline */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "38%",
                left: "38%",
                width: "11%",
                height: "6%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 20px 8px rgba(26,26,26,0.3), 0 0 40px 16px rgba(26,26,26,0.12)",
                border: "1.5px solid rgba(26,26,26,0.35)",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />
          </motion.div>
        </div>

        {/* Zoning Advantages */}
        <div className="mb-14">
          <h3 className="text-heading-lg font-display font-semibold text-brand-charcoal mb-4">
            Regulatory Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {zoning.advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-body-md text-brand-charcoal/60"
              >
                <span className="w-5 h-5 bg-brand-charcoal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-charcoal">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {advantage}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Surroundings */}
        <div>
          <h3 className="text-heading-lg font-display font-semibold text-brand-charcoal mb-4">
            Mining District Context
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {zoning.surroundings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-brand-charcoal/5 border border-brand-charcoal/8 p-4"
              >
                <span className="w-2 h-2 bg-brand-charcoal flex-shrink-0 mt-2" />
                <span className="text-body-sm text-brand-charcoal/60">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SectionNav currentIndex={3} onNavigate={onNavigate} />
    </SectionShell>
  );
}
