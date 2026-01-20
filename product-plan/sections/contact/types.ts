// =============================================================================
// Data Types
// =============================================================================

export interface ContactLink {
  id: string
  type: 'email' | 'linkedin' | 'github'
  label: string
  value: string
  url: string
  icon: 'mail' | 'linkedin' | 'github'
  /** Whether this is the primary contact method */
  primary: boolean
}

// =============================================================================
// Component Props
// =============================================================================

export interface ContactProps {
  /** Array of contact links to display */
  contactLinks: ContactLink[]
  /** Called when user clicks a contact link */
  onContactClick?: (id: string, url: string) => void
}
