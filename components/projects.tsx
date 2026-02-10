"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ArrowUpRight, BarChart3, Database, FileText } from "lucide-react";

const projects = [
  {
    title: "WebPos / Web Accounting",
    description:
      "Comprehensive accounting system with invoicing, financial reports, ledger management, and real-time analytics for businesses.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "EF Core"],
    icon: BarChart3,
  },
  {
    title: "DMS - Distributed Management System",
    description:
      "Enterprise distribution management platform used by major brands including Dabur, Nestle, and Gorkha Brewery for supply chain operations.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
    icon: Database,
  },
  {
    title: "Dynamic Reports",
    description:
      "Flexible JSON-based dynamic reporting engine that allows users to generate customized reports without code changes.",
    technologies: ["Angular", "TypeScript", "RxJS", ".NET Core"],
    icon: FileText,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          description="A selection of projects that showcase my expertise in building enterprise-grade applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between p-6 pb-0">
                <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <project.icon size={24} />
                </div>
                <div className="rounded-full p-2 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground"
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
    </section>
  );
}
