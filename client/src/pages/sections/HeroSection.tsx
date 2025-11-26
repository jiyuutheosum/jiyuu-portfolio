import React from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import SocialPill from "@/components/SocialPill";

const socialIcons = [
  { id: 1, alt: "Social icon 1" },
  { id: 2, alt: "Social icon 2" },
  { id: 3, alt: "Social icon 3" },
  { id: 4, alt: "Social icon 4" },
  { id: 5, alt: "Social icon 5" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <motion.section id="home" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col w-full items-center gap-[11px] px-4 py-[125px] bg-[#dce5e5]">
      <Avatar className="w-[200px] h-[200px]">
        <AvatarImage
          src="/figmaAssets/ellipse-1.png"
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback>JY</AvatarFallback>
      </Avatar>

      <div className="font-semibold text-[#1e2929] text-[28px] tracking-[0] leading-[1]">
        @Jiyuu
      </div>

      <div className="font-normal text-[#1e2929] text-[16px] tracking-[0] leading-[1.6] max-w-[720px] text-center">
        &quot;Building clean, intuitive digital experiences&quot;
      </div>

      <SocialPill />
    </motion.section>
  );
};
