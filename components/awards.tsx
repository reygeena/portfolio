"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Trophy, Award, Star, Sparkles } from "lucide-react";

const awards = [
  {
    title: "Best Employee of the Year",
    year: "2024",
    organization: "IMS Software Pvt. Ltd",
    description: "Recognized for outstanding contributions, exceptional performance, and consistent delivery of high-quality enterprise solutions.",
    icon: Trophy,
  },
];

function GoldenSparkle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute text-yellow-400/40"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Sparkles size={10} />
    </motion.div>
  );
}

export function Awards() {
  return (
    <section id="awards" className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Awards"
          title="Recognition & Achievements"
          description="Honors received throughout my career for excellence and dedication."
        />

        <div className="mx-auto max-w-xl">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-card/50 to-amber-500/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 animate-glow-pulse-gold">
                {/* Golden sparkles */}
                <GoldenSparkle delay={0} x="85%" y="10%" />
                <GoldenSparkle delay={0.8} x="10%" y="80%" />
                <GoldenSparkle delay={1.6} x="90%" y="75%" />
                <GoldenSparkle delay={2.4} x="20%" y="15%" />

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-yellow-500/10 to-transparent transition-all group-hover:from-yellow-500/20" />

                <div className="relative flex items-start gap-6">
                  {/* Trophy Icon */}
                  <motion.div
                    className="shrink-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 p-5 text-yellow-500 transition-all duration-500 group-hover:from-yellow-500/30 group-hover:to-amber-500/20 group-hover:shadow-lg group-hover:shadow-yellow-500/20"
                    whileHover={{ rotate: [0, -15, 15, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy size={36} />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold gradient-text-gold">
                      {award.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-500">
                        <Award size={14} />
                        {award.year}
                      </span>
                      <span className="text-sm text-muted-foreground">{award.organization}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {award.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                          <Star size={16} className="fill-yellow-500 text-yellow-500" />
                        </motion.div>
                      ))}
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
