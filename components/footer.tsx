"use client";

import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:rejinasthapit1@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rejina-sthapit",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-lg border border-border bg-secondary/30 p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {"© "}
          {new Date().getFullYear()}
          {" Rejina Sthapit. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
