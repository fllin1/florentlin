import type { SkillCategory as SkillCategoryType } from '@/types'
import { GitHubButton } from './GitHubButton'

interface SkillCategoryProps {
  category: SkillCategoryType
  index: number
  onSkillClick?: (id: string, detailUrl: string) => void
  onGitHubClick?: (url: string) => void
}

export function SkillCategory({
  category,
  index,
  onSkillClick,
  onGitHubClick,
}: SkillCategoryProps) {
  return (
    <div
      className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Category header */}
      <h4
        className="text-xs uppercase tracking-[0.15em] mb-3 pb-2 border-b"
        style={{
          color: 'var(--color-text-muted, #6b6b6b)',
          borderColor: 'var(--color-surface, #faedcd)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {category.name}
      </h4>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const isClickable = skill.detailUrl !== null
          const hasGitHub = skill.githubUrl !== null

          return (
            <div key={skill.id} className="flex items-center gap-1">
              <button
                onClick={() => isClickable && onSkillClick?.(skill.id, skill.detailUrl!)}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm
                  transition-all duration-300
                  ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                `}
                style={{
                  backgroundColor: 'var(--color-surface, #faedcd)',
                  color: 'var(--color-text, #3d3d3d)',
                  fontFamily: "'Noto Sans', sans-serif",
                }}
                disabled={!isClickable}
              >
                <span>{skill.name}</span>
                {skill.level && (
                  <span
                    className="text-xs opacity-60"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    ({skill.level})
                  </span>
                )}
              </button>

              {hasGitHub && (
                <GitHubButton url={skill.githubUrl!} onClick={onGitHubClick} size="sm" />
              )}
            </div>
          )
        })}
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
