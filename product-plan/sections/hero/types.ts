// =============================================================================
// Data Types
// =============================================================================

export interface SocialLink {
  type: 'linkedin' | 'github'
  url: string
  label: string
}

export interface Profile {
  id: string
  name: string
  title: string
  location: string
  tagline: string
  taglineEmphasis?: string
  socialLinks?: SocialLink[]
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeroProps {
  /** The profile data to display in the hero section */
  profile: Profile
  /** Called when a social link is clicked */
  onSocialClick?: (url: string) => void
}
