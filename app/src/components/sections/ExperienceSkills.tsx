import type { Experience, Education } from '@/types'
import { ExperienceCard } from './ExperienceCard'
import { EducationCard } from './EducationCard'

// Static data
const KEY_PROJECTS = [
  { name: 'MAWA', description: 'Multimodal RAG pipeline', url: 'https://github.com/fllin1/mawa' },
  { name: 'Global Franchises', description: 'Semantic recommendation system', url: 'https://github.com/fllin1/global-franchises' },
]

const LANGUAGES = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Chinese', level: 'Basic' },
]

// Shared styles
const subsectionHeaderStyle = {
  color: 'var(--color-text-muted, #6b6b6b)',
  borderColor: 'var(--color-surface, #faedcd)',
}

export interface ExperienceSkillsProps {
  experiences: Experience[]
  education: Education[]
  onExperienceClick?: (id: string, detailUrl: string) => void
  onEducationClick?: (id: string, detailUrl: string) => void
  onGitHubClick?: (url: string) => void
}

export function ExperienceSkills({
  experiences,
  education,
  onExperienceClick,
  onEducationClick,
  onGitHubClick,
}: ExperienceSkillsProps) {
  const regularExperiences = experiences.filter(e => e.type !== 'Freelance')
  const freelanceExperiences = experiences.filter(e => e.type === 'Freelance')

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-surface)]/50"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: 'var(--color-text, #3d3d3d)',
              fontFamily: "'Zen Kaku Gothic New', sans-serif",
            }}
          >
            Experience & Skills
          </h2>
          <div
            className="w-16 h-[2px] mx-auto rounded-full"
            style={{ backgroundColor: 'var(--color-primary, #d4a373)' }}
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b" style={subsectionHeaderStyle}>
              Experience
            </h3>
            <div className="space-y-4">
              {regularExperiences.map((exp, i) => (
                <ExperienceCard key={exp.id} experience={exp} index={i} onClick={onExperienceClick} onGitHubClick={onGitHubClick} />
              ))}
            </div>
          </div>

          {/* Freelance */}
          {freelanceExperiences.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b" style={subsectionHeaderStyle}>
                Freelance
              </h3>
              <div className="space-y-4">
                {freelanceExperiences.map((exp, i) => (
                  <ExperienceCard key={exp.id} experience={exp} index={i} onClick={onExperienceClick} onGitHubClick={onGitHubClick} showBadge={false} />
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b" style={subsectionHeaderStyle}>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <EducationCard key={edu.id} education={edu} index={i} onClick={onEducationClick} />
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b" style={subsectionHeaderStyle}>
              Key Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KEY_PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg transition-all duration-200 hover:translate-x-1"
                  style={{ backgroundColor: 'var(--color-background, #fefae0)' }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-text, #3d3d3d)', fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                    >
                      {project.name}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--color-text-muted, #6b6b6b)' }}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted, #6b6b6b)' }}>
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b" style={subsectionHeaderStyle}>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className="text-sm px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-background, #fefae0)', color: 'var(--color-text, #3d3d3d)' }}
                >
                  {lang.name}
                  <span className="ml-1.5 text-xs" style={{ color: 'var(--color-text-muted, #6b6b6b)' }}>
                    {lang.level}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
