import { motion } from "framer-motion";
import { Mail, Phone, Globe, Download } from "lucide-react";
import { profile } from "../data/profile";
import { DoodleHeart, DoodleStar } from "../components/Doodles";
import Eyebrow from "../components/Eyebrow";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

const links = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: profile.githubLabel,
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: profile.portfolioLabel,
    href: profile.portfolio,
    icon: Globe,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-soft-green/40 to-transparent" />
      <DoodleStar className="hidden md:block absolute top-14 left-[12%] w-7 h-7 text-primary/40 animate-float" />
      <DoodleHeart className="hidden md:block absolute bottom-16 right-[14%] w-8 h-8 text-primary/30 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-wrap relative text-left"
      >
        <Eyebrow>Open to a good challenge</Eyebrow>

        <h2 className="font-hand text-5xl sm:text-6xl mt-6 leading-[1.05]">
          <span className="text-text-main">Let's build</span>
          <br />
          <span className="text-primary">something.</span>
        </h2>
        <p className="text-text-secondary text-lg sm:text-xl mt-5 max-w-lg leading-relaxed">
          Have an idea, project, or opportunity? Let's connect.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFilename}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-dark-green text-white px-7 py-3 text-lg shadow-[0_6px_0_0_#082c17] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#082c17] active:translate-y-0.5 active:shadow-[0_3px_0_0_#082c17]"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-light-green bg-white text-text-main px-7 py-[10px] text-lg transition-all duration-200 hover:border-primary hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Say hello
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-14 text-text-secondary">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
