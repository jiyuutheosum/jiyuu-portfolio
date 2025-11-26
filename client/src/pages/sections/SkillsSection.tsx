import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  { name: "HTML", className: "bg-[#1e2929]" },
  { name: "CSS", className: "bg-[#1e2929]" },
  { name: "JavaScript", className: "bg-[#1e2929]" },
  { name: "MySQL", className: "bg-[#1e2929]" },
  { name: "Pandas", className: "bg-[#1e2929]" },
  { name: "Typescript", className: "bg-[#1e2929]" },
  { name: "C++", className: "bg-[#1e2929]" },
  { name: "Github", className: "bg-[#1e2929]" },
];

const skillsDataRow2 = [
  { name: "Firebase", className: "bg-[#1e2929]" },
  { name: "Figma", className: "bg-[#1e2929]" },
  { name: "Jupiter", className: "bg-black" },
  { name: "Canva", className: "bg-black" },
  { name: "Bootstrap", className: "bg-[#1e2929]" },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-[#dce5e5] py-11">
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-extrabold text-black text-[34px] tracking-[0] leading-[1]">
          SKILLS
        </h2>

        <div className="flex flex-col items-center gap-[25px]">
          <div className="flex items-center justify-center gap-2">
            {skillsData.map((skill, index) => (
              <Badge
                key={index}
                className={`${skill.className} rounded-[20px] px-[26px] py-2 h-[36px] min-w-[100px] flex items-center justify-center`}
              >
                   <span className="font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {skillsDataRow2.map((skill, index) => (
              <Badge
                key={index}
                className={`${skill.className} rounded-[20px] px-[26px] py-2 h-[36px] min-w-[100px] flex items-center justify-center`}
              >
                <span className="font-semibold text-white text-[15px] tracking-[0] leading-[1] whitespace-nowrap">
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
