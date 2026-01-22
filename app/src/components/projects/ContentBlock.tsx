import type { ContentBlock as ContentBlockType } from '@/types/project'

interface ContentBlockProps {
  block: ContentBlockType
}

export function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case 'heading':
      return (
        <h4
          className="text-lg font-semibold mt-6 mb-3 first:mt-0"
          style={{
            color: 'var(--color-text, #3d3d3d)',
            fontFamily: "'Zen Kaku Gothic New', sans-serif",
          }}
        >
          {block.content}
        </h4>
      )

    case 'image':
      return (
        <figure className="my-6">
          <div
            className="rounded-lg overflow-hidden"
            style={{ backgroundColor: 'var(--color-surface, #faedcd)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt || ''}
              className="w-full h-auto"
            />
          </div>
          {block.caption && (
            <figcaption
              className="text-sm mt-2 text-center"
              style={{
                color: 'var(--color-text-muted, #6b6b6b)',
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'text':
    default:
      return (
        <p
          className="text-base leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
          style={{
            color: 'var(--color-text-muted, #6b6b6b)',
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          {block.content}
        </p>
      )
  }
}
