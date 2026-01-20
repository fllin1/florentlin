import type { Aspiration, Hobby, Personality } from "@/types"

export const aspirations: Aspiration[] = [
  {
    id: "asp-001",
    title: "End-to-End Ownership",
    description:
      "Create real-world applications with full MLOps pipeline ownership — from research to production.",
  },
  {
    id: "asp-002",
    title: "Team Leadership",
    description:
      "Become a driving force for the team, enabling others to grow and deliver.",
  },
  {
    id: "asp-003",
    title: "Measurable Impact",
    description:
      "Demonstrate real-world value through improved sales, ROI, and customer retention.",
  },
]

export const hobbies: Hobby[] = [
  {
    id: "hobby-001",
    name: "Fitness",
    description: "Working out consistently for 4 years",
    icon: "dumbbell",
  },
  {
    id: "hobby-002",
    name: "Nutrition",
    description: "Optimizing health through diet and lifestyle",
    icon: "leaf",
  },
  {
    id: "hobby-003",
    name: "AI & Society",
    description: "Exploring the impact of AI on society and individuals",
    icon: "brain",
  },
  {
    id: "hobby-004",
    name: "Cultures",
    description: "Interest in diverse cultures and perspectives",
    icon: "globe",
  },
]

export const personality: Personality = {
  quote: "I learn from others, and share what I know. Knowledge goes both ways.",
}
