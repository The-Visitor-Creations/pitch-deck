/**
 * Theme configuration for the mining pitch deck.
 * Industrial dashboard aesthetic — bold, modular, high-contrast.
 */

export const theme = {
  typography: {
    displayFont: "'Space Grotesk', system-ui, sans-serif",
    bodyFont: "'Space Grotesk', system-ui, sans-serif",
    monoFont: "'JetBrains Mono', ui-monospace, monospace",
    scale: {
      displayXl: "6rem",
      displayLg: "4.5rem",
      displayMd: "3rem",
      displaySm: "2rem",
      headingLg: "1.5rem",
      headingMd: "1.125rem",
      bodyLg: "1rem",
      bodyMd: "0.875rem",
      bodySm: "0.75rem",
      caption: "0.625rem",
      micro: "0.5625rem",
    },
  },

  spacing: {
    sectionPadding: "6rem",
    sectionPaddingSm: "4rem",
    gutter: "2rem",
    gutterSm: "1rem",
    cardPadding: "2rem",
    tilePadding: "1.5rem",
  },

  colors: {
    mustard: "#4682B4",
    orange: "#2F4F4F",
    sage: "#2F4F4F",
    charcoal: "#1C1C1C",
    offwhite: "#F5F5DC",

    ink: "#1C1C1C",
    inkLight: "#2D2D2D",
    inkMuted: "#6B6B6B",
    surfaceWhite: "#F5F5DC",
    surfaceWarm: "#EDEDD5",
    surfaceCool: "#E5E5CC",
    surfaceDark: "#1C1C1C",
    accent: "#4682B4",
    accentSoft: "#4682B420",
    success: "#2F4F4F",
    warning: "#4682B4",
  },

  /** Section background tones — each section commits to a dominant colour */
  sectionBackgrounds: [
    "#1C1C1C",     // 0 Cover - near black
    "#4682B4",     // 1 Opportunity - steel blue
    "#2F4F4F",     // 2 Property / Extraction - dark slate gray
    "#3A6B6B",     // 3 Zoning / Processing - lighter slate teal
    "#1C1C1C",     // 4 HomeTypes / Technology - near black
    "#F5F5DC",     // 5 Financials - beige
    "#1C1C1C",     // 6 Team - near black
    "#4682B4",     // 7 Closing - steel blue
  ] as const,

  shadows: {
    card: "none",
    cardHover: "none",
    subtle: "none",
  },

  motion: {
    durationFast: 0.25,
    durationMedium: 0.5,
    durationSlow: 0.8,
    easeSmooth: [0.25, 0.1, 0.25, 1] as const,
    easeOut: [0.0, 0.0, 0.2, 1.0] as const,
    easeOvershoot: [0.22, 1.15, 0.36, 1.0] as const,
  },

  layout: {
    maxWidth: "1400px",
    navWidth: "240px",
    headerHeight: "56px",
    slideAspectRatio: "16/9",
  },
} as const;

export type Theme = typeof theme;
