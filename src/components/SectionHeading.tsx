import { motion } from "framer-motion";
import { DoodleUnderline } from "./Doodles";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex flex-col ${align === "center" ? "items-center text-center mx-auto" : "items-start"}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-hand text-4xl sm:text-5xl text-text-main mt-4 relative inline-block">
        {title}
        <DoodleUnderline className="text-primary w-full h-3 absolute left-0 -bottom-3" />
      </h2>
      {description && (
        <p
          className={`text-text-secondary text-lg mt-5 max-w-xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
