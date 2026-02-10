"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Mail, Phone, Linkedin, Send, CheckCircle, MapPin, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rejinasthapit1@gmail.com",
    href: "mailto:rejinasthapit1@gmail.com",
    color: "from-red-500/10 to-orange-500/10",
    hoverColor: "group-hover:text-red-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9860728333",
    href: "tel:9860728333",
    color: "from-green-500/10 to-emerald-500/10",
    hoverColor: "group-hover:text-green-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rejina-sthapit",
    href: "https://linkedin.com/in/rejina-sthapit",
    color: "from-blue-500/10 to-cyan-500/10",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "#",
    color: "from-purple-500/10 to-pink-500/10",
    hoverColor: "group-hover:text-purple-400",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="animate-float-delayed absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <div className="mb-4">
              <h3 className="font-heading text-xl font-bold text-foreground">Get In Touch</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out through any of these channels.
              </p>
            </div>
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="group glass-card flex items-center gap-4 rounded-xl p-4"
              >
                <div className={`rounded-xl bg-gradient-to-br ${item.color} p-3 text-primary transition-all duration-300 ${item.hoverColor}`}>
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
                <ArrowRight size={14} className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`mb-2 block text-sm font-medium transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-foreground'}`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="input-glow w-full rounded-xl border border-border bg-secondary/20 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 transition-all duration-300 focus:bg-secondary/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`mb-2 block text-sm font-medium transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-foreground'}`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="input-glow w-full rounded-xl border border-border bg-secondary/20 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 transition-all duration-300 focus:bg-secondary/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className={`mb-2 block text-sm font-medium transition-colors ${focusedField === 'subject' ? 'text-primary' : 'text-foreground'}`}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="input-glow w-full rounded-xl border border-border bg-secondary/20 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 transition-all duration-300 focus:bg-secondary/40 focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className={`mb-2 block text-sm font-medium transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-foreground'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="input-glow w-full resize-none rounded-xl border border-border bg-secondary/20 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 transition-all duration-300 focus:bg-secondary/40 focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70 sm:w-auto"
                whileTap={{ scale: 0.97 }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
