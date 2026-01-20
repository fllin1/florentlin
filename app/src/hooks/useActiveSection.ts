"use client"

import { useState, useEffect } from "react"
import type { SectionId } from "@/types"

const SECTIONS: SectionId[] = ['hero', 'about', 'experience', 'contact']

export function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(SECTIONS[i])
            return
          }
        }
      }

      // Default to hero if no section found
      setActiveSection('hero')
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  } else if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
