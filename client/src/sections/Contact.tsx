import React from "react";
import { motion } from "framer-motion";
import { IconMail, IconBrandInstagram, IconBrandLinkedin } from "lucide-react";

const LinkItem: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.03 }}
    className="group inline-flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-150 text-slate-700 hover:text-emerald-600"
  >
    <span className="text-emerald-600 group-hover:text-emerald-500">{icon}</span>
    <span className="relative text-sm font-medium">
      {label}
      <span className="block h-[1px] bg-emerald-600 transition-all duration-200 scale-x-0 group-hover:scale-x-100 origin-left mt-1" />
    </span>
  </motion.a>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-xl p-8 shadow-sm border border-transparent">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold">Say hello</h3>
            <p className="text-slate-600 mt-2">If you'd like to work together or just say hi, choose one of the options below.</p>
          </div>

          <div className="flex gap-4 items-center">
            <LinkItem href="mailto:faiza@example.com" icon={<IconMail size={18} />} label="Email me" />
            <LinkItem href="https://instagram.com/yourusername" icon={<IconBrandInstagram size={18} />} label="Instagram" />
            <LinkItem href="https://linkedin.com/in/yourusername" icon={<IconBrandLinkedin size={18} />} label="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
