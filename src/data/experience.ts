export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "AiRobosoft",
    role: "Full Stack Development Intern",
    period: "Jun 2025 – Oct 2025",
    responsibilities: [
      "Developed responsive web app components using HTML, CSS, and JavaScript.",
      "Integrated frontend interfaces with backend functionality and databases.",
      "Participated in testing, debugging, and optimization of web applications.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    company: "MindMatrix",
    role: "Android App Development Using GenAI Intern",
    period: "Sep 2025 – Jan 2026",
    responsibilities: [
      "Built Android applications using Kotlin.",
      "Leveraged Generative AI technologies to develop intelligent features.",
      "Conducted testing, debugging, and performance optimization.",
    ],
    technologies: ["Kotlin", "Android", "GenAI"],
  },
];
