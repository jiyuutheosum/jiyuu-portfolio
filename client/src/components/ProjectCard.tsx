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
      className="bg-gradient-to-br from-slate-50 via-white to-white rounded-xl overflow-hidden shadow-md border border-transparent hover:shadow-xl transition-shadow duration-200"
    >
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="text-slate-400 text-sm">Project image</div>
        )}
      </div>

      <div className="bg-white p-4 md:p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-2">{description}</p>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-500">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-slate-100 rounded-md border border-transparent">
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
