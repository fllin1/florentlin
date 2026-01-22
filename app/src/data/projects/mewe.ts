import type { ProjectDetail } from '@/types/project'

export const mewe: ProjectDetail = {
  slug: 'mewe',
  title: 'Legislative Document Analysis Platform',
  company: 'Mewe Partners',
  date: 'April 2025 — July 2025',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'Built a platform for automated analysis of Local Urban Plans (PLU). The system uses a multimodal RAG pipeline to help architects navigate complex legislative documents.',
        },
      ],
    },
    {
      id: 'solution',
      title: 'Technical Solution',
      blocks: [
        {
          type: 'heading',
          content: 'Multi-Model Orchestration',
        },
        {
          type: 'text',
          content: 'Designed an agnostic architecture integrating Gemini, Grok, and Mistral AI (Mistral-OCR) to leverage the strengths of different models.',
        },
        {
          type: 'heading',
          content: 'Optimization',
        },
        {
          type: 'text',
          content: 'Implemented Context Caching, reducing costs and latency by 50%.',
        },
        {
          type: 'heading',
          content: 'ETL Pipeline',
        },
        {
          type: 'text',
          content: 'Developed a pipeline for extracting complex schemas via multimodal processing, validated with Pydantic for strict data integrity.',
        },
      ],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      blocks: [
        {
          type: 'text',
          content: '• Storage: Dual strategy using SQLite for development and Supabase for production.\n• Backend: FastAPI for high-performance API serving.\n• Deployment: Google Cloud Platform (GCP).',
        },
      ],
    },
    {
      id: 'links',
      title: 'Project Links',
      blocks: [
        {
          type: 'text',
          content: 'Live Project: [mwplu-v15.web.app](https://mwplu-v15.web.app)',
        },
      ],
    },
  ],
}
