import type { Education } from '../types'

interface EducationCardProps {
  education: Education
  index: number
  onClick?: (id: string, detailUrl: string) => void
}

export function EducationCard({
  education,
  index,
  onClick,
}: EducationCardProps) {
  const handleClick = () => {
    if (education.detailUrl) {
      onClick?.(education.id, education.detailUrl)
    }
  }

  const formatDate = (date: string) => {
    const [year, month] = date.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  const isClickable = education.detailUrl !== null

  return (
    <div
      className={`group relative p-5 rounded-lg transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] ${
        isClickable ? 'cursor-pointer hover:translate-x-1' : ''
      }`}
      style={{
        animationDelay: `${0.1 + index * 0.1}s`,
        backgroundColor: 'var(--surface, #faedcd)',
      }}
      onClick={handleClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => isClickable && e.key === 'Enter' && handleClick()}
    >
      {/* Hover accent line */}
      {isClickable && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'var(--secondary, #ccd5ae)' }}
        />
      )}

      {/* Header row */}
      <div className="mb-2">
        <h4
          className="text-base font-semibold"
          style={{
            color: 'var(--text, #3d3d3d)',
            fontFamily: "'Zen Kaku Gothic New', sans-serif",
          }}
        >
          {education.institution}
        </h4>
        <p
          className="text-sm mt-1"
          style={{ color: 'var(--primary, #d4a373)' }}
        >
          {education.degree}
        </p>
        <p
          className="text-xs mt-1"
          style={{
            color: 'var(--text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {education.field}
        </p>
      </div>

      {/* Meta row */}
      <div
        className="flex items-center gap-3 text-xs mb-3"
        style={{
          color: 'var(--text-muted, #6b6b6b)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <span>{education.location}</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>
          {formatDate(education.startDate)} — {formatDate(education.endDate)}
        </span>
      </div>

      {/* Description */}
      {education.description && (
        <p
          className="text-sm leading-relaxed"
          style={{
            color: 'var(--text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {education.description}
        </p>
      )}

      {/* Arrow indicator */}
      {isClickable && (
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-1"
          style={{ color: 'var(--secondary, #ccd5ae)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}

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
