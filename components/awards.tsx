"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Trophy } from "lucide-react";

export function Awards() {
  return (
    <section id="awards" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Awards"
          title="Recognition"
          description="Achievements and honors received throughout my career."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5 transition-all group-hover:bg-primary/10" />

            <div className="relative flex items-start gap-5">
              <div className="rounded-xl bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary/20">
                <Trophy size={32} />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Best Employee of the Year
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">2024</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Recognized for outstanding contributions and exceptional performance at IMS Software Pvt. Ltd.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-md bg-secondary/80 px-3 py-1 font-medium text-secondary-foreground">
                    IMS Software Pvt. Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
