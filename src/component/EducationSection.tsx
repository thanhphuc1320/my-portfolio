"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "Cao Thang Technical College",
    degree: "Information Technology",
    period: "Sep 2016 – Jul 2019",
    gpa: "7.1/10",
    achievements: [
      "2nd Prize — Cao Thang Informatics Olympiad",
      "Graduated with GPA: 7.1/10",
    ],
  },
];

export default function EducationSection() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto" id="education">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            className="rounded-2xl border border-border bg-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.school}
                </h3>
                <p className="text-sm text-primary font-medium">{edu.degree}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1 sm:mt-0">
                {edu.period} · GPA {edu.gpa}
              </span>
            </div>

            <ul className="space-y-2 mt-4">
              {edu.achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
