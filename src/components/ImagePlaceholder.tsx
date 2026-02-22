"use client";

import { useState } from "react";

interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
  src?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspect = "16/9",
  src,
  className = "",
}: ImagePlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showPlaceholder = !src || errored || !loaded;

  return (
    <div
      className={`relative bg-current/5 border border-current/10 overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src && !errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      ) : null}
      {showPlaceholder && (
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
          {/* Crosshatch placeholder icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="mb-2"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="32" height="32" />
            <line x1="4" y1="4" x2="36" y2="36" />
            <line x1="36" y1="4" x2="4" y2="36" />
          </svg>
          <span className="text-micro font-mono uppercase tracking-[0.12em]">{label}</span>
        </div>
      )}
    </div>
  );
}
