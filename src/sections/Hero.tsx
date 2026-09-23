import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import heroIllustration from "../assets/hero/hero-illustration.png";
import RotatingRole from "../components/RotatingRole";
import Eyebrow from "../components/Eyebrow";
import { DoodleBulb, DoodleStar, DoodleSparkAI } from "../components/Doodles";
import { profile } from "../data/profile";

const nameParts = profile.name.split(" ");
const firstName = nameParts.slice(0, -1).join(" ") || nameParts[0];
const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-soft-green/60 via-bg to-bg" />

      {/* decorative doodles, hidden on small screens to avoid clutter */}
      <DoodleStar className="hidden md:block absolute top-28 left-[6%] w-7 h-7 text-primary/40 animate-float" />
      <DoodleBulb className="hidden md:block absolute top-[22%] right-[4%] w-9 h-9 text-dark-green/30 animate-float-slow" />
      <DoodleSparkAI className="hidden lg:block absolute bottom-24 left-[10%] w-8 h-8 text-primary/30 animate-float-slow" />

      <div className="section-wrap relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left order-1 lg:order-1"
        >
          <motion.span variants={item}>
            <Eyebrow>Available for opportunities</Eyebrow>
          </motion.span>

          <motion.h1
            variants={item}
            className="font-hand text-6xl sm:text-7xl lg:text-8xl mt-6 leading-[1.05]"
          >
            <span className="text-text-main">{firstName} </span>
            <span className="text-primary">{lastName}.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 h-10 sm:h-12 flex items-center justify-center lg:justify-start"
          >
            <RotatingRole
              roles={profile.roles}
              className="text-2xl sm:text-3xl text-primary"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Projects
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFilename}
              className="btn-outline w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-5 justify-center lg:justify-start"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 text-text-main hover:text-primary transition-colors"
            >
              <GithubIcon size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 text-text-main hover:text-primary transition-colors"
            >
              <LinkedinIcon size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="order-2 lg:order-2 relative"
        >
          <div className="absolute inset-0 -z-10 bg-light-green/50 rounded-[3rem] blur-2xl scale-90" />
          <img
            src={heroIllustration}
            alt="Illustration of Shiva Balan coding on a laptop, surrounded by React, Node, Python and database icons"
            className="w-full max-w-lg mx-auto animate-float select-none"
            draggable={false}
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        aria-label="Scroll to About section"
        className="hidden sm:flex flex-col items-center gap-1 mx-auto mt-16 w-fit text-primary"
      >
        <ArrowDown className="animate-scroll-dot" size={22} />
      </motion.a>
    </section>
  );
}
