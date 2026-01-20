import type { Hobby } from '../types'

interface HobbyCardProps {
  hobby: Hobby
  index: number
}

const iconPaths: Record<Hobby['icon'], string> = {
  dumbbell: 'M6.5 6.5h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3m11-11h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3M6.5 12h11M6.5 6.5v11M17.5 6.5v11',
  leaf: 'M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5L12 12l7.5 6.5C21 16.8 22 14.5 22 12c0-5.5-4.5-10-10-10z M12 12v10',
  brain: 'M12 4.5c-3.5 0-6.5 2.5-7.5 6 0 0 2 1 4.5 1s4.5-1 4.5-1c.5-1.5 1.5-3 3-4 1.5 1 2.5 2.5 3 4 0 0-2 1-4.5 1s-4.5-1-4.5-1c1 3.5 4 6 7.5 6s6.5-2.5 7.5-6c-1-3.5-4-6-7.5-6z M12 11v8',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20',
}

export function HobbyCard({ hobby, index }: HobbyCardProps) {
  return (
    <div
      className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:translate-x-1 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
      style={{
        animationDelay: `${0.2 + index * 0.1}s`,
        backgroundColor: 'transparent',
      }}
    >
      {/* Icon container */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: 'var(--surface, #faedcd)' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-colors duration-300"
          style={{ color: 'var(--primary, #d4a373)' }}
        >
          <path d={iconPaths[hobby.icon]} />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className="text-base font-medium mb-1"
          style={{
            color: 'var(--text, #3d3d3d)',
            fontFamily: "'Zen Kaku Gothic New', sans-serif",
          }}
        >
          {hobby.name}
        </h4>
        <p
          className="text-sm"
          style={{
            color: 'var(--text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {hobby.description}
        </p>
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
    </div>
  )
}
