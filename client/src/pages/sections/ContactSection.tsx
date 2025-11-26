import React from "react";
import { motion } from "framer-motion";

export const ContactSection = (): JSX.Element => {
  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full font-medium text-black text-[25px] tracking-[0] leading-[1.6]">
      <p>
        <a
          href="mailto:paulninosalaan75@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity underline-offset-4"
        >
          Email me
        </a>{" "}
        for a collaboration or a casual chat, slide into my{" "}
        <a
          href="https://www.instagram.com/nine.e_____?igsh=cHhraTVjdXBqM2o1"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity underline-offset-4"
        >
          Instagram
        </a>{" "}
        for DMs, or let&apos;s connect on{" "}
        <a
          href="https://www.linkedin.com/in/paul-ni%C3%B1o-salaan-5699b634a/"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity underline-offset-4"
        >
          LinkedIn
        </a>
        .
      </p>
    </motion.section>
  );
};
