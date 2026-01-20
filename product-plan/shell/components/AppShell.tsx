import { Logo } from './Logo'
import { SectionNav, SectionNavItem } from './SectionNav'

// Utility function for class name merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

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
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
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
