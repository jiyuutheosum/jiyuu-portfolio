import React, { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import TabSwitcher from "@/components/TabSwitcher";
import { motion } from "framer-motion";

const DEV_PROJECTS = [
  { id: 1, title: "Moongle Buddy", description: "Small e-commerce flow and cart checkout UI", tech: ["Firebase", "React"] },
  { id: 2, title: "Larga.CGY", description: "Marketing website concept with CMS integration", tech: ["React", "Tailwind"] },
];

const DESIGN_PROJECTS = [
  { id: 3, title: "Landing Concepts", description: "Conversion-focused landing experiments.", tech: ["Figma"] },
  { id: 4, title: "Marketing Assets", description: "Campaign artwork & hero visuals.", tech: ["Canva", "Figma"] },
];

const paginationDots = [{ active: true }, { active: false }, { active: false }];

export const PortfolioSection = (): JSX.Element => {
  const [tab, setTab] = useState<string>("Development");
  const items = tab === "Development" ? DEV_PROJECTS : DESIGN_PROJECTS;

  return (
    <motion.section id="portfolio" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-[#dce5e5] py-14 px-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="[-webkit-text-stroke:1px_#000000] font-semibold text-black text-[36px] tracking-[0] leading-[1] mb-[113px]">
          Portfolio
        </h2>

        <div className="flex justify-center mb-[43px]">
          <TabSwitcher options={["Development", "Design"]} value={tab} onChange={setTab} />
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {items.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.description} tech={p.tech} />
          ))}
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 flex-1">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-[15px] h-[15px] rounded-[7.5px] ${
                  dot.active ? "bg-[#1e2929]" : "bg-neutral-100"
                }`}
              />
            ))}
          </div>

          <button className="w-10 h-10 rounded-full bg-[#1e2929] text-white flex items-center justify-center shadow-md hover:bg-black transition-colors">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
