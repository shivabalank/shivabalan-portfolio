import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import LogoMark from "./LogoMark";
import { profile } from "../data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b-2 border-light-green" : "bg-transparent"
      }`}
    >
      <motion.div
        className="h-[3px] bg-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="section-wrap flex items-center justify-between py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-hand text-2xl sm:text-3xl text-text-main hover:text-primary transition-colors"
        >
          <LogoMark className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
          Shiva Balan
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-text-main hover:text-primary transition-colors relative group"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-main hover:text-primary transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-main hover:text-primary transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFilename}
            className="btn-primary !text-base !px-5 !py-2.5"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <button
          className="lg:hidden text-text-main"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-bg border-b-2 border-light-green"
          >
            <div className="section-wrap py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-text-main hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-text-main hover:text-primary transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-text-main hover:text-primary transition-colors"
                >
                  <LinkedinIcon size={24} />
                </a>
              </div>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFilename}
                className="btn-primary w-full"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
