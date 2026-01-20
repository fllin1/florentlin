"use client"

import type { HobbyCardProps, Hobby } from "@/types"

const iconPaths: Record<Hobby["icon"], string> = {
  dumbbell:
    "M6.5 6.5h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3m11-11h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3M6.5 12h11M6.5 6.5v11M17.5 6.5v11",
  leaf: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z",
  brain:
    "m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
  globe: "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25",
}

export function HobbyCard({ hobby, index }: HobbyCardProps) {
  return (
    <div
      className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:translate-x-1 opacity-0 animate-fade-slide-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Icon container */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-[var(--color-surface)]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-colors duration-300 text-[var(--color-primary)]"
        >
          <path d={iconPaths[hobby.icon]} />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className="text-base font-medium mb-1 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {hobby.name}
        </h4>
        <p
          className="text-sm text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {hobby.description}
        </p>
      </div>
    </div>
  )
}
