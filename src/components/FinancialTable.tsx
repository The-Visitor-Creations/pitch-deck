"use client";

import { motion } from "framer-motion";
import type { FinancialRow } from "@/data/deck";
import CountUp from "@/components/CountUp";

interface FinancialTableProps {
  title: string;
  headers: string[];
  rows: FinancialRow[];
}

export default function FinancialTable({ title, headers, rows }: FinancialTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full"
    >
      <h4 className="text-micro font-mono uppercase tracking-[0.12em] mb-4">
        {title}
      </h4>
      <div className="overflow-x-auto border border-current/10">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-current/30">
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-micro font-mono uppercase tracking-[0.12em] pb-3 pt-3 px-4 last:text-right"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`border-b border-current/[0.08] ${
                  row.highlight
                    ? "font-semibold bg-brand-mustard/10"
                    : ""
                }`}
              >
                <td className="py-3 px-4 text-body-sm">{row.label}</td>
                {row.values.map((v, vi) => (
                  <td
                    key={vi}
                    className={`py-3 px-4 text-body-sm text-right ${
                      vi === 0 ? "font-medium" : "opacity-60"
                    }`}
                  >
                    <CountUp
                      value={String(v)}
                      duration={1400}
                      delay={i * 80 + vi * 100}
                    />
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
