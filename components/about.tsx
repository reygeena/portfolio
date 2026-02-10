"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Briefcase, Code, Layers, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "4+ Years",
    description: "Professional experience in software development",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "End-to-end development from frontend to backend",
  },
  {
    icon: Layers,
    title: "Angular & .NET",
    description: "Deep expertise in enterprise-grade frameworks",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Clean architecture for production-ready apps",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About Me"
          title="Passionate About Building Great Software"
          description="I'm a Full Stack Developer with 4+ years of experience specializing in Angular and .NET Core, dedicated to crafting clean, scalable, and high-performance applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
