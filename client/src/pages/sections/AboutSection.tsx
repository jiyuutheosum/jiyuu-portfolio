import React from "react";

export const AboutSection = (): JSX.Element => {
  const images = [
    {
      src: "/figmaAssets/rectangle-3.png",
      alt: "Rectangle",
      zIndex: "z-10",
      transform: "translate-x-0",
    },
    {
      src: "/figmaAssets/rectangle-2.png",
      alt: "Rectangle",
      zIndex: "z-20",
      transform: "translate-x-[26px]",
    },
    {
      src: "/figmaAssets/rectangle-4.png",
      alt: "Rectangle",
      zIndex: "z-30",
      transform: "translate-x-[64px]",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#dce5e5]">
      <div className="container mx-auto px-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="relative w-full lg:w-auto flex-shrink-0">
            <div className="relative h-[350px] w-[522px]">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`absolute top-0 w-[350px] h-[350px] rounded-[20px] border border-solid border-black object-cover ${image.zIndex} ${image.transform}`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#1e2929] text-3xl tracking-[0] leading-[normal]">
              ABOUT
            </h2>

            <div className="[font-family:'Poppins',Helvetica] font-light text-[#344647] text-xl tracking-[0] leading-[normal]">
              Hi I&apos;m Jalanie M. Baraocor, a 4th-year BSIT student at
              USTP-CDO Campus with a passion for creating accessible,
              user-centered digital experiences, while continuously learning and
              growing as a future full-stack developer.
              <br />
              <br />
              With a strong focus on UI/UX design, I aim to craft interfaces
              that are both functional and visually engaging. I am dedicated to
              developing user-centric solutions that enhance usability and
              accessibility, combining aesthetic appeal with strategic
              functionality to deliver intuitive and effective digital
              experiences.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <img
            className="w-[50px] h-[25px]"
            alt="Frame"
            src="/figmaAssets/frame-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
