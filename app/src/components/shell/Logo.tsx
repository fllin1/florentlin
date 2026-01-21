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
      {/* Logo container */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/favicon.svg"
          alt="Logo"
          width={48}
          height={48}
          className="w-full h-full rounded-full object-contain p-2 opacity-65"
          priority
        />
        {/* Gradient overlay - theme aware */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none z-10
                     bg-[linear-gradient(45deg,rgba(212,163,115,0.9),rgba(204,213,174,0.7),transparent)]
                     dark:bg-[linear-gradient(45deg,rgba(212,163,115,0.8),rgba(204,213,174,0.6),rgba(26,26,26,0.5))]"
        />
      </div>
    </button>
  )
}
