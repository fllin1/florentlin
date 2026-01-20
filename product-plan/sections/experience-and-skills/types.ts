// =============================================================================
// Data Types
// =============================================================================

export interface Experience {
  id: string
  company: string
  role: string
  type?: 'Freelance'
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  /** URL to the project detail page */
  detailUrl: string
  /** Optional GitHub repository URL */
  githubUrl: string | null
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  description: string
  /** Optional URL to the project detail page */
  detailUrl: string | null
}

export interface Skill {
  id: string
  name: string
  /** Optional proficiency level (for languages) */
  level?: string
  /** Optional URL to skill detail page */
  detailUrl: string | null
  /** Optional GitHub repository URL */
  githubUrl: string | null
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

// =============================================================================
// Component Props
// =============================================================================

export interface ExperienceSkillsProps {
  /** Professional history */
  experiences: Experience[]
  /** Educational history */
  education: Education[]
  /** Technical skills grouped by category */
  skillCategories: SkillCategory[]
  /** Called when user clicks on an experience item to view details */
  onExperienceClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks on an education item to view details */
  onEducationClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks on a skill with a detail URL */
  onSkillClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks a GitHub button */
  onGitHubClick?: (url: string) => void
}
