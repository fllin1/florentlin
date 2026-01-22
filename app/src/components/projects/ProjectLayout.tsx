'use client'

import type { ProjectDetail } from '@/types/project'
import { ProjectHero } from './ProjectHero'
import { TableOfContents } from './TableOfContents'
import { ContentSection } from './ContentSection'
import { useProjectSections } from '@/hooks/useProjectSections'

interface ProjectLayoutProps {
  project: ProjectDetail
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const sectionIds = project.sections.map((s) => s.id)
  const activeSection = useProjectSections(sectionIds)

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-background, #fefae0)' }}
    >
      {/* Hero */}
      <ProjectHero project={project} />

      {/* Main content with TOC */}
      <div className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          {/* Content sections */}
          <main className="flex-1 min-w-0 space-y-12">
            {project.sections.map((section, index) => (
              <ContentSection key={section.id} section={section} index={index} />
            ))}
          </main>

          {/* Table of Contents - sticky sidebar */}
          <TableOfContents
            sections={project.sections}
            activeSection={activeSection}
          />
        </div>
      </div>
    </div>
  )
}
