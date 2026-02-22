import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mustard: "#4682B4",
          orange: "#2F4F4F",
          sage: "#2F4F4F",
          charcoal: "#1C1C1C",
          offwhite: "#F5F5DC",
        },
        ink: {
          DEFAULT: "#1C1C1C",
          light: "#2D2D2D",
          muted: "#6B6B6B",
        },
        surface: {
          DEFAULT: "#F5F5DC",
          warm: "#EDEDD5",
          cool: "#E5E5CC",
          dark: "#1C1C1C",
          white: "#F5F5DC",
        },
        accent: {
          DEFAULT: "#4682B4",
          soft: "#4682B420",
        },
        success: "#2F4F4F",
        warning: "#4682B4",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["6rem",     { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["4.5rem",   { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-md": ["3rem",     { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-sm": ["2rem",     { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading-lg": ["1.5rem",   { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "heading-md": ["1.125rem", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "body-lg":    ["1rem",     { lineHeight: "1.5" }],
        "body-md":    ["0.875rem", { lineHeight: "1.5" }],
        "body-sm":    ["0.75rem",  { lineHeight: "1.4" }],
        "caption":    ["0.625rem", { lineHeight: "1.3", letterSpacing: "0.08em" }],
        "micro":      ["0.5625rem",{ lineHeight: "1.2", letterSpacing: "0.12em" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
        gutter: "2rem",
        "gutter-sm": "1rem",
      },
      borderRadius: {
        card: "0px",
      },
      boxShadow: {
        card: "none",
        "card-hover": "none",
        subtle: "none",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        overshoot: "cubic-bezier(0.22, 1.15, 0.36, 1.0)",
      },
    },
  },
  plugins: [],
};

export default config;
