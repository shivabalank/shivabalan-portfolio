import { motion } from "framer-motion";
import { GraduationCap, MapPin, Star } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import { DoodleUnderline } from "../components/Doodles";
import { education } from "../data/education";
import { certifications } from "../data/certifications";

export default function Foundation() {
  const edu = education[0];

  return (
    <section id="education" className="py-24 scroll-mt-20">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start"
        >
          <Eyebrow>Learning &amp; proof</Eyebrow>
          <h2 className="font-hand text-4xl sm:text-5xl text-text-main mt-4 relative inline-block">
            The foundation.
            <DoodleUnderline className="text-primary w-full h-3 absolute left-0 -bottom-3" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-7 items-stretch">
          {/* Education card */}
          {edu && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="bg-light-green rounded-3xl border-2 border-light-green shadow-[6px_6px_0_0_#35A900] p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shrink-0 border-2 border-dark-green/20">
                  <GraduationCap size={26} />
                </div>
                <span className="font-mono text-sm text-dark-green/70">
                  {edu.period}
                </span>
              </div>

              <h3 className="font-hand text-2xl sm:text-3xl text-dark-green mt-6">
                {edu.institution}
              </h3>
              <p className="text-dark-green/80 mt-2 leading-relaxed">
                {edu.degree}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-auto pt-6">
                <span className="bg-white rounded-full px-4 py-1.5 font-mono text-sm text-dark-green">
                  CGPA {edu.cgpa}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/60 rounded-full px-4 py-1.5 text-sm text-dark-green">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          )}

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="card-surface p-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-soft-green flex items-center justify-center text-primary shrink-0">
                <Star size={18} />
              </div>
              <h3 className="font-hand text-2xl sm:text-3xl text-text-main">
                Certificates and Achievements
              </h3>
            </div>

            <div className="mt-7 space-y-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h4 className="text-text-main text-lg leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-text-secondary text-sm mt-1 font-mono">
                    {cert.issuer}
                    {cert.provider ? ` · ${cert.provider}` : ""}
                  </p>
                  {cert.note && (
                    <p className="text-text-secondary/80 text-sm mt-0.5 font-mono">
                      {cert.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
