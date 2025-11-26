import React from "react";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full [font-family:'Poppins',Helvetica] font-medium text-black text-[25px] tracking-[0] leading-[normal]">
      <p>
        <a
          href="mailto:paulninosalaan75@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity"
        >
          Email me
        </a>{" "}
        for a collaboration or a casual chat, slide into my{" "}
        <a
          href="https://www.instagram.com/nine.e_____?igsh=cHhraTVjdXBqM2o1"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity"
        >
          Instagram
        </a>{" "}
        for DMs, or let&apos;s connect on{" "}
        <a
          href="https://www.linkedin.com/in/paul-ni%C3%B1o-salaan-5699b634a/"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:opacity-80 transition-opacity"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
};
