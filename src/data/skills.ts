export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["C", "Python", "SQL", "JavaScript", "Kotlin"],
  },
  {
    title: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Streamlit",
      "Bootstrap",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "LLM",
      "RAG",
      "Hugging Face Transformers",
      "TensorFlow",
      "LSTM",
      "CNN",
      "RNN",
      "Scikit-learn",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases & Vector Stores",
    skills: ["MySQL", "MongoDB", "Firebase", "Qdrant", "FAISS"],
  },
  {
    title: "Data",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Excel"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"],
  },
];
