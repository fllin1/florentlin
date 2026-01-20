"use client"

import { ExperienceSkills } from "./ExperienceSkills"
import type { Experience, Education, SkillCategory } from "@/types"

export interface ExperienceSectionProps {
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

export function ExperienceSection({
  experiences,
  education,
  skillCategories,
  onExperienceClick,
  onEducationClick,
  onSkillClick,
  onGitHubClick,
}: ExperienceSectionProps) {
  return (
    <ExperienceSkills
      experiences={experiences}
      education={education}
      skillCategories={skillCategories}
      onExperienceClick={onExperienceClick}
      onEducationClick={onEducationClick}
      onSkillClick={onSkillClick}
      onGitHubClick={onGitHubClick}
    />
  )
}
