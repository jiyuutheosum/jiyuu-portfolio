import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const socialIcons = [
  { id: 1, alt: "Social icon 1" },
  { id: 2, alt: "Social icon 2" },
  { id: 3, alt: "Social icon 3" },
  { id: 4, alt: "Social icon 4" },
  { id: 5, alt: "Social icon 5" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[11px] px-4 py-[125px] bg-[#dce5e5]">
      <Avatar className="w-[200px] h-[200px]">
        <AvatarImage
          src="/figmaAssets/ellipse-1.png"
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback>JY</AvatarFallback>
      </Avatar>

      <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1e2929] text-2xl tracking-[0] leading-[normal]">
        @Jiyuu
      </div>

      <div className="[font-family:'Poppins',Helvetica] font-normal text-[#1e2929] text-[15px] tracking-[0] leading-[normal]">
        &quot;Building clean, intuitive digital experiences&quot;
      </div>

      <img
        className="w-[308px] h-[66px] mt-2"
        alt="Social media icons"
        src="/figmaAssets/group-1.png"
      />
    </section>
  );
};
