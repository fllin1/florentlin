'use client'

import type { ProjectSection } from '@/types/project'

interface TableOfContentsProps {
  sections: ProjectSection[]
  activeSection: string | null
}

export function TableOfContents({ sections, activeSection }: TableOfContentsProps) {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="hidden lg:block sticky top-24 w-48 shrink-0"
      aria-label="Table of contents"
    >
      <h4
        className="text-xs uppercase tracking-[0.2em] mb-4"
        style={{
          color: 'var(--color-text-muted, #6b6b6b)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        Contents
      </h4>
      <ul className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className="text-sm text-left w-full transition-all duration-200 hover:translate-x-1"
                style={{
                  color: isActive
                    ? 'var(--color-primary, #d4a373)'
                    : 'var(--color-text-muted, #6b6b6b)',
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {section.title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
