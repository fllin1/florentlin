// Utility function for class name merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export interface SectionNavItem {
  id: string
  label: string
  isActive?: boolean
}

interface SectionNavProps {
  items: SectionNavItem[]
  onNavigate?: (id: string) => void
  className?: string
}

export function SectionNav({ items, onNavigate, className }: SectionNavProps) {
  return (
    <nav
      className={cn(
        'fixed right-6 top-1/2 -translate-y-1/2 z-50',
        // Glassmorphism container
        'px-3 py-6 rounded-full',
        'bg-white/40 dark:bg-black/30',
        'backdrop-blur-xl',
        'border border-white/30 dark:border-white/10',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        className
      )}
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-center gap-5">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate?.(item.id)}
              className={cn(
                'group relative flex items-center justify-center',
                'transition-all duration-300 ease-out',
                'focus:outline-none'
              )}
              aria-label={`Navigate to ${item.label}`}
              aria-current={item.isActive ? 'true' : undefined}
            >
              {/* The dot/circle indicator */}
              <span
                className={cn(
                  'block rounded-full transition-all duration-300 ease-out',
                  item.isActive
                    ? [
                        // Active: larger circle outline
                        'w-4 h-4',
                        'bg-transparent',
                        'border-2 border-[#d4a373]',
                        'shadow-sm shadow-[#d4a373]/30',
                      ]
                    : [
                        // Inactive: small filled dot
                        'w-2 h-2',
                        'bg-[#3d3d3d]/40 dark:bg-[#fefae0]/40',
                        'group-hover:bg-[#d4a373] group-hover:scale-125',
                      ]
                )}
              />
              
              {/* Tooltip label on hover */}
              <span
                className={cn(
                  'absolute right-full mr-4 px-3 py-1.5 rounded-lg',
                  'text-sm font-medium whitespace-nowrap',
                  'bg-white/80 dark:bg-black/60',
                  'backdrop-blur-md',
                  'border border-white/30 dark:border-white/10',
                  'text-[#3d3d3d] dark:text-[#fefae0]',
                  'opacity-0 -translate-x-2',
                  'group-hover:opacity-100 group-hover:translate-x-0',
                  'transition-all duration-200 ease-out',
                  'pointer-events-none'
                )}
                style={{ fontFamily: "'Noto Sans', sans-serif" }}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
