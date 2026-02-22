import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mining Pitch Deck — Investor Deck (Print)",
};

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
              @font-face {
                font-family: 'JetBrains Mono';
                src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2');
                font-weight: 400;
                font-style: normal;
                font-display: block;
              }
              @font-face {
                font-family: 'JetBrains Mono';
                src: url('/fonts/JetBrainsMono-Medium.woff2') format('woff2');
                font-weight: 500;
                font-style: normal;
                font-display: block;
              }
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: 'Space Grotesk', system-ui, sans-serif;
                background: #F5F5DC;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
