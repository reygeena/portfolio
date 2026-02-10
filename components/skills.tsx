"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "Angular", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "RxJS", level: 85 },
      { name: "HTML / CSS / SCSS", level: 92 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "ASP.NET Core", level: 92 },
      { name: "Entity Framework Core", level: 88 },
      { name: "LINQ", level: 90 },
      { name: "RESTful APIs", level: 93 },
      { name: "C#", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 75 },
      { name: "Database Design", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Firebase", level: 78 },
      { name: "Visual Studio", level: 92 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground transition-colors group-hover:text-primary">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
          className="text-xs text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-delayed absolute top-1/4 right-0 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="animate-float absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Technologies I Work With"
          description="A curated set of tools and technologies I use to build modern, robust, enterprise-grade applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-xl p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <category.icon size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.15 + skillIndex * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
