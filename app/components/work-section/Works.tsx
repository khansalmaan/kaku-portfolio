import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Kiosk Ordering System for Food",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink:
        "https://www.behance.net/gallery/98173325/Kiosk-Ordering-System-Flow",
      about:
        "Designed a streamlined kiosk ordering system for a Kenya-based client, focused on enhancing the overall customer experience. The system’s interface is built to be intuitive and effortless, ensuring quick, seamless interactions that improve efficiency and satisfaction for both customers and staff",
      stack: ["Figma", "Adobe XD", "Adobe Illustrator"],
      img: "/Kiosk.png",
    },
    {
      title: "Landing Page UI - Boomsocial ",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink:
        "https://www.behance.net/gallery/147051161/LANDING-PAGE-UI-BOOMSOCIAL",
      about:
        "An all-in-one social media management platform's landing page, with a strong focus on user experience. The design thoughtfully guides users through their journey—helping them discover the platform, connect with their challenges, and find the ideal solution, all in an intuitive and seamless flow.",
      stack: ["Figma", "Adobe XD", "Adobe Illustrator"],
      img: "/Boomsocial.png",
    },
    {
      title: "A Case Study - Netsmartz",
      // gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://www.behance.net/gallery/147050437/Product-Case-Study",
      about:
        "A case study showcasing how Netsmartz, New York-based software development company, optimized Microtech Operations, streamlining processes and boosting productivity. The design highlights key outcomes in a clear, engaging, and user-friendly layout.",
      stack: ["Figma", "Adobe XD", "Adobe Illustrator"],
      img: "/Netsmartz.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          // gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
