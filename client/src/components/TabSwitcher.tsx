import React from "react";
import { motion } from "framer-motion";

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const TabSwitcher: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-lg bg-slate-100 p-1 gap-1">
      {options.map((opt) => {
        const selected = opt === value;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
              selected ? "text-white" : "text-slate-700"
            }`}
          >
            {selected && (
              <motion.div
                layoutId="tab-focus"
                className="absolute inset-0 rounded-lg bg-emerald-600 z-0"
                style={{ boxShadow: "0 6px 22px rgba(16, 185, 129, 0.18)" }}
              />
            )}

            <span className={`relative z-10 ${selected ? "font-semibold" : "font-medium"}`}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
