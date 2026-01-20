"use client"

import { cn } from "@/lib/utils"
import { Logo } from "./Logo"
import { SectionNav } from "./SectionNav"
import type { SectionNavItem } from "@/types"

interface AppShellProps {
  children: React.ReactNode
  sections: SectionNavItem[]
  onNavigateHome?: () => void
  onNavigateSection?: (id: string) => void
  className?: string
}

export function AppShell({
  children,
  sections,
  onNavigateHome,
  onNavigateSection,
  className,
}: AppShellProps) {
  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-[#fefae0] dark:bg-[#1a1a1a]',
        'text-[#3d3d3d] dark:text-[#fefae0]',
        'transition-colors duration-300',
        className
      )}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Fixed Logo - Top Left */}
      <Logo onClick={onNavigateHome} />

      {/* Fixed Section Navigation - Right Side */}
      <SectionNav items={sections} onNavigate={onNavigateSection} />

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
