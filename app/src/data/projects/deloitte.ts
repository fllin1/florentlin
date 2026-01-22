import type { ProjectDetail } from '@/types/project'

export const deloitte: ProjectDetail = {
  slug: 'deloitte',
  title: 'Nurse Planning & VRP Optimization',
  company: 'Deloitte AIM',
  date: 'May 2023 — August 2023',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'Research internship focusing on the joint optimization of nurse scheduling and vehicle routing (VRP), tackling a complex NP-Hard problem with strict constraints.',
        },
      ],
    },
    {
      id: 'methodology',
      title: 'Methodology',
      blocks: [
        {
          type: 'heading',
          content: 'Modeling',
          content: 'Modeling',
        },
        {
          type: 'text',
          content: 'Modeled the problem constraints including strict time windows and legislative requirements for nurse shifts.',
        },
        {
          type: 'heading',
          content: 'Resolution',
        },
        {
          type: 'text',
          content: 'Utilized Constraint Programming (CP) with local search techniques to find efficient solutions.',
        },
        {
          type: 'heading',
          content: 'Objective Function',
        },
        {
          type: 'text',
          content: 'Designed a multi-objective function to balance staff preferences (soft constraints) with transportation costs.',
        },
      ],
    },
    {
      id: 'tech-stack',
      title: 'Technical Environment',
      blocks: [
        {
          type: 'text',
          content: 'Python, Google OR-Tools (CP-SAT), NumPy, Pandas.',
        },
      ],
    },
  ],
}
