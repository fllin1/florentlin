import type { Experience } from '@/types'
import { GitHubButton } from './GitHubButton'

interface ExperienceCardProps {
  experience: Experience
  index: number
  onClick?: (id: string, detailUrl: string) => void
  onGitHubClick?: (url: string) => void
}

export function ExperienceCard({
  experience,
  index,
  onClick,
  onGitHubClick,
}: ExperienceCardProps) {
  const handleClick = () => {
    onClick?.(experience.id, experience.detailUrl)
  }

  const formatDate = (date: string | null, current: boolean) => {
    if (current) return 'Present'
    if (!date) return ''
    const [year, month] = date.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <div
      className="group relative p-5 rounded-lg cursor-pointer transition-all duration-300 hover:translate-x-1 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
      style={{
        animationDelay: `${0.1 + index * 0.1}s`,
        backgroundColor: 'var(--color-surface, #faedcd)',
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Hover accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'var(--color-primary, #d4a373)' }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className="text-base font-semibold"
              style={{
                color: 'var(--color-text, #3d3d3d)',
                fontFamily: "'Zen Kaku Gothic New', sans-serif",
              }}
            >
              {experience.company}
            </h4>
            {experience.type && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'var(--color-secondary, #ccd5ae)',
                  color: 'var(--color-text, #3d3d3d)',
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {experience.type}
              </span>
            )}
          </div>
          <p
            className="text-sm mt-1"
            style={{ color: 'var(--color-primary, #d4a373)' }}
          >
            {experience.role}
          </p>
        </div>

        {/* GitHub button */}
        {experience.githubUrl && (
          <div onClick={(e) => e.stopPropagation()}>
            <GitHubButton url={experience.githubUrl} onClick={onGitHubClick} />
          </div>
        )}
      </div>

      {/* Meta row */}
      <div
        className="flex items-center gap-3 text-xs mb-3"
        style={{
          color: 'var(--color-text-muted, #6b6b6b)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <span>{experience.location}</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>
          {formatDate(experience.startDate, false)} — {formatDate(experience.endDate, experience.current)}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: 'var(--color-text-muted, #6b6b6b)',
          fontFamily: "'Noto Sans', sans-serif",
        }}
      >
        {experience.description}
      </p>

      {/* Arrow indicator */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-1"
        style={{ color: 'var(--color-primary, #d4a373)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
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
