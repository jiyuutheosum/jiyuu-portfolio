import React, { useState } from "react";
import TabSwitcher from "@/components/TabSwitcher";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const DEV_PROJECTS = [
  { title: "Dashboard UI", description: "Analytics and reporting dashboard.", tech: ["React", "TypeScript", "Tailwind"] },
  { title: "E-commerce Flow", description: "Cart and checkout micro-flows.", tech: ["React", "Node"] },
];

const DESIGN_PROJECTS = [
  { title: "Landing Concepts", description: "Visual design concepts for landing pages.", tech: ["Figma"] },
  { title: "Marketing Assets", description: "Campaign banners and hero visuals.", tech: ["Canva", "Figma"] },
];

export const Portfolio: React.FC = () => {
  const [tab, setTab] = useState<string>("Development");

  const list = tab === "Development" ? DEV_PROJECTS : DESIGN_PROJECTS;

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold">Portfolio</h2>
            <p className="text-slate-600 mt-1">Selected projects — design and development.</p>
          </div>

          <div className="flex items-center gap-4">
            <TabSwitcher options={["Development", "Design"]} value={tab} onChange={setTab} />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {list.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} />
          ))}
        </motion.div>

        <div className="mt-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white shadow-sm"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
