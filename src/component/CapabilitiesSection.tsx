"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Wrench,
  Gauge,
  ShieldCheck,
  Box,
} from "lucide-react";

const capabilities = [
  {
    icon: <Box size={20} />,
    title: "Web Performance",
    items: ["Lazy loading", "Asset compression", "Code splitting"],
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile Development",
    items: ["React Native", "Cross-platform", "App-like experience"],
  },
  {
    icon: <Zap size={20} />,
    title: "Real-time Features",
    items: ["WebSockets", "Socket.IO", "Server-Sent Events"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Shopify Ecosystem",
    items: ["Shopify SDK", "App Store listing", "Theme customization"],
  },
  {
    icon: <Gauge size={20} />,
    title: "Testing & Quality",
    items: ["Jest", "React Testing Library", "ESLint & Prettier"],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Team Collaboration",
    items: ["Agile / Scrum", "GitLab CI/CD", "Jira & Confluence"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Modern Web Capabilities
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((cap, index) => (
          <motion.div
            key={cap.title}
            className="rounded-2xl border border-border bg-card p-6 hover:border-muted-foreground/20 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-muted text-primary">
                {cap.icon}
              </div>
              <h3 className="font-semibold text-foreground">{cap.title}</h3>
            </div>
            <ul className="space-y-2">
              {cap.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
