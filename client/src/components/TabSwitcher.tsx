import React from "react";
import { motion } from "framer-motion";

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const TabSwitcher: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-[30px] bg-white p-2 gap-2 shadow-sm border border-transparent w-[845px] h-[65px]">
      {options.map((opt) => {
        const selected = opt === value;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`relative px-8 py-2 rounded-[20px] text-[25px] transition-all duration-200 flex-1 ${
              selected ? "text-white" : "text-[#344647]"
            }`}
          >
            {selected && (
              <motion.div
                layoutId="tab-focus"
                className="absolute inset-0 rounded-[20px] bg-[#344647] z-0"
                style={{ boxShadow: "0 10px 26px rgba(16, 22, 20, 0.16)" }}
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
