// =============================================================================
// Data Types
// =============================================================================

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

export interface Personality {
  quote: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface AboutProps {
  /** Professional goals and ambitions */
  aspirations: Aspiration[]
  /** Personal interests and activities */
  hobbies: Hobby[]
  /** Core values and beliefs */
  personality: Personality
}
