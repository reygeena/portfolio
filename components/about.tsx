"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Briefcase, Code, Layers, Zap, Users, Globe } from "lucide-react";
import { useRef, useState } from "react";

const highlights = [
  {
    icon: Briefcase,
    value: "4+",
    title: "Years Experience",
    description: "Professional full-stack development across enterprise applications",
  },
  {
    icon: Code,
    value: "10+",
    title: "Projects Delivered",
    description: "End-to-end solutions from frontend to backend deployed to production",
  },
  {
    icon: Layers,
    value: "Angular & .NET",
    title: "Core Expertise",
    description: "Deep expertise in enterprise-grade frameworks and scalable architectures",
  },
  {
    icon: Zap,
    value: "100%",
    title: "Code Quality Focus",
    description: "Clean, testable, maintainable code with SOLID principles",
  },
  {
    icon: Users,
    value: "3+",
    title: "Major Clients",
    description: "Dabur, Nestle, Gorkha Brewery — trusted by industry leaders",
  },
  {
    icon: Globe,
    value: "Full Stack",
    title: "End-to-End",
    description: "From responsive UIs to RESTful APIs, databases, and deployment",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-delayed absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="About Me"
          title="Passionate About Building Great Software"
          description="I'm a Full Stack Developer with 4+ years of experience specializing in Angular and .NET Core, dedicated to crafting clean, scalable, and high-performance applications that solve real-world business problems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="glass-card group h-full rounded-xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary/80">
                    {item.value}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
