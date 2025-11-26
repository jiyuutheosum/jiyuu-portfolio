import React from "react";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "Pandas",
  "Typescript",
  "C++",
  "GitHub",
  "Firebase",
  "Figma",
  "Jupyter",
  "Canva",
  "Bootstrap",
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Skills</h2>
          <p className="text-slate-600 mt-2">A concise list of tools and technologies I use regularly.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {SKILLS.map((s) => (
            <div key={s} className="p-2">
              <SkillCard label={s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
