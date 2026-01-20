"use client"

import type { AboutProps } from "@/types"
import { AspirationCard } from "./AspirationCard"
import { HobbyCard } from "./HobbyCard"

export function AboutSection({ aspirations, hobbies }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-surface)]/50"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About
          </h2>
          <div className="w-16 h-[2px] mx-auto rounded-full bg-[var(--color-primary)]" />
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Aspirations */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b text-[var(--color-text-muted)] border-[var(--color-surface)]"
            >
              Aspirations
            </h3>
            <div className="space-y-2">
              {aspirations.map((aspiration, index) => (
                <AspirationCard
                  key={aspiration.id}
                  aspiration={aspiration}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b text-[var(--color-text-muted)] border-[var(--color-surface)]"
            >
              Hobbies
            </h3>
            <div className="space-y-1">
              {hobbies.map((hobby, index) => (
                <HobbyCard key={hobby.id} hobby={hobby} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
