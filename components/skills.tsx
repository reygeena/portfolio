"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Angular", "TypeScript", "RxJS", "HTML", "CSS", "SCSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["ASP.NET Core", "EF Core", "LINQ", "Java", "C", "C++"],
  },
  {
    title: "Database",
    skills: ["SQL Server", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Firebase", "GitHub", "REST APIs", "Git"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-delayed absolute top-1/4 right-0 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Technologies I Work With"
          description="A curated set of tools and technologies I use to build modern, robust applications."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
