import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Slot from "@radix-ui/react-slot";
import { IconChevronRight } from "lucide-react";

export const About: React.FC = () => {
  const [front, setFront] = useState(true);

  return (
    <section id="about" className="min-h-[80vh] flex items-center py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">About me</h2>
          <p className="mt-4 text-slate-600 max-w-prose">I’m a UI-focused front-end developer with a love for clean, minimal UI and smooth interactions. My background spans design tools and frontend engineering, from Figma prototypes to data dashboards.</p>
        </div>

        <div className="col-span-6 flex items-center justify-center relative">
          <div className="relative w-[360px] h-[260px]">
            <AnimatePresence initial={false} mode="wait">
              {front ? (
                <motion.img
                  key="front"
                  src="/public/figmaAssets/photo-front.jpg"
                  alt="front"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-10 top-0 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              ) : (
                <motion.img
                  key="back"
                  src="/public/figmaAssets/photo-back.jpg"
                  alt="back"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 top-8 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Slot.Slot>
                <button
                  onClick={() => setFront((s) => !s)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow hover:scale-105 transition-transform duration-150"
                >
                  <span className="text-sm">Next</span>
                  <IconChevronRight size={16} />
                </button>
              </Slot.Slot>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
