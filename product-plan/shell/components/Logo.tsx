// Utility function for class name merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface LogoProps {
  onClick?: () => void
  className?: string
}

export function Logo({ onClick, className }: LogoProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'fixed top-6 left-6 z-50',
        'w-12 h-12 rounded-full',
        // Glassmorphism effect
        'bg-white/60 dark:bg-black/40',
        'backdrop-blur-xl',
        'border border-white/20 dark:border-white/10',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        // Hover effect
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-xl',
        'hover:bg-white/80 dark:hover:bg-black/60',
        // Focus
        'focus:outline-none focus:ring-2 focus:ring-[#d4a373]/50',
        className
      )}
      aria-label="Go to home"
    >
      {/* Placeholder - replace with actual logo */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4a373] to-[#ccd5ae] opacity-80" />
    </button>
  )
}
