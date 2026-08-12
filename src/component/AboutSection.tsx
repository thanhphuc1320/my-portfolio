"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center" id="about">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Summary
      </motion.h2>

      <motion.div
        className="space-y-4 text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>
          Frontend Engineer with <strong className="text-foreground">4+ years of experience</strong> in
          building high-performance, scalable web applications and 1 year of mobile
          development. Strong expertise in ReactJS, TypeScript, NextJS, and modern state
          management.
        </p>
        <p>
          Proven track record of improving application performance, reducing development
          time, and delivering user-centric products. Passionate about clean code, UI/UX,
          and collaboration to create impactful digital experiences.
        </p>
      </motion.div>
    </section>
  );
}
