import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-extrabold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div
           initial={{ opacity: 0, width: 0 }}
           whileInView={{ opacity: 1, width: 80 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className={`h-1.5 bg-brand-cyan rounded-full ${centered ? "mx-auto" : "ml-0"}`}
        />
      )}
    </div>
  );
}
