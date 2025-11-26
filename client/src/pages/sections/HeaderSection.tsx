import React from "react";
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
      <div className="[font-family:'Poppins',Helvetica] font-bold text-[#1e2929] text-[50px] tracking-[0] leading-[normal]">
        jiy.ui
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-[45px]">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-normal text-[#1e2929] text-[15px] tracking-[0] leading-[normal] hover:underline"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
