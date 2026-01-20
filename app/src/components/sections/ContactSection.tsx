"use client"

import type { ContactLink as ContactLinkType } from "@/types"
import { ContactLink } from "./ContactLink"

export interface ContactSectionProps {
  /** Array of contact links to display */
  contactLinks: ContactLinkType[]
  /** Called when user clicks a contact link */
  onContactClick?: (id: string, url: string) => void
}

export function ContactSection({ contactLinks, onContactClick }: ContactSectionProps) {
  // Separate primary and secondary links
  const primaryLink = contactLinks.find((link) => link.primary)
  const secondaryLinks = contactLinks.filter((link) => !link.primary)

  const hasSecondaryLinks = secondaryLinks.length > 0

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-text, #3d3d3d)",
              fontFamily: "'Zen Kaku Gothic New', sans-serif",
            }}
          >
            Get in Touch
          </h2>
          <div
            className="w-16 h-[2px] mx-auto rounded-full mb-6"
            style={{ backgroundColor: "var(--color-primary, #d4a373)" }}
          />
          <p
            className="text-base leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]"
            style={{ color: "var(--color-text-muted, #6b6b6b)" }}
          >
            Interested in working together or have a question?
            <br className="hidden sm:block" />
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* Primary CTA (Email) */}
        {primaryLink && (
          <div className="mb-8">
            <ContactLink link={primaryLink} index={0} onClick={onContactClick} />
          </div>
        )}

        {/* Divider - only show if there are secondary links */}
        {hasSecondaryLinks && (
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
            <div className="flex-1 h-[1px]" style={{ backgroundColor: "var(--color-surface, #faedcd)" }} />
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--color-text-muted, #6b6b6b)" }}
            >
              or find me on
            </span>
            <div className="flex-1 h-[1px]" style={{ backgroundColor: "var(--color-surface, #faedcd)" }} />
          </div>
        )}

        {/* Secondary links */}
        {hasSecondaryLinks && (
          <div className="flex justify-center gap-4">
            {secondaryLinks.map((link, index) => (
              <ContactLink key={link.id} link={link} index={index + 1} onClick={onContactClick} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
