import { motion } from "framer-motion";
import { DoodleUnderline } from "../components/Doodles";
import Eyebrow from "../components/Eyebrow";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-soft-green/50 scroll-mt-20">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="flex flex-col items-start">
            <Eyebrow>My toolkit</Eyebrow>
            <h2 className="font-hand text-4xl sm:text-5xl text-text-main mt-4 relative inline-block">
              Things I Work With
              <DoodleUnderline className="text-primary w-full h-3 absolute left-0 -bottom-3" />
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-sm leading-relaxed lg:text-right">
            A practical mix of languages, interfaces, data tools, and AI
            building blocks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: gi * 0.06 }}
              className="bg-white rounded-2xl border-2 border-light-green p-6"
            >
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                {String(gi + 1).padStart(2, "0")} / {group.title}
              </span>
              <h3 className="font-hand text-2xl text-dark-green mt-2 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
