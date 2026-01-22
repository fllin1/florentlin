import type { ProjectDetail } from '@/types/project'
import Link from 'next/link'

interface ProjectHeroProps {
  project: ProjectDetail
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24">
      {/* Back button */}
      <Link
        href="/#experience"
        className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70"
        style={{
          color: 'var(--color-text-muted, #6b6b6b)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to portfolio
      </Link>

      {/* Title and metadata */}
      <div className="max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
          style={{
            color: 'var(--color-text, #3d3d3d)',
            fontFamily: "'Zen Kaku Gothic New', sans-serif",
          }}
        >
          {project.title}
        </h1>
        <p
          className="text-lg opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]"
          style={{
            color: 'var(--color-text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {project.company} — {project.date}
        </p>
      </div>

      {/* Hero image if provided */}
      {project.heroImage && (
        <div
          className="mt-12 rounded-lg overflow-hidden opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
          style={{ backgroundColor: 'var(--color-surface, #faedcd)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={`${project.title} hero`}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  )
}
