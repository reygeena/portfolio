"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "IMS Software Pvt. Ltd",
    role: "Full Stack Developer",
    period: "2021 - Present",
    description:
      "Building and maintaining enterprise-grade applications using Angular and .NET Core. Developing accounting systems, distributed management tools, and dynamic reporting solutions for major clients.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
    current: true,
  },
  {
    company: "Utech Professional Pvt. Ltd",
    role: "Intern - Angular & Java",
    period: "2020",
    description:
      "Gained foundational experience in full-stack development with Angular frontend and Java backend. Contributed to team projects and learned industry best practices.",
    technologies: ["Angular", "Java", "HTML", "CSS"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="My professional journey as a developer, building impactful solutions across organizations."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-border md:left-8 md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 hidden md:left-6 md:block">
                  <div
                    className={`h-5 w-5 rounded-full border-2 ${
                      exp.current
                        ? "border-primary bg-primary/20"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/20">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-muted-foreground">
                        <Building2 size={14} />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
