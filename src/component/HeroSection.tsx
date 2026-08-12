"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";

const techBadges = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "TailwindCSS",
  "React Native",
];

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/thanhphuc1320",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://linkedin.com/in/thanhphuc132098/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={20} />,
    href: "#",
    label: "Twitter",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nguyen Thanh Phuc
      </motion.h1>

      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="h-px w-12 bg-muted-foreground/40" />
        <span className="text-lg md:text-xl font-medium text-muted-foreground tracking-wide">
          Frontend Engineer
        </span>
        <span className="h-px w-12 bg-muted-foreground/40" />
      </motion.div>

      <motion.p
        className="text-muted-foreground max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Frontend Engineer with 4+ years of experience building high-performance,
        scalable web applications and 1 year of mobile development.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {techBadges.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-card text-muted-foreground"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition font-medium text-sm flex items-center gap-2"
        >
          View My Work
          <span>→</span>
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full border border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground transition font-medium text-sm"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        className="flex gap-5 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
