import React from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  icon?: React.ReactNode;
};

export const SkillCard: React.FC<Props> = ({ label, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white dark:bg-[#0b1220] rounded-lg shadow-sm p-4 flex items-center gap-3 border border-transparent hover:shadow-lg transition-shadow duration-150"
    >
      <div className="w-10 h-10 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-semibold">
        {icon ?? label.charAt(0)}
      </div>
      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</div>
    </motion.div>
  );
};

export default SkillCard;
