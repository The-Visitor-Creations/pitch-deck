"use client";

import { memo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
} from "recharts";

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface CashflowData {
  quarter: string;
  inflow: number;
  outflow: number;
  cumulative: number;
}

interface ChartBlockProps {
  type: "pie" | "cashflow";
  title: string;
  data: PieChartData[] | CashflowData[];
  height?: number;
}

const formatCurrency = (val: number) => {
  if (Math.abs(val) >= 1000) return `$${(val / 1000).toFixed(1)}M`;
  return `$${val}K`;
};

/**
 * Hook that defers rendering until the element is visible in the viewport.
 * Eliminates Recharts "width(-1) height(-1)" warnings from off-screen charts.
 */
function useIsVisible(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/**
 * Hook to measure the width of a container element for chart sizing.
 * Avoids ResponsiveContainer entirely — gives charts explicit px dimensions.
 */
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

const CHART_COLORS = {
  primary: "#1C1C1C",
  secondary: "#4682B4",
  tertiary: "#2F4F4F",
  quaternary: "#2F4F4F",
};

const tooltipStyle = {
  background: "#1C1C1C",
  color: "#ffffff",
  border: "none",
  borderRadius: "0px",
  fontSize: "13px",
};

function ChartBlock({
  type,
  title,
  data,
  height: heightProp,
}: ChartBlockProps) {
  const height = heightProp ?? (type === "pie" ? 220 : 300);
  const { ref: visRef, visible } = useIsVisible();
  const { containerRef, width: cashflowWidth } = useContainerWidth();

  return (
    <motion.div
      ref={visRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h4 className="text-micro font-mono uppercase tracking-[0.12em] text-ink mb-2">
        {title}
      </h4>

      <div className="border border-ink/10 p-3">
        {type === "pie" && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0" style={{ width: 200, height }}>
              {visible ? (
                <PieChart width={200} height={height} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <Pie
                    data={data as PieChartData[]}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={80}
                    paddingAngle={1}
                    dataKey="value"
                    animationBegin={200}
                    animationDuration={800}
                  >
                    {(data as PieChartData[]).map((entry, i) => (
                      <Cell key={i} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val) => formatCurrency((val as number) / 1000)}
                    contentStyle={tooltipStyle}
                  />
                </PieChart>
              ) : (
                <div style={{ width: 200, height }} />
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              {(data as PieChartData[]).map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 flex-shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-body-sm text-ink-light">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "cashflow" && (
          <div ref={containerRef} className="w-full" style={{ height }}>
            {visible && cashflowWidth > 0 ? (
              <ComposedChart width={cashflowWidth - 32} height={height} data={data as CashflowData[]}>
                <CartesianGrid
                  stroke="#1C1C1C"
                  strokeOpacity={0.08}
                  strokeDasharray="2 4"
                />
                <XAxis
                  dataKey="quarter"
                  tick={{ fontSize: 12, fill: "#8a8a8a" }}
                  axisLine={{ stroke: "#1C1C1C", strokeOpacity: 0.15 }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#8a8a8a" }}
                  axisLine={{ stroke: "#1C1C1C", strokeOpacity: 0.15 }}
                  tickFormatter={(v) => `$${v}K`}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(val) => [`$${val}K`, ""]}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="inflow"
                  fill={CHART_COLORS.secondary}
                  name="Inflows"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="outflow"
                  fill={CHART_COLORS.quaternary}
                  name="Outflows"
                  radius={[0, 0, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="cumulative"
                  stroke={CHART_COLORS.primary}
                  strokeWidth={2}
                  dot={{ r: 4, fill: CHART_COLORS.primary }}
                  name="Cumulative"
                />
              </ComposedChart>
            ) : (
              <div style={{ width: "100%", height }} />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default memo(ChartBlock);
