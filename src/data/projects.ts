import ragBanner from "../assets/banners/rag-document-assistant.png";
import deepfakeBanner from "../assets/banners/deepfake-detection.png";
import employeeBanner from "../assets/banners/employee-tracker.png";
import heartBanner from "../assets/banners/heart-disease-prediction.png";
import pestBanner from "../assets/banners/pest-detection.png";
import chessBanner from "../assets/banners/chess.png";
import mindBanner from "../assets/banners/mindmate-ai.png"

export type ProjectTag = "Full-Stack" | "AI / ML" | "Android" | "Other";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  /** Tags used for filtering (besides the separate "Featured" filter). */
  tags: ProjectTag[];
  /** Short label shown as the category chip on the card. */
  categoryLabel: string;
  date: string;
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  /**
   * Image is imported so the bundler fingerprints/optimizes it automatically.
   * To replace a banner later (e.g. Mindmate AI), just swap the import above
   * and this reference — no other file needs to change.
   */
  image: string;
  imageFit?: "contain" | "cover";
  featured: boolean;
  metrics?: ProjectMetric[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "rag-document-assistant",
    title: "RAG Based Document Assistant",
    tags: ["Full-Stack", "AI / ML"],
    categoryLabel: "AI / ML",
    date: "Jun 2026 – Aug 2026",
    description:
      "Built a backend RAG (Retrieval-Augmented Generation) pipeline in Python using Llama-2-7B-Chat, Sentence-Transformers, and Qdrant to answer natural-language questions over PDF/DOCX documents with source-cited, hallucination-controlled responses.",
    problem:
      "Reading through long PDFs and DOCX files to find a specific answer is slow, and general-purpose chat models tend to hallucinate details that aren't actually in the source document.",
    solution:
      "A retrieval-augmented pipeline that chunks and embeds documents, retrieves the most relevant passages with Qdrant, and grounds Llama-2-7B-Chat's answers in those passages with source citations, so responses stay traceable back to the original text.",
    features: [
      "Resumable document ingestion",
      "Checkpointed embedding & indexing",
      "Configurable chunking strategy",
      "Retrieval and reranking",
      "Modular architecture designed for FastAPI deployment",
    ],
    technologies: [
      "Python",
      "Llama-2-7B-Chat",
      "Sentence-Transformers",
      "Qdrant",
      "RAG",
      "FastAPI",
    ],
    image: ragBanner,
    imageFit: "contain",
    featured: true,
    github: "https://github.com/shivabalank/RAG-based-document-assistant",
    demo: "https://raggy.vercel.app/",
  },
  {
    id: "deepfake-detection",
    title: "DeepFake Detection using EfficientNet-B4",
    tags: ["Full-Stack", "AI / ML"],
    categoryLabel: "AI / ML",
    date: "Jan 2026 – Apr 2026",
    description:
      "Developed a full-stack deepfake detection system using an EfficientNet-B4 CNN classifier with MTCNN-based face detection to identify AI-generated facial manipulations in images and video.",
    problem:
      "AI-generated facial manipulations are getting harder to spot with the naked eye, and there's no lightweight, explainable way to flag manipulated media.",
    solution:
      "A CNN classifier that detects faces with MTCNN, classifies them with EfficientNet-B4, and highlights which facial regions influenced the prediction with Grad-CAM, wrapped in a Flask API and a React/TypeScript frontend, containerized for deployment.",
    features: [
      "EfficientNet-B4 CNN classifier",
      "MTCNN-based face detection",
      "Grad-CAM explainability",
      "Flask REST API backend",
      "React / TypeScript frontend",
      "Dockerized, deployed on Google Cloud Run & Vercel",
    ],
    technologies: [
      "Python",
      "EfficientNet-B4",
      "CNN",
      "MTCNN",
      "Grad-CAM",
      "Flask",
      "React",
      "TypeScript",
      "Docker",
      "Google Cloud",
    ],
    image: deepfakeBanner,
    imageFit: "contain",
    featured: true,
    metrics: [
      { label: "Test-set accuracy", value: "72%" },
      { label: "ROC-AUC", value: "80%" },
    ],
    github: "https://github.com/shivabalank/deepfake-detection-backend",
    demo: "https://deepfake-detection-eb4.vercel.app/",
  },
  {
    id: "employee-tracker",
    title: "Employee Tracker Application Using Kotlin",
    tags: ["Android"],
    categoryLabel: "Android",
    date: "Nov 2025 – Jan 2026",
    description:
      "Developed an Employee Tracker Android application using Kotlin with separate role-based authentication for HR and employees using Firebase Authentication.",
    solution:
      "A Kotlin Android app with distinct HR and employee roles, backed by Firebase Authentication and Firestore for secure, synchronized attendance and user data.",
    features: [
      "HR / Employee role-based authentication",
      "Firebase Authentication",
      "Firebase Realtime Database / Firestore",
      "Employee attendance tracking",
      "User management",
    ],
    technologies: ["Kotlin", "Android", "Firebase", "Firestore"],
    image: employeeBanner,
    imageFit: "contain",
    featured: false,
    github: "https://github.com/shivabalank/Employee-Tracker-app-using-kotlin-",
    demo: "https://unknowns.com",
  },
  {
    id: "mindmate-ai",
    title: "Mindmate AI",
    tags: ["Full-Stack", "AI / ML", "Android"],
    categoryLabel: "AI / Full-Stack / Android",
    date: "2026",
    description:
      "Mindmate AI is a student study assistant designed to help students prepare for exams by generating important questions, conducting quizzes, and helping them revise and understand study material.",
    solution:
      "A cross-platform study companion — Kotlin on Android and a React/TypeScript web app — that turns study material into practice questions and quizzes to make exam prep more active.",
    features: [
      "Generates important questions from study material",
      "Interactive quizzes",
      "Revision-focused workflow",
      "Android app (Kotlin)",
      "Web app (React / TypeScript)",
    ],
    technologies: ["Kotlin", "React", "TypeScript", "JavaScript", "AI"],
    // No custom banner available yet — swap this line for the real
    // "mindmate-ai.png" import once it's ready; nothing else needs to change.
    image: mindBanner,
    imageFit: "contain",
    featured: false,
    github: "https://github.com/shivabalank/Rit_Hackathon",
    demo: "https://unknowns.com",
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction using ML",
    tags: ["AI / ML"],
    categoryLabel: "Machine Learning",
    date: "2025",
    description:
      "Machine learning project for predicting the likelihood of heart disease from relevant input features.",
    features: [
      "Feature-based risk prediction",
      "Data exploration & preprocessing",
      "Model training & evaluation",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: heartBanner,
    imageFit: "contain",
    featured: false,
    github: "",
    demo: "",
  },
  {
    id: "pest-detection",
    title: "Pest Detection using Deep Learning",
    tags: ["AI / ML"],
    categoryLabel: "Deep Learning",
    date: "2025",
    description: "Deep learning project focused on identifying pests from images.",
    features: ["Image-based pest identification"],
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    image: pestBanner,
    imageFit: "contain",
    featured: false,
    github: "#",
    demo: "#",
  },
  {
    id: "chess",
    title: "Simple Chess Game",
    tags: ["Other"],
    categoryLabel: "Python",
    date: "2025",
    description: "A simple chess game implemented using Python.",
    features: ["Playable chess board", "Core chess move logic"],
    technologies: ["Python"],
    image: chessBanner,
    imageFit: "contain",
    featured: false,
    github: "https://github.com/shivabalank/Chess-Game-using-Python3",
    demo: "https://goathub.com/",
  },
];

export const filterOptions = [
  "All",
  "Featured",
  "Full-Stack",
  "AI / ML",
  "Android",
  "Other",
] as const;

export type FilterOption = (typeof filterOptions)[number];

export function matchesFilter(project: Project, filter: FilterOption): boolean {
  if (filter === "All") return true;
  if (filter === "Featured") return project.featured;
  return project.tags.includes(filter as ProjectTag);
}
