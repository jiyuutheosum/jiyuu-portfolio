import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// single-page layout imports (render sections directly)
import { HeaderSection } from "@/pages/sections/HeaderSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { AboutSection } from "@/pages/sections/AboutSection";
import { SkillsSection } from "@/pages/sections/SkillsSection";
import { PortfolioSection } from "@/pages/sections/PortfolioSection";
import { ContactSection } from "@/pages/sections/ContactSection";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Single-page site composition (header + sections) */}
        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100">
          <HeaderSection />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />

          <section className="w-full flex flex-col items-center bg-[#dce5e5] rounded-[0px_0px_20px_20px] px-20 pt-[92px] pb-[92px]">
            <h2 className="font-extrabold text-[#1e2929] text-[50px] tracking-[0] leading-[1] mb-12">Let&apos;s get in Touch!</h2>
            <ContactSection />
          </section>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
