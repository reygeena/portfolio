"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-float-delayed absolute right-10 bottom-20 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="animate-float absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <Code2 size={16} className="text-primary" />
          <span>Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl"
        >
          <span className="text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Rejina Sthapit</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Building clean, scalable full-stack solutions with{" "}
          <span className="font-medium text-foreground">Angular</span> &{" "}
          <span className="font-medium text-foreground">.NET Core</span>.
          Turning ideas into production-ready applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            View Projects
            <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
