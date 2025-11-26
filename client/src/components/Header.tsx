import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

type NavItem = {
  key: string;
  label: string;
  target: string;
};

const NAV: NavItem[] = [
  { key: "home", label: "Home", target: "home" },
  { key: "about", label: "About", target: "about" },
  { key: "skills", label: "Skills", target: "skills" },
  { key: "portfolio", label: "Portfolio", target: "portfolio" },
  { key: "contact", label: "Contact", target: "contact" },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (target: string) => {
    // use anchor scrolling for simplicity + smooth behaviour
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Also update the router path so deep linking works if desired
    setLocation(`#${target}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/40 dark:bg-black/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-md flex items-center justify-center text-white font-bold">
            FA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Faiza</span>
            <span className="text-xs text-slate-500">Portfolio</span>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <motion.button
              key={n.key}
              onClick={() => handleNavClick(n.target)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative text-sm text-slate-700 dark:text-slate-200 px-2 py-1 rounded-md transition-colors duration-150 hover:text-emerald-600"
            >
              <span className="tracking-wide">{n.label}</span>
              <motion.span
                layout
                className="absolute left-0 right-0 bottom-0 h-[2px] bg-emerald-500 origin-left invisible"
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm shadow-sm hover:opacity-95"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
