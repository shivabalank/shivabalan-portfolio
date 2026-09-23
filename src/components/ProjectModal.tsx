import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-dark-green/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-2xl border-2 border-light-green max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border-2 border-light-green flex items-center justify-center text-text-main hover:text-primary hover:border-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-[16/9] bg-soft-green">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} banner`}
                  className={`w-full h-full ${
                    project.imageFit === "cover" ? "object-cover" : "object-contain p-6"
                  }`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-hand text-xl text-text-secondary">
                    Banner coming soon
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="eyebrow-badge">{project.categoryLabel}</span>
                <span className="text-text-secondary text-sm">{project.date}</span>
              </div>

              <h3
                id="project-modal-title"
                className="font-hand text-3xl sm:text-4xl text-text-main mt-4"
              >
                {project.title}
              </h3>

              <p className="text-text-secondary mt-4 leading-relaxed">
                {project.description}
              </p>

              {project.problem && (
                <div className="mt-6">
                  <h4 className="font-hand text-xl text-dark-green">Problem</h4>
                  <p className="text-text-secondary mt-1.5 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="mt-6">
                  <h4 className="font-hand text-xl text-dark-green">Solution</h4>
                  <p className="text-text-secondary mt-1.5 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              <div className="mt-6">
                <h4 className="font-hand text-xl text-dark-green">Features</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-text-main text-[15px]">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-hand text-xl text-dark-green">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-hand text-xl text-dark-green">Metrics</h4>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-soft-green rounded-xl px-5 py-3 text-center"
                      >
                        <div className="font-hand text-2xl text-primary">
                          {m.value}
                        </div>
                        <div className="text-text-secondary text-sm mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !text-base !py-2.5"
                >
                  <GithubIcon size={18} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-base !py-2.5"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
