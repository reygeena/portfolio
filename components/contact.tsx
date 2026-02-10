"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rejinasthapit1@gmail.com",
    href: "mailto:rejinasthapit1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9860728333",
    href: "tel:9860728333",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rejina-sthapit",
    href: "https://linkedin.com/in/rejina-sthapit",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-70 sm:w-auto"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
