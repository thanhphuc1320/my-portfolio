"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Development",
    color: "bg-blue-500",
    skills: [
      { name: "ReactJS & Next.js", percent: 95 },
      { name: "TypeScript", percent: 92 },
      { name: "HTML5 & CSS3", percent: 90 },
      { name: "TailwindCSS / MUI / Ant Design", percent: 88 },
    ],
  },
  {
    title: "State & APIs",
    color: "bg-green-500",
    skills: [
      { name: "Redux / Redux-Saga / Zustand", percent: 90 },
      { name: "RESTful APIs", percent: 90 },
      { name: "GraphQL", percent: 80 },
      { name: "Socket.IO / WebSocket", percent: 85 },
    ],
  },
  {
    title: "Mobile & DevOps",
    color: "bg-purple-500",
    skills: [
      { name: "React Native", percent: 85 },
      { name: "Shopify App Development", percent: 88 },
      { name: "CI/CD & GitLab", percent: 82 },
      { name: "Jest / React Testing Library", percent: 80 },
    ],
  },
];

function ProgressBar({
  percent,
  color,
  delay,
}: {
  percent: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="skills">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            className="rounded-2xl border border-border bg-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-foreground">
              {cat.title}
            </h3>
            <div className="space-y-4">
              {cat.skills.map((skill, sIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <span className="text-muted-foreground font-medium">
                      {skill.percent}%
                    </span>
                  </div>
                  <ProgressBar
                    percent={skill.percent}
                    color={cat.color}
                    delay={catIndex * 0.15 + sIndex * 0.1}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
