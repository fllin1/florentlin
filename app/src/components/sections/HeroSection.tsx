"use client"

import type { HeroProps } from "@/types"

export function HeroSection({ profile, onSocialClick }: HeroProps) {
  const handleSocialClick = (url: string) => {
    if (onSocialClick) {
      onSocialClick(url)
    } else {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {/* Subtle ink-wash texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Social Links - Top Right */}
      {profile.socialLinks && profile.socialLinks.length > 0 && (
        <div className="absolute top-6 right-6 flex items-center gap-4 opacity-0 animate-fade-in">
          {profile.socialLinks.map((link) => (
            <button
              key={link.type}
              onClick={() => handleSocialClick(link.url)}
              className="group flex items-center gap-1.5 text-sm transition-all duration-300 hover:opacity-70 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>{link.label}</span>
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Location - subtle, above name */}
        <p
          className="text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-slide-up animation-delay-200 text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {profile.location}
        </p>

        {/* Name - large, bold */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 opacity-0 animate-fade-slide-up animation-delay-400 text-[var(--color-text)]"
        >
          {profile.name}
        </h1>

        {/* Title - elegant underline accent */}
        <div className="relative inline-block opacity-0 animate-fade-slide-up animation-delay-600">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-[var(--color-primary)]"
          >
            {profile.title}
          </h2>
        </div>

        {/* Tagline with emphasis */}
        <p
          className="mt-12 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-slide-up animation-delay-800 text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {profile.tagline}{" "}
          {profile.taglineEmphasis && (
            <span
              className="italic font-medium text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {profile.taglineEmphasis}
            </span>
          )}
        </p>

        {/* Scroll arrow - below tagline */}
        <div className="mt-16 opacity-0 animate-fade-in animation-delay-1200">
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 animate-arrow-bounce text-[var(--color-text-muted)] opacity-50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative brush stroke accent - positioned asymmetrically */}
      <div
        className="absolute top-1/4 -right-20 w-40 h-[2px] rotate-45 opacity-20 bg-[var(--color-primary)]"
      />
      <div
        className="absolute bottom-1/3 -left-16 w-32 h-[1px] -rotate-12 opacity-15 bg-[var(--color-secondary)]"
      />
    </section>
  )
}
