import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import {
  filterOptions,
  matchesFilter,
  projects,
  type FilterOption,
  type Project,
} from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24 bg-soft-green/50 scroll-mt-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Selected experiments"
          title="Things I've Built"
          description="A mix of full-stack apps, Android apps, and AI/ML projects — built to learn, ship, and solve real problems."
          align="left"
        />

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option}
              role="tab"
              aria-selected={filter === option}
              onClick={() => setFilter(option)}
              className={`px-5 py-2 rounded-full text-[15px] border-2 transition-all duration-200 ${
                filter === option
                  ? "bg-primary text-white border-primary shadow-[0_4px_0_0_#0B3D20]"
                  : "bg-white text-text-main border-light-green hover:border-primary"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featuredLayout={project.featured}
                onOpen={setActiveProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-text-secondary mt-10">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
