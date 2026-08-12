"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "OneMobile — Shopify Mobile App",
    description:
      "React Native mobile app for Shopify merchants with real-time preview and testing. Achieved 4.9/5 rating on Shopify App Store.",
    metrics: [
      { label: "Performance", value: 98 },
      { label: "Load Time", value: 95 },
      { label: "User Rating", value: 98 },
    ],
    tech: [
      "React Native & Shopify SDK integration",
      "Lazy loading & asset compression",
      "Dynamic UI refactoring & theming",
      "Real-time preview with WebSocket",
    ],
    achievements: [
      "Load time: 15s → 2–3s (~80% improvement)",
      "App size: 150MB → 30MB (~80% reduction)",
      "4.9/5 rating on Shopify App Store",
    ],
    link: "https://github.com/thanhphuc1320/onemobile-preview",
  },
  {
    title: "Portal Expert — Internal Web Platform",
    description:
      "Internal platform to manage KPIs, tickets, and real-time collaboration for employees, customers, and agencies.",
    metrics: [
      { label: "Performance", value: 95 },
      { label: "Accessibility", value: 92 },
      { label: "Scalability", value: 96 },
    ],
    tech: [
      "Role-based access & permissions",
      "Real-time notifications via Pusher",
      "Crisp Chat integration for support",
      "Modular frontend architecture",
    ],
    achievements: [
      "Improved support response time",
      "Increased internal engagement via real-time notifications",
      "Enabled long-term scalability",
    ],
    link: "https://github.com/thanhphuc1320/portal-expert",
  },
];

function MetricCircle({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const color =
    value >= 95
      ? "text-green-400"
      : value >= 90
        ? "text-blue-400"
        : "text-yellow-400";
  return (
    <div className="flex flex-col items-center">
      <span className={`text-2xl md:text-3xl font-bold ${color}`}>{value}</span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="projects">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-muted-foreground/30 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                {project.metrics.map((m) => (
                  <MetricCircle key={m.label} value={m.value} label={m.label} />
                ))}
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-3">
                Technical Implementation
              </h4>
              <ul className="space-y-2 mb-6">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold text-foreground mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {project.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-48 md:h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
              <span className="relative text-muted-foreground text-sm font-medium">
                Project Preview
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
