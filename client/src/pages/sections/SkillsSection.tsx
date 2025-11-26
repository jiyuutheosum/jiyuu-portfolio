import React from "react";
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
    <section className="w-full bg-[#dce5e5] py-11">
      <div className="flex flex-col items-center gap-8">
        <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-3xl tracking-[0] leading-[normal]">
          SKILLS
        </h2>

        <div className="flex flex-col items-center gap-[25px]">
          <div className="flex items-center justify-center gap-2">
            {skillsData.map((skill, index) => (
              <Badge
                key={index}
                className={`${skill.className} rounded-[20px] px-[30px] py-1.5 h-[35px] min-w-[100px] flex items-center justify-center`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {skillsDataRow2.map((skill, index) => (
              <Badge
                key={index}
                className={`${skill.className} rounded-[20px] px-[30px] py-1.5 h-[35px] min-w-[100px] flex items-center justify-center`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
