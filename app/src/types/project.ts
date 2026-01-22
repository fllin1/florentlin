// =============================================================================
// Project Detail Types
// =============================================================================

/**
 * A content block within a project section.
 * Supports text, images, and headings for rich content.
 */
export interface ContentBlock {
  type: 'text' | 'image' | 'heading'
  /** Text content for 'text' and 'heading' types */
  content?: string
  /** Image source URL for 'image' type */
  src?: string
  /** Alt text for 'image' type */
  alt?: string
  /** Optional caption for 'image' type */
  caption?: string
}

/**
 * A section within a project detail page.
 * Each section appears in the table of contents.
 */
export interface ProjectSection {
  /** Unique identifier used for navigation anchors */
  id: string
  /** Display title shown in TOC and section header */
  title: string
  /** Content blocks that make up the section */
  blocks: ContentBlock[]
}

/**
 * Complete project detail data for the project template page.
 */
export interface ProjectDetail {
  /** URL-friendly identifier matching the route parameter */
  slug: string
  /** Project title displayed in hero */
  title: string
  /** Company or organization name */
  company: string
  /** Date range or specific date (e.g., "January 2023" or "2024-2025") */
  date: string
  /** Optional hero/cover image URL */
  heroImage?: string
  /** Ordered list of content sections */
  sections: ProjectSection[]
}
