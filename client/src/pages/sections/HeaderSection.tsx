import React from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between px-[108px] py-[31px] bg-[#dce5e5] rounded-[20px_20px_0px_0px]">
      <div className="font-bold text-[#1e2929] text-[50px] tracking-[0] leading-[1]">
        jiy.ui
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-[45px]">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  const id = item.href?.startsWith("#") ? item.href.slice(1) : item.href;
                  const el = document.getElementById(id || "");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer inline-block font-normal text-[#1e2929] text-[15px] tracking-[0] leading-[1] hover:underline px-2 py-1 transition-colors duration-150"
                >
                  {item.label}
                </motion.span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
