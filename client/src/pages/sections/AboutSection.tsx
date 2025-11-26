import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AboutSection = (): JSX.Element => {
  const images = [
    {
      src: "/Assets/photo-1.png",
      alt: "Rectangle",
      zIndex: "z-10",
      transform: "translate-x-0",
    },
    {
      src: "/Assets/photo-2.png",
      alt: "Rectangle",
      zIndex: "z-20",
      transform: "translate-x-[26px]",
    },
    {
      src: "/Assets/photo-3.png",
      alt: "Rectangle",
      zIndex: "z-30",
      transform: "translate-x-[64px]",
    },
  ];

  const [idx, setIdx] = useState(0);

  return (
    <motion.section id="about" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full py-20 bg-[#dce5e5]">
      <div className="container mx-auto px-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="relative w-full lg:w-auto flex-shrink-0">
            <div className="relative h-[350px] w-[522px]">
              {/* front/back animated photos — clicking Next toggles */}
              <AnimatePresence mode="wait">
                {images.map((image, i) => {
                  // calculate order relative to idx so that the selected idx appears on top
                  const pos = (i - idx + images.length) % images.length;
                  // pos 0 is topmost, 1 middle, 2 bottommost
                  const baseLeft = pos === 0 ? 64 : pos === 1 ? 26 : 0;
                  const z = pos === 0 ? 30 : pos === 1 ? 20 : 10;
                  const key = `${image.src}-${i}-${idx}`;
                  return (
                    <motion.img
                      key={key}
                      src={image.src}
                      alt={image.alt}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className={`absolute top-0 w-[350px] h-[350px] rounded-[20px] border border-solid border-black object-cover shadow-2xl`}
                      style={{ left: `${baseLeft}px`, zIndex: z }}
                    />
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Next button below the photos (left column) - centered on mobile, left-aligned on large screens */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIdx((s) => (s + 1) % images.length)}
                aria-label="Next photo"
                className="bg-[#1e2929] text-white shadow-lg hover:bg-[#000000] border-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <h2 className="font-extrabold text-[#1e2929] text-[34px] tracking-[0] leading-[1]">
              ABOUT
            </h2>
            <div className="font-light text-[#344647] text-[18px] tracking-[0] leading-[1.9]">
              Hi I&apos;m Jalanie M. Baraocor, a 4th-year BSIT student at
              USTP-CDO Campus with a passion for creating accessible,
              user-centered digital experiences, while continuously learning and
              growing as a future full-stack developer.
              <br />
              <br />
              With a strong focus on UI/UX design, I aim to craft interfaces
              that are both functional and visually engaging. I am dedicated to
              developing user-centric solutions that enhance usability and
              accessibility, combining aesthetic appeal with strategic
              functionality to deliver intuitive and effective digital
              experiences.
            </div>
          </div>
        </div>

          <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIdx((s) => (s + 1) % images.length)}
            aria-label="Next photo"
            className="bg-[#1e2929] text-white shadow-lg hover:bg-[#000000] border-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
