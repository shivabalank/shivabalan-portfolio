export interface Certification {
  title: string;
  issuer: string;
  provider?: string;
  /** Extra reference line, e.g. a DOI or publication identifier. */
  note?: string;
}

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle Corporation",
  },
  {
    title: "Complete Web Development Course",
    issuer: "Hitesh Choudhary",
    provider: "Udemy",
  },
  {
    title: "Paper Submission: \"Deepfake Detection using Deep Learning\"",
    issuer: "IJSREM Journal",
    note: "DOI: 10.55041/IJSREM63146",
  },
];
