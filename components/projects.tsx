"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ArrowUpRight, BarChart3, Database, FileText, Star } from "lucide-react";

const projects = [
  {
    title: "WebPos / Web Accounting",
    description:
      "Comprehensive accounting system with invoicing, financial reports, ledger management, and real-time analytics for businesses. Handles 10,000+ daily transactions.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "EF Core"],
    icon: BarChart3,
    featured: true,
    highlights: ["10,000+ daily transactions", "Real-time analytics dashboard"],
  },
  {
    title: "DMS - Distribution Management",
    description:
      "Enterprise distribution management platform used by major brands including Dabur, Nestle, and Gorkha Brewery for supply chain operations.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
    icon: Database,
    featured: true,
    highlights: ["Used by 3+ major brands", "End-to-end supply chain"],
  },
  {
    title: "Dynamic Reports Engine",
    description:
      "Flexible JSON-based dynamic reporting engine that allows users to generate customized reports without code changes. Reduced report creation time by 80%.",
    technologies: ["Angular", "TypeScript", "RxJS", ".NET Core"],
    icon: FileText,
    featured: false,
    highlights: ["80% faster report creation", "Zero-code report builder"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="animate-float-delayed absolute top-1/3 right-0 h-64 w-64 rounded-full bg-primary/[0.02] blur-3xl" />
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.12 + 0.3, type: "spring" }}
                    className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30"
                  >
                    <Star size={10} fill="currentColor" />
                    Featured
                  </motion.div>
                </div>
              )}

              <div className="glass-card flex h-full flex-col overflow-hidden rounded-xl transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/5">
                {/* Gradient top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Header */}
                <div className="flex items-start justify-between p-6 pb-0">
                  <motion.div
                    className="rounded-xl bg-primary/10 p-3.5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <project.icon size={24} />
                  </motion.div>
                  <motion.div
                    className="rounded-full p-2 text-muted-foreground"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileHover={{ x: 3, y: -3 }}
                    animate={{ opacity: 1 }}
                  >
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary"
                    />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-primary/80">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 + 0.2 }}
                        className="rounded-md bg-secondary/60 border border-border/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-all hover:border-primary/20 hover:text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
