import type { ProjectSection } from '@/types/project'
import { ContentBlock } from './ContentBlock'

interface ContentSectionProps {
  section: ProjectSection
  index: number
}

export function ContentSection({ section, index }: ContentSectionProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <h3
        className="text-xl font-semibold mb-6"
        style={{
          color: 'var(--color-text, #3d3d3d)',
          fontFamily: "'Zen Kaku Gothic New', sans-serif",
        }}
      >
        {section.title}
      </h3>
      <div>
        {section.blocks.map((block, blockIndex) => (
          <ContentBlock key={blockIndex} block={block} />
        ))}
      </div>
    </section>
  )
}
