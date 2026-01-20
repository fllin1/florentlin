"use client"

import type { AspirationCardProps } from "@/types"

export function AspirationCard({ aspiration, index }: AspirationCardProps) {
  return (
    <div
      className="group relative pl-10 py-4 opacity-0 animate-fade-slide-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Number indicator - positioned to the left */}
      <span
        className="absolute left-0 top-4 text-xs font-medium w-6 text-right text-[var(--color-primary)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        0{index + 1}
      </span>

      {/* Vertical line accent - to the right of number */}
      <div
        className="absolute left-7 top-4 bottom-4 w-[2px] rounded-full transition-all duration-300 group-hover:top-3 group-hover:bottom-3 bg-[var(--color-primary)]"
      />

      <h4
        className="text-lg font-semibold mb-2 transition-colors duration-300 text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {aspiration.title}
      </h4>

      <p
        className="text-sm leading-relaxed text-[var(--color-text-muted)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {aspiration.description}
      </p>
    </div>
  )
}
