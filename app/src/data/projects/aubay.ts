import type { ProjectDetail } from '@/types/project'

export const aubay: ProjectDetail = {
  slug: 'aubay',
  title: 'Machine Un-Learning Research',
  company: 'Aubay (R&D)',
  date: 'June 2024 — November 2024',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'Research internship focused on Machine Un-Learning — the challenge of removing specific data influences from trained ML models without full retraining. Implemented the ECO method to make models "forget" specific information.',
        },
      ],
    },
    {
      id: 'highlights',
      title: 'Key Contributions',
      blocks: [
        {
          type: 'text',
          content: '• Detection: Built a BERT-based classifier to identify prompts targeting the "Forget Set".\n• Embedding Corruption: Injected Gaussian noise to prevent "catastrophic forgetting" of retained knowledge.\n• Evaluation: Established a pipeline on TOFU and WMDP datasets using ROUGE/BLEU scores and Truth Ratio.\n• Fine-tuning: Utilized LoRA on Qwen (0.5b/7b) and Llama (3b) models.',
        },
      ],
    },
    {
      id: 'problem',
      title: 'The Problem',
      blocks: [
        {
          type: 'text',
          content: 'With regulations like GDPR enforcing the "right to be forgotten," organizations need the ability to remove individual data points from trained models. Complete retraining is computationally expensive and often impractical for large LLMs.',
        },
      ],
    },
    {
      id: 'tech-stack',
      title: 'Technical Environment',
      blocks: [
        {
          type: 'text',
          content: 'Python, PyTorch, Hugging Face, LoRA, BERT, LLMs (Llama, Qwen).',
        },
      ],
    },
  ],
}
