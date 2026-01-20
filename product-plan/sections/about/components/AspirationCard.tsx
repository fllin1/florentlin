import type { Aspiration } from '../types'

interface AspirationCardProps {
  aspiration: Aspiration
  index: number
}

export function AspirationCard({ aspiration, index }: AspirationCardProps) {
  return (
    <div
      className="group relative pl-10 py-4 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Number indicator - positioned to the left */}
      <span
        className="absolute left-0 top-4 text-xs font-medium w-6 text-right"
        style={{
          color: 'var(--primary, #d4a373)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        0{index + 1}
      </span>

      {/* Vertical line accent - to the right of number */}
      <div
        className="absolute left-7 top-4 bottom-4 w-[2px] rounded-full transition-all duration-300 group-hover:h-full group-hover:top-0 group-hover:bottom-0"
        style={{ backgroundColor: 'var(--primary, #d4a373)' }}
      />

      <h4
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{
          color: 'var(--text, #3d3d3d)',
          fontFamily: "'Zen Kaku Gothic New', sans-serif",
        }}
      >
        {aspiration.title}
      </h4>

      <p
        className="text-sm leading-relaxed"
        style={{
          color: 'var(--text-muted, #6b6b6b)',
          fontFamily: "'Noto Sans', sans-serif",
        }}
      >
        {aspiration.description}
      </p>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
