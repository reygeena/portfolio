"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "IMS Software Pvt. Ltd",
    role: "Full Stack Developer",
    period: "2021 - Present",
    description:
      "Building and maintaining enterprise-grade applications using Angular and .NET Core. Developing accounting systems, distributed management tools, and dynamic reporting solutions for major clients.",
    achievements: [
      "Architected WebPos accounting system handling 10,000+ daily transactions",
      "Built DMS platform used by Dabur, Nestle, and Gorkha Brewery",
      "Designed dynamic JSON-based reporting engine reducing report creation time by 80%",
      "Awarded Best Employee of the Year 2024",
    ],
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript", "EF Core", "RxJS"],
    current: true,
  },
  {
    company: "Utech Professional Pvt. Ltd",
    role: "Software Developer Intern",
    period: "2020",
    description:
      "Gained foundational experience in full-stack development with Angular frontend and Java backend. Contributed to team projects and learned industry best practices.",
    achievements: [
      "Developed reusable Angular components for internal tools",
      "Implemented REST API integrations with Java Spring Boot",
      "Participated in Agile sprints and code review processes",
    ],
    technologies: ["Angular", "Java", "Spring Boot", "HTML", "CSS", "Git"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-1/4 right-10 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="My professional journey as a developer, building impactful solutions across organizations."
        />

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 hidden w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-8 md:block"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot with Pulse Ring */}
                <div className="absolute left-0 top-1 hidden md:left-[22px] md:block">
                  <div
                    className={`relative h-5 w-5 rounded-full border-2 transition-all ${exp.current
                        ? "border-primary bg-primary/30 shadow-lg shadow-primary/20"
                        : "border-muted-foreground/30 bg-background"
                      }`}
                  >
                    {exp.current && <div className="pulse-ring absolute inset-0 rounded-full" />}
                  </div>
                </div>

                <div className="glass-card group rounded-xl p-6 md:p-8">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-2 text-muted-foreground">
                        <Building2 size={14} className="text-primary/60" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      {exp.current && (
                        <span className="animate-pulse rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-5 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 + 0.3 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-primary" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/8 border border-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/15 hover:border-primary/20"
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
