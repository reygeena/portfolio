"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
