import { m } from "framer-motion";
import { clipReveal, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-14 max-w-3xl lg:mb-20 ${centered ? "mx-auto text-center" : ""}`}
    >
      <m.p variants={fadeUp} className={`eyebrow ${centered ? "justify-center" : ""}`}>
        {eyebrow}
      </m.p>
      <m.h2
        variants={clipReveal}
        className={`mt-4 text-display-xl ${dark ? "text-white" : "text-primary"}`}
      >
        {title}
      </m.h2>
      {description && (
        <m.p
          variants={fadeUp}
          className={`mt-5 text-lg font-light ${
            dark ? "text-white/60" : "text-muted"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </m.p>
      )}
    </m.div>
  );
}
