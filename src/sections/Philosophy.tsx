import { motion } from "framer-motion";
import profilePhoto from "../assets/profile/shiva-balan.jpeg";
import Eyebrow from "../components/Eyebrow";
import { Hammer, Lightbulb, RefreshCw } from "lucide-react";

const philosophyCards = [
  {
    title: "Build",
    description: "Turn ideas into working applications.",
    icon: Hammer,
  },
  {
    title: "Learn",
    description: "Keep exploring new technologies and better approaches.",
    icon: Lightbulb,
  },
  {
    title: "Improve",
    description: "Iterate, test, optimize, and ship.",
    icon: RefreshCw,
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-64 sm:w-80"
          >
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-light-green shadow-[8px_8px_0_0_#35A900] bg-white">
              <img
                src={profilePhoto}
                alt="Portrait of Shiva Balan"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -right-4 bg-white border-2 border-light-green rounded-full px-4 py-2 text-sm text-text-main shadow-[3px_3px_0_0_#DFF8D5] whitespace-nowrap">
              curious by default
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Eyebrow>How I build</Eyebrow>
            <h2 className="font-hand text-4xl sm:text-5xl text-text-main mt-5 leading-[1.1]">
              Ideas are only the{" "}
              <span className="text-primary">starting point.</span>
            </h2>

            <p className="text-lg sm:text-xl text-text-main leading-relaxed mt-6">
              I'm a Computer Science &amp; Engineering (AI&amp;ML) graduate who
              enjoys turning ideas into working products. I work across
              full-stack development, Android development, machine learning,
              and AI-powered applications.
            </p>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mt-5">
              From building mobile applications with Kotlin to developing
              machine learning systems and RAG-based applications, I enjoy
              understanding how different pieces of technology come together
              to solve practical problems.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {philosophyCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="card-surface p-7 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-soft-green flex items-center justify-center mx-auto text-primary">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="font-hand text-2xl text-text-main mt-5">
                  {card.title}
                </h3>
                <p className="text-text-secondary mt-2 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
