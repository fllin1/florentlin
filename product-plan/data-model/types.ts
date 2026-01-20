// =============================================================================
// Core Entities
// =============================================================================

export interface Profile {
  id: string
  name: string
  title: string
  location: string
  tagline: string
  taglineEmphasis?: string
  socialLinks?: SocialLink[]
}

export interface SocialLink {
  type: 'linkedin' | 'github'
  url: string
  label: string
}

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
  detailUrl: string
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
  detailUrl: string | null
}

export interface Skill {
  id: string
  name: string
  level?: string
  detailUrl: string | null
  githubUrl: string | null
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export interface Aspiration {
  id: string
  title: string
  description: string
}

export interface Hobby {
  id: string
  name: string
  description: string
  icon: 'dumbbell' | 'leaf' | 'brain' | 'globe'
}

export interface ContactLink {
  id: string
  type: 'email' | 'linkedin' | 'github'
  label: string
  value: string
  url: string
  icon: 'mail' | 'linkedin' | 'github'
  primary: boolean
}
