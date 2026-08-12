"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MapPin } from "lucide-react";

const socials = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/thanhphuc1320",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://linkedin.com/in/thanhphuc132098/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={18} />,
    href: "#",
    label: "Twitter",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-xl mx-auto" id="contact">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-muted-foreground text-sm mb-4">
          Looking for a developer who can create high-performance, interactive web
          experiences?
        </p>
        <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} />
          <span>Ho Chi Minh City, Vietnam</span>
        </div>
      </motion.div>

      <motion.form
        className="space-y-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition resize-none"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 text-sm hover:opacity-90 transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="mailto:thanhphuc132098@gmail.com"
          className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground transition flex items-center gap-2"
        >
          <span>📄</span>
          thanhphuc132098@gmail.com
        </a>
      </motion.div>

      <motion.div
        className="flex justify-center gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
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
    </section>
  );
}
