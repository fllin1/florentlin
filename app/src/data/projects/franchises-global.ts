import type { ProjectDetail } from '@/types/project'

export const franchisesGlobal: ProjectDetail = {
  slug: 'franchises-global',
  title: 'Investor-Franchise Matching System',
  company: 'Franchises Global',
  date: 'August 2025 — November 2025',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'Developed a semantic recommendation system to match franchise opportunities with potential franchisees, moving beyond simple keyword matching to understanding business profile nuances.',
        },
      ],
    },
    {
      id: 'technical-implementation',
      title: 'Technical Implementation',
      blocks: [
        {
          type: 'heading',
          content: 'LLM Orchestration',
        },
        {
          type: 'text',
          content: 'Utilized Gemini Flash Lite for structured extraction from HTML and Gemini Pro for complex reasoning tasks, combined with OpenAI Embeddings for semantic understanding.',
        },
        {
          type: 'heading',
          content: 'Hybrid Search Engine',
        },
        {
          type: 'text',
          content: 'Built a search engine combining semantic (vector) search for relevance and SQL filters for hard constraints.',
        },
        {
          type: 'heading',
          content: 'Data Engineering',
        },
        {
          type: 'text',
          content: 'Created a pipeline to convert HTML to Markdown and implemented a Named Entity Recognition (NER) system for extracting geographical data.',
        },
      ],
    },
    {
      id: 'tech-stack',
      title: 'Technical Environment',
      blocks: [
        {
          type: 'text',
          content: 'Python, GCP, OpenAI, Pydantic, Supabase, BeautifulSoup.',
        },
      ],
    },
    {
      id: 'links',
      title: 'Project Links',
      blocks: [
        {
          type: 'text',
          content: 'Live Project: [global-franchises.vercel.app](https://global-franchises.vercel.app/)',
        },
      ],
    },
  ],
}
