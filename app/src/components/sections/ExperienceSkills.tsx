import type { Experience, Education, SkillCategory as SkillCategoryType } from '@/types'
import { ExperienceCard } from './ExperienceCard'
import { EducationCard } from './EducationCard'
import { SkillCategory } from './SkillCategory'

export interface ExperienceSkillsProps {
  /** Professional history */
  experiences: Experience[]
  /** Educational history */
  education: Education[]
  /** Technical skills grouped by category */
  skillCategories: SkillCategoryType[]
  /** Called when user clicks on an experience item to view details */
  onExperienceClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks on an education item to view details */
  onEducationClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks on a skill with a detail URL */
  onSkillClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks a GitHub button */
  onGitHubClick?: (url: string) => void
}

export function ExperienceSkills({
  experiences,
  education,
  skillCategories,
  onExperienceClick,
  onEducationClick,
  onSkillClick,
  onGitHubClick,
}: ExperienceSkillsProps) {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24"
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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column: Experience + Education */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <h3
                className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b"
                style={{
                  color: 'var(--color-text-muted, #6b6b6b)',
                  borderColor: 'var(--color-surface, #faedcd)',
                }}
              >
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                    onClick={onExperienceClick}
                    onGitHubClick={onGitHubClick}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3
                className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b"
                style={{
                  color: 'var(--color-text-muted, #6b6b6b)',
                  borderColor: 'var(--color-surface, #faedcd)',
                }}
              >
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <EducationCard
                    key={edu.id}
                    education={edu}
                    index={index}
                    onClick={onEducationClick}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Skills */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b"
              style={{
                color: 'var(--color-text-muted, #6b6b6b)',
                borderColor: 'var(--color-surface, #faedcd)',
              }}
            >
              Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={category.id}
                  category={category}
                  index={index}
                  onSkillClick={onSkillClick}
                  onGitHubClick={onGitHubClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
