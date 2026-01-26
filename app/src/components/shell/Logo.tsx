"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

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
        // Matte effect with solid black background
        'bg-[#000000]', // Using a rich off-black for elegance, consistent with dark mode bg
        'shadow-md shadow-black/20',
        // Hover effect
        'transition-all duration-300 ease-out',
        'hover:scale-105 hover:shadow-lg',
        'hover:bg-black', // Go to pure black on hover
        // Focus
        'focus:outline-none focus:ring-2 focus:ring-[#d4a373]/50',
        className
      )}
      aria-label="Go to home"
    >
      {/* Logo container */}
      <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/favicon.svg"
          alt="Logo"
          width={48}
          height={48}
          className="w-full h-full rounded-full object-contain p-2 opacity-90" // Invert to make the logo white against black bg
          priority
        />
      </div>
    </button>
  )
}
