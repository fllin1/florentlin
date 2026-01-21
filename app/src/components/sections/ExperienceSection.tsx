"use client"

import { ExperienceSkills } from "./ExperienceSkills"
import type { Experience, Education } from "@/types"

export interface ExperienceSectionProps {
  /** Professional history */
  experiences: Experience[]
  /** Educational history */
  education: Education[]
  /** Called when user clicks on an experience item to view details */
  onExperienceClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks on an education item to view details */
  onEducationClick?: (id: string, detailUrl: string) => void
  /** Called when user clicks a GitHub button */
  onGitHubClick?: (url: string) => void
}

export function ExperienceSection({
  experiences,
  education,
  onExperienceClick,
  onEducationClick,
  onGitHubClick,
}: ExperienceSectionProps) {
  return (
    <ExperienceSkills
      experiences={experiences}
      education={education}
      onExperienceClick={onExperienceClick}
      onEducationClick={onEducationClick}
      onGitHubClick={onGitHubClick}
    />
  )
}
