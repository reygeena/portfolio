"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:rejinasthapit1@gmail.com",
    label: "Email",
    hoverColor: "hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rejina-sthapit",
    label: "LinkedIn",
    hoverColor: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
    hoverColor: "hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/30",
  },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-card/30 px-6 pt-16 pb-8">
      {/* Gradient wave separator */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-3 mb-12"
        >
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 font-heading text-xl font-bold text-foreground transition-colors hover:text-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                RS
              </span>
              Rejina Sthapit
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Full Stack Developer specializing in Angular & .NET Core, building clean and scalable enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-xl border border-border bg-secondary/20 p-3 text-muted-foreground transition-all duration-300 ${link.hoverColor}`}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row"
        >
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {"© "}
            {new Date().getFullYear()}
            {" Rejina Sthapit. Crafted with "}
            <Heart size={14} className="fill-red-500 text-red-500" />
          </p>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
