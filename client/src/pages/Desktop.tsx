import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsSection } from "./sections/SkillsSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />

      <section className="w-full flex flex-col items-center bg-[#dce5e5] rounded-[0px_0px_20px_20px] px-20 pt-[92px] pb-[92px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#1e2929] text-[50px] tracking-[0] leading-[normal] mb-12">
          Let&#39;s get in Touch!
        </h2>
        <ContactSection />
      </section>
    </main>
  );
};
