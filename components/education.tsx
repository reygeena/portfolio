"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
    {
        degree: "Bachelor's in Computer Science & Information Technology",
        shortDegree: "BSc. CSIT",
        institution: "Tribhuvan University",
        location: "Kathmandu, Nepal",
        period: "2016 - 2020",
        description: "Comprehensive study of computer science fundamentals including data structures, algorithms, database systems, software engineering, and web technologies.",
        coursework: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Web Technologies", "Operating Systems", "Computer Networks"],
    },
];

export function Education() {
    return (
        <section id="education" className="relative py-24 px-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-float absolute top-1/3 left-10 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-4xl">
                <SectionHeader
                    label="Education"
                    title="Academic Background"
                    description="The foundation that shaped my technical skills and problem-solving approach."
                />

                <div className="flex flex-col gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="glass-card group rounded-2xl p-8">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                    {/* Icon */}
                                    <motion.div
                                        className="shrink-0 rounded-2xl bg-primary/10 p-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                    >
                                        <GraduationCap size={32} />
                                    </motion.div>

                                    <div className="flex-1">
                                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <BookOpen size={14} className="text-primary/60" />
                                                {edu.institution}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <MapPin size={14} className="text-primary/60" />
                                                {edu.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 rounded-lg bg-secondary/50 px-3 py-1 text-sm text-muted-foreground">
                                                <Calendar size={13} />
                                                {edu.period}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                            {edu.description}
                                        </p>

                                        {/* Coursework */}
                                        <div className="mt-5">
                                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                Key Coursework
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.coursework.map((course, i) => (
                                                    <motion.span
                                                        key={course}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: i * 0.05 + 0.2 }}
                                                        className="rounded-lg border border-border/50 bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/20 hover:text-primary"
                                                    >
                                                        {course}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
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
