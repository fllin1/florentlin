import type { HeroProps } from '../types'

export function Hero({ profile, onSocialClick }: HeroProps) {
  const handleSocialClick = (url: string) => {
    if (onSocialClick) {
      onSocialClick(url)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
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
        <div className="absolute top-6 right-6 flex items-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
          {profile.socialLinks.map((link) => (
            <button
              key={link.type}
              onClick={() => handleSocialClick(link.url)}
              className="group flex items-center gap-1.5 text-sm transition-all duration-300 hover:opacity-70"
              style={{
                color: 'var(--text, #3d3d3d)',
                fontFamily: "'Noto Sans', sans-serif",
              }}
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
          className="text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
          style={{
            color: 'var(--text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {profile.location}
        </p>

        {/* Name - large, bold */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
          style={{ color: 'var(--text, #3d3d3d)' }}
        >
          {profile.name}
        </h1>

        {/* Title - elegant underline accent */}
        <div className="relative inline-block opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide"
            style={{ color: 'var(--primary, #d4a373)' }}
          >
            {profile.title}
          </h2>
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full"
            style={{ backgroundColor: 'var(--secondary, #ccd5ae)' }}
          />
        </div>

        {/* Tagline with emphasis */}
        <p
          className="mt-12 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.8s_forwards]"
          style={{
            color: 'var(--text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {profile.tagline}{' '}
          {profile.taglineEmphasis && (
            <span
              className="italic font-medium"
              style={{
                color: 'var(--primary, #d4a373)',
                fontFamily: "'Zen Kaku Gothic New', serif",
              }}
            >
              {profile.taglineEmphasis}
            </span>
          )}
        </p>

        {/* Scroll arrow - below tagline */}
        <div className="mt-16 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 animate-[arrowBounce_2s_ease-in-out_infinite]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-muted, #6b6b6b)', opacity: 0.5 }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative brush stroke accent - positioned asymmetrically */}
      <div
        className="absolute top-1/4 -right-20 w-40 h-[2px] rotate-45 opacity-20"
        style={{ backgroundColor: 'var(--primary, #d4a373)' }}
      />
      <div
        className="absolute bottom-1/3 -left-16 w-32 h-[1px] -rotate-12 opacity-15"
        style={{ backgroundColor: 'var(--secondary, #ccd5ae)' }}
      />

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
