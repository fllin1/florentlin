import type { ProjectDetail } from '@/types/project'
import { sncf } from './sncf'
import { aubay } from './aubay'
import { mewe } from './mewe'
import { franchisesGlobal } from './franchises-global'
import { deloitte } from './deloitte'
import { ensae } from './ensae'

// =============================================================================
// Project Data
// =============================================================================

export const projects: Record<string, ProjectDetail> = {
  sncf,
  aubay,
  mewe,
  'franchises-global': franchisesGlobal,
  deloitte,
  ensae,
}

/**
 * Get a project by its slug
 */
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects[slug]
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): string[] {
  return Object.keys(projects)
}
