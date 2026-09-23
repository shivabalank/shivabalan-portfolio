import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { DoodleUnderline } from "../components/Doodles";
import Eyebrow from "../components/Eyebrow";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 scroll-mt-20 bg-dark-green"
    >
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col items-start"
        >
          <Eyebrow>The work so far</Eyebrow>
          <h2 className="font-hand text-4xl sm:text-5xl text-white mt-4 relative inline-block">
            Where I've Interned
            <DoodleUnderline className="text-primary w-full h-3 absolute left-0 -bottom-3" />
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* the spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-2 bottom-2 w-[3px] bg-primary/30"
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={job.company} className="relative flex items-start gap-6">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="relative w-10 h-10 rounded-full bg-dark-green border-2 border-primary flex items-center justify-center shrink-0 z-10"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="flex-1 bg-[#113F25] border-2 border-primary/30 rounded-3xl shadow-[6px_6px_0_0_rgba(53,169,0,0.4)] p-7 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="font-mono text-primary text-sm tracking-widest uppercase">
                      {job.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 border border-primary/40 rounded-full px-3 py-1 font-mono text-xs sm:text-sm text-light-green">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>

                  <h3 className="font-hand text-2xl sm:text-3xl text-white mt-3">
                    {job.role}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {job.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="text-light-green/90 text-base sm:text-lg leading-relaxed flex gap-2.5"
                      >
                        <CheckCircle2
                          size={19}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-sm border border-primary/40 rounded-full px-3 py-1 text-light-green bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
