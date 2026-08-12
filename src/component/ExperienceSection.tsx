"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend & Mobile Developer",
    company: "Firegroup Technology",
    period: "07/2022 – 03/2025",
    bullets: [
      "Developed and maintained the OneMobile Shopify mobile app using React Native within an Agile (Scrum) workflow.",
      "Collaborated with Design, PM, QC, and Backend teams to deliver features aligned with business requirements.",
      "Optimized app performance through lazy loading, asset compression, and dynamic UI refactoring.",
      "Managed source code with GitLab, handled pull requests, and tracked progress using Jira.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tego Global",
    period: "07/2020 – 04/2022",
    bullets: [
      "Developed and maintained front-end code for 7 websites across various industries (E-Commerce, Healthcare, Business Management).",
      "Collaborated with cross-functional teams and clients to deliver scalable and high-performance web solutions.",
      "Provided technical solutions and optimized UI/UX to enhance user experience and project efficiency.",
      "Worked closely with designers to address UI/UX challenges, ensuring seamless and visually appealing interfaces.",
      "Resolved 300+ UI and functionality-related issues to improve system stability and performance.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "FPT Software",
    period: "05/2019 – 05/2020",
    bullets: [
      "Worked on a Fiori-based project for a Japanese client to build an internal product management system for inventory tracking.",
      "Developed responsive web applications with a strong focus on performance and user experience.",
      "Participated in client discussions, product walkthroughs, and onboarding sessions.",
      "Provided technical support and gathered client feedback to report bugs and feature requests.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="experience">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-border ml-3 md:ml-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            className="relative pl-8 md:pl-12"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* timeline dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary font-medium">{exp.company}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
