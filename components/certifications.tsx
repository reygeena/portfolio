"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { BadgeCheck, Shield, Code2 } from "lucide-react";

const certifications = [
    {
        title: "Angular Development",
        issuer: "Professional Training",
        icon: Code2,
        description: "Advanced Angular architecture, RxJS patterns, state management, and enterprise application development.",
    },
    {
        title: "ASP.NET Core",
        issuer: "Professional Training",
        icon: Shield,
        description: "RESTful API design, Entity Framework Core, authentication/authorization, and microservices architecture.",
    },
    {
        title: "SQL Server Administration",
        issuer: "Professional Training",
        icon: BadgeCheck,
        description: "Database design, query optimization, stored procedures, and performance tuning for enterprise systems.",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="relative py-24 px-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-float-delayed absolute bottom-1/4 right-10 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                <SectionHeader
                    label="Certifications"
                    title="Professional Training"
                    description="Continuous learning and professional development to stay at the cutting edge."
                />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="glass-card group rounded-xl p-6 text-center"
                        >
                            <motion.div
                                className="mx-auto mb-4 inline-flex rounded-2xl bg-primary/10 p-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <cert.icon size={28} />
                            </motion.div>
                            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary/60">
                                {cert.issuer}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
