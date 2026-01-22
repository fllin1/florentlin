import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'
import { ProjectLayout } from '@/components/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectLayout project={project} />
}

/**
 * Generate static params for all known projects
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

/**
 * Generate metadata for each project page
 */
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | ${project.company}`,
    description: `${project.title} - ${project.company} (${project.date})`,
  }
}
