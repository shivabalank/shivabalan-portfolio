import { motion } from "framer-motion";
import { ExternalLink, Calendar, Star, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  featuredLayout = false,
  onOpen,
}: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`card-surface overflow-hidden group flex flex-col ${
        featuredLayout ? "sm:col-span-2" : ""
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={handleKeyDown}
        aria-haspopup="dialog"
        className="text-left flex flex-col h-full cursor-pointer"
      >
        <div
          className={`relative bg-soft-green overflow-hidden ${
            featuredLayout ? "aspect-[21/9]" : "aspect-[16/9]"
          }`}
        >
          {project.featured && (
            <span className="absolute top-3 left-3 z-10 eyebrow-badge !bg-primary !text-white text-sm">
              <Star size={14} className="fill-white" />
              Featured
            </span>
          )}
          <span className="absolute top-3 right-3 z-10 bg-white/90 text-text-main text-sm px-3 py-1 rounded-full border border-light-green">
            {project.categoryLabel}
          </span>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} banner`}
              loading="lazy"
              className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.03] ${
                project.imageFit === "cover" ? "object-cover" : "object-contain p-4"
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-hand text-xl text-text-secondary px-6 text-center">
                Banner coming soon
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-hand text-2xl text-text-main leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-text-secondary text-sm mt-1.5">
            <Calendar size={14} />
            {project.date}
          </div>

          <p className="text-text-secondary mt-3 leading-relaxed text-[15px] flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-sm border border-light-green rounded-full px-3 py-1 text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-sm text-text-secondary px-1 py-1">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-6 pb-6 -mt-2">
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-dark-green/70 text-text-main px-4 py-2 text-[15px] hover:bg-soft-green transition-colors"
          >
            <GithubIcon size={16} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-[15px] hover:bg-primary-dark transition-colors group/demo"
          >
            <ExternalLink
              size={16}
              className="transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
            />
            Live Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 text-text-main hover:text-primary transition-colors text-[15px] group/details shrink-0"
        >
          Details
          <ArrowRight
            size={15}
            className="transition-transform group-hover/details:translate-x-1"
          />
        </button>
      </div>
    </motion.article>
  );
}
