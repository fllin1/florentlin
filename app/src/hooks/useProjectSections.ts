'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to track which section is currently active based on scroll position.
 * Uses IntersectionObserver to detect when sections enter/leave the viewport.
 */
export function useProjectSections(sectionIds: string[]): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(
    sectionIds.length > 0 ? sectionIds[0] : null
  )

  useEffect(() => {
    if (sectionIds.length === 0) return

    const observers: IntersectionObserver[] = []
    const visibleSections = new Map<string, number>()

    const updateActiveSection = () => {
      // Find the section with the highest visibility ratio
      let maxRatio = 0
      let mostVisible: string | null = null

      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          mostVisible = id
        }
      })

      // If no section is significantly visible, use the first visible one by document order
      if (!mostVisible || maxRatio < 0.1) {
        for (const id of sectionIds) {
          if (visibleSections.has(id) && visibleSections.get(id)! > 0) {
            mostVisible = id
            break
          }
        }
      }

      if (mostVisible) {
        setActiveSection(mostVisible)
      }
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio)
            } else {
              visibleSections.delete(id)
            }
            updateActiveSection()
          })
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection
}
