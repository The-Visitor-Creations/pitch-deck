"use client";

import { memo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ComposedChart,
} from "recharts";
import { stockHistory, stockTicker } from "@/data/deck";

function useContainerWidth(fallback = 500) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setWidth(w);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { containerRef: ref, width };
}

const tooltipStyle = {
  background: "#1C1C1C",
  color: "#ffffff",
  border: "none",
  borderRadius: "0px",
  fontSize: "12px",
};

interface StockChartProps {
  height?: number;
  dark?: boolean;
}

function StockChart({ height = 260, dark = false }: StockChartProps) {
  const { containerRef, width } = useContainerWidth();
  const t = stockTicker;
  const isUp = t.change >= 0;

  const gridColor = dark ? "rgba(255,255,255,0.08)" : "rgba(26,26,26,0.08)";
  const axisColor = dark ? "rgba(255,255,255,0.3)" : "rgba(26,26,26,0.4)";
  const labelColor = dark ? "text-white/50" : "text-ink-muted/50";
  const valueColor = dark ? "text-white" : "text-ink";
  const borderColor = dark ? "border-white/10" : "border-ink/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Header row */}
      <div className="flex items-end justify-between mb-3">
        <div>
          <h4 className="text-micro font-mono uppercase tracking-[0.12em] mb-1">
            Share Price — {t.exchange}:{t.symbol}
          </h4>
          <div className="flex items-baseline gap-3">
            <span className={`text-display-sm font-display font-bold tracking-tight ${valueColor}`}>
              ${t.price.toFixed(2)}
            </span>
            <span
              className={`text-body-sm font-mono font-medium ${
                isUp ? "text-green-600" : "text-red-500"
              }`}
            >
              {isUp ? "+" : ""}{t.change.toFixed(2)} ({isUp ? "+" : ""}{t.changePct.toFixed(1)}%)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-right">
          <div>
            <span className={`block text-micro font-mono uppercase tracking-wider ${labelColor}`}>52w High</span>
            <span className={`block text-body-sm font-medium ${valueColor}`}>${t.high52w.toFixed(2)}</span>
          </div>
          <div>
            <span className={`block text-micro font-mono uppercase tracking-wider ${labelColor}`}>52w Low</span>
            <span className={`block text-body-sm font-medium ${valueColor}`}>${t.low52w.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div ref={containerRef} className={`w-full border ${borderColor} p-3`} style={{ height: height + 24 }}>
        {width > 0 && (
          <ComposedChart
            width={width - 24}
            height={height}
            data={stockHistory}
            margin={{ top: 5, right: 5, bottom: 0, left: -10 }}
          >
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4682B4" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4682B4" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke={gridColor}
              strokeDasharray="2 4"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: axisColor }}
              axisLine={{ stroke: gridColor }}
              tickLine={false}
            />
            <YAxis
              yAxisId="price"
              domain={["dataMin - 0.3", "dataMax + 0.3"]}
              tick={{ fontSize: 10, fill: axisColor }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v.toFixed(1)}`}
            />
            <YAxis
              yAxisId="vol"
              orientation="right"
              hide
              domain={[0, "dataMax * 4"]}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(val, name) => {
                const v = val as number;
                if (name === "price") return [`$${v.toFixed(2)}`, "Price"];
                return [`${v}K`, "Volume"];
              }}
            />
            <Bar
              yAxisId="vol"
              dataKey="volume"
              fill={dark ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.06)"}
              radius={[1, 1, 0, 0]}
              name="volume"
            />
            <Area
              yAxisId="price"
              type="monotone"
              dataKey="price"
              stroke="#4682B4"
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={{ r: 3, fill: "#4682B4", stroke: dark ? "#1C1C1C" : "#F5F5DC", strokeWidth: 2 }}
              activeDot={{ r: 5, fill: "#4682B4" }}
              name="price"
            />
          </ComposedChart>
        )}
      </div>
    </motion.div>
  );
}

export default memo(StockChart);
