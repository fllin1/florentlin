import type { ProjectDetail } from '@/types/project'

export const ensae: ProjectDetail = {
  slug: 'ensae',
  title: 'Engineering Studies & Projects',
  company: 'ENSAE Paris',
  date: 'September 2021 — June 2024',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'Engineering degree program (Master\'s level) focused on statistics, machine learning, and deep learning. The curriculum emphasized rigorous mathematical foundations applied to modern data science challenges.',
        },
      ],
    },
    {
      id: 'key-projects',
      title: 'Key Academic Projects',
      blocks: [
        {
          type: 'heading',
          content: 'Transport Optimization',
        },
        {
          type: 'text',
          content: 'Implemented optimal transport algorithms using JAX for efficient GPU computation, exploring applications in domain adaptation.',
        },
        {
          type: 'heading',
          content: 'GPT from Scratch',
        },
        {
          type: 'text',
          content: 'Built a complete Generative Pre-trained Transformer (GPT) architecture in PyTorch to deeply understand attention mechanisms and transformer mechanics.',
        },
        {
          type: 'heading',
          content: 'Multi-Armed Bandits',
        },
        {
          type: 'text',
          content: 'Researched and implemented various bandit algorithms (UCB, Thompson Sampling) for sequential decision-making problems.',
        },
        {
          type: 'heading',
          content: 'Bayesian Statistics',
        },
        {
          type: 'text',
          content: 'Applied Bayesian variable selection methods for high-dimensional regression problems.',
        },
      ],
    },
  ],
}
