import type { AboutProps } from '../types'
import { AspirationCard } from './AspirationCard'
import { HobbyCard } from './HobbyCard'

export function About({ aspirations, hobbies }: Omit<AboutProps, 'personality'>) {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: 'var(--text, #3d3d3d)',
              fontFamily: "'Zen Kaku Gothic New', sans-serif",
            }}
          >
            About
          </h2>
          <div
            className="w-16 h-[2px] mx-auto rounded-full"
            style={{ backgroundColor: 'var(--primary, #d4a373)' }}
          />
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Aspirations */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b"
              style={{
                color: 'var(--text-muted, #6b6b6b)',
                borderColor: 'var(--surface, #faedcd)',
              }}
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
              className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b"
              style={{
                color: 'var(--text-muted, #6b6b6b)',
                borderColor: 'var(--surface, #faedcd)',
              }}
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
    </section>
  )
}
