"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Code2, ExternalLink, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "Angular Expert",
  ".NET Core Specialist",
  "Software Engineer",
];

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "3+", label: "Enterprise Clients" },
  { value: "1", label: "Best Employee Award" },
];

function FloatingParticle({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -10, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { delay: 0, duration: 7, x: "10%", y: "20%", size: 6 },
  { delay: 1, duration: 9, x: "80%", y: "15%", size: 4 },
  { delay: 2, duration: 6, x: "25%", y: "70%", size: 8 },
  { delay: 0.5, duration: 8, x: "65%", y: "60%", size: 5 },
  { delay: 1.5, duration: 10, x: "45%", y: "30%", size: 3 },
  { delay: 3, duration: 7, x: "90%", y: "75%", size: 6 },
  { delay: 2.5, duration: 9, x: "15%", y: "85%", size: 4 },
  { delay: 0.8, duration: 6, x: "70%", y: "40%", size: 7 },
  { delay: 1.2, duration: 8, x: "35%", y: "50%", size: 3 },
  { delay: 3.5, duration: 7, x: "55%", y: "90%", size: 5 },
];

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

export function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section className="dot-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-float-delayed absolute right-10 bottom-20 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="animate-float absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-3xl" />
        <div className="animate-float-delayed absolute top-10 right-1/3 h-48 w-48 rounded-full bg-primary/[0.02] blur-2xl" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary backdrop-blur-md"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="font-medium">Available for Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl"
        >
          <span className="text-balance">
            {"Hi, I'm "}
            <span className="gradient-text">Rejina Sthapit</span>
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <Terminal size={18} className="text-primary" />
          <span className="font-heading text-xl font-semibold text-primary md:text-2xl">
            {typedRole}
            <span className="typing-cursor" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Building clean, scalable full-stack solutions with{" "}
          <span className="font-medium text-foreground">Angular</span> &{" "}
          <span className="font-medium text-foreground">.NET Core</span>.
          Turning ideas into production-ready applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="glass-card inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground"
          >
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="glass-card rounded-xl px-4 py-4 text-center"
            >
              <div className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            Scroll
          </span>
          <ArrowDown size={16} className="text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
