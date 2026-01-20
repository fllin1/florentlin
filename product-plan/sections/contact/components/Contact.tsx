import type { ContactProps } from '../types'
import { ContactLink } from './ContactLink'

export function Contact({ contactLinks, onContactClick }: ContactProps) {
  // Separate primary and secondary links
  const primaryLink = contactLinks.find((link) => link.primary)
  const secondaryLinks = contactLinks.filter((link) => !link.primary)

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: 'var(--text, #3d3d3d)',
              fontFamily: "'Zen Kaku Gothic New', sans-serif",
            }}
          >
            Get in Touch
          </h2>
          <div
            className="w-16 h-[2px] mx-auto rounded-full mb-6"
            style={{ backgroundColor: 'var(--primary, #d4a373)' }}
          />
          <p
            className="text-base leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]"
            style={{ color: 'var(--text-muted, #6b6b6b)' }}
          >
            Interested in working together or have a question? 
            <br className="hidden sm:block" />
            I'd love to hear from you.
          </p>
        </div>

        {/* Primary CTA (Email) */}
        {primaryLink && (
          <div className="mb-8">
            <ContactLink
              link={primaryLink}
              index={0}
              onClick={onContactClick}
            />
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
          <div
            className="flex-1 h-[1px]"
            style={{ backgroundColor: 'var(--surface, #faedcd)' }}
          />
          <span
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-muted, #6b6b6b)' }}
          >
            or find me on
          </span>
          <div
            className="flex-1 h-[1px]"
            style={{ backgroundColor: 'var(--surface, #faedcd)' }}
          />
        </div>

        {/* Secondary links */}
        <div className="flex justify-center gap-4">
          {secondaryLinks.map((link, index) => (
            <ContactLink
              key={link.id}
              link={link}
              index={index + 1}
              onClick={onContactClick}
            />
          ))}
        </div>

        {/* Decorative element */}
        <div
          className="mt-16 flex justify-center gap-2 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]"
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: 'var(--secondary, #ccd5ae)' }}
          />
          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: 'var(--primary, #d4a373)' }}
          />
          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: 'var(--secondary, #ccd5ae)' }}
          />
        </div>
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
