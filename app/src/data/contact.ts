import type { ContactLink } from "@/types"

export const contactLinks: ContactLink[] = [
  {
    id: "contact-001",
    type: "email",
    label: "Email",
    value: "1florentlin@gmail.com",
    url: "mailto:1florentlin@gmail.com",
    icon: "mail",
    primary: true,
  },
  {
    id: "contact-002",
    type: "linkedin",
    label: "LinkedIn",
    value: "florentlin",
    url: "https://www.linkedin.com/in/florentlin",
    icon: "linkedin",
    primary: false,
  },
  {
    id: "contact-003",
    type: "github",
    label: "GitHub",
    value: "fllin1",
    url: "https://github.com/fllin1",
    icon: "github",
    primary: false,
  },
]
