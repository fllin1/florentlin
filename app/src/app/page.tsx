"use client"

import { useRouter } from "next/navigation"
import { AppShell } from "@/components/shell"
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ContactSection
} from "@/components/sections"
import { useActiveSection, scrollToSection } from "@/hooks"
import { profile, aspirations, hobbies, experiences, education, contactLinks } from "@/data"
import type { SectionNavItem } from "@/types"

export default function Home() {
  const router = useRouter()
  const activeSection = useActiveSection()

  const sections: SectionNavItem[] = [
    { id: 'hero', label: 'Hero', isActive: activeSection === 'hero' },
    { id: 'experience', label: 'Experience', isActive: activeSection === 'experience' },
    { id: 'about', label: 'About', isActive: activeSection === 'about' },
    { id: 'contact', label: 'Contact', isActive: activeSection === 'contact' },
  ]

  const handleNavigateHome = () => {
    scrollToSection('hero')
  }

  const handleNavigateSection = (id: string) => {
    scrollToSection(id)
  }

  const handleSocialClick = (url: string) => {
    // Opens in new tab - can be extended for analytics tracking
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Experience section callbacks
  const handleExperienceClick = (_id: string, detailUrl: string) => {
    router.push(detailUrl)
  }

  const handleEducationClick = (_id: string, detailUrl: string) => {
    router.push(detailUrl)
  }

  const handleGitHubClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Contact section callback
  const handleContactClick = (id: string, url: string) => {
    // For email links, open in mail client
    // For social links, open in new tab
    // Can be extended for analytics tracking
    const link = contactLinks.find((l) => l.id === id)
    if (link?.type === "email") {
      window.location.href = url
    } else {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <AppShell
      sections={sections}
      onNavigateHome={handleNavigateHome}
      onNavigateSection={handleNavigateSection}
    >
      <HeroSection profile={profile} onSocialClick={handleSocialClick} />
      <ExperienceSection
        experiences={experiences}
        education={education}
        onExperienceClick={handleExperienceClick}
        onEducationClick={handleEducationClick}
        onGitHubClick={handleGitHubClick}
      />
      <AboutSection aspirations={aspirations} hobbies={hobbies} />
      <ContactSection contactLinks={contactLinks} onContactClick={handleContactClick} />
    </AppShell>
  )
}
