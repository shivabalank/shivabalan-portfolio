import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-dark-green py-10">
      <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div>
          <p className="font-hand text-xl text-light-green">
            Built with curiosity, code &amp; a little caffeine.
          </p>
          <p className="text-light-green/70 text-sm mt-1">
            {profile.name} © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-light-green hover:text-primary transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-light-green hover:text-primary transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-light-green hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
