import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
};

export const ProjectCard: React.FC<Project> = ({ title, description, image, tech }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-[20px] overflow-hidden shadow-md border border-transparent hover:shadow-xl transition-shadow duration-200"
    >
      <div className="w-full h-[220px] bg-[#d9d9d9] flex items-center justify-center rounded-t-[20px]">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="text-slate-400 text-sm">Project image</div>
        )}
      </div>

      <div className="bg-white p-4 md:p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-3 max-w-[520px]">{description}</p>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-500">
            {tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-[#f0f0f0] rounded-full border border-transparent text-xs text-[#344647]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
