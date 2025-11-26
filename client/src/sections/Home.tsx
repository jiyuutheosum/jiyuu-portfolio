import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconMail, IconBrandLinkedin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center" aria-label="Home">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 py-24 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-7">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">Hi — I’m Faiza</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">I build delightful, minimalistic interfaces and data-driven applications that scale. I combine modern React workflows with clean visual design.</p>

          <div className="mt-8 flex gap-4 items-center">
            <motion.a
              href="mailto:faiza@example.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, rotate: -6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent bg-emerald-600 text-white shadow-sm"
            >
              <IconMail size={16} />
              <span className="text-sm">Email me</span>
            </motion.a>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12, rotate: 8 }}
                className="p-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                aria-label="GitHub"
              >
                <IconBrandGithub size={18} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12, rotate: -8 }}
                className="p-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={18} />
              </motion.a>

              <motion.a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12, rotate: 6 }}
                className="p-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="col-span-5 hidden lg:flex justify-center">
          <div className="w-64 h-64 rounded-3xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-lg flex items-center justify-center">
            <div className="w-44 h-44 rounded-2xl bg-white shadow-inner border border-transparent flex items-center justify-center text-2xl font-bold">FA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
