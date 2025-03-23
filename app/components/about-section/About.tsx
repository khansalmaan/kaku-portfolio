import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I Craft Meaningful Digital Experiences that Drive Business Growth
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            As a Product Designer (UI/UX), I am passionate about creating
            solutions that empower businesses and elevate their digital
            presence. Whether designing websites that enhance brand visibility
            or developing seamless software solutions that streamline
            operations, I take pride in guiding brands from concept to a
            fully-realized, evolving experience.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Since starting my design journey, I’ve continuously refined my
            skills, solving complex challenges and embracing increasingly
            sophisticated design problems to ensure growth and improvement.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Every project is an opportunity to learn, adapt, and deliver
            meaningful, user-centered designs that businesses are proud to call
            their own. <br className="hidden md:block" />
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>

          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              AI Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              ChatGPT, Midjourney, DALL·E, Adobe Sensei, Uizard.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
