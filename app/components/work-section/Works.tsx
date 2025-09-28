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
      title: "Investment Dashboard Platform",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink:
        "https://www.figma.com/proto/Uzwp8BX00NcIJepqByrRYU/Project-1?page-id=165%3A9025&node-id=165-9133&viewport=204%2C233%2C0.02&t=HRECbnWtRxduEs4A-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=165%3A9133",
      about:
        "A case study showcasing how Investment Dashboard Platform offers intelligent AI agents to guide you through every step of your financial journey. From real-time market insights to personalized news alerts, our tools empower you to invest smarter, stay informed, and always stay ahead.",
      stack: ["Figma"],
      img: "/IDP.png",
      mobileLiveLink:
        "",
    },
    {
      title: "Kiosk Ordering System for Food",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink:
        "https://www.behance.net/gallery/98173325/Kiosk-Ordering-System-Flow",
      about:
        "Designed a streamlined kiosk ordering system for a Kenya-based client, focused on enhancing the overall customer experience. The system’s interface is built to be intuitive and effortless, ensuring quick, seamless interactions that improve efficiency and satisfaction for both customers and staff",
      stack: ["Figma"],
      img: "/Kiosk.png",
      mobileLiveLink:
        "https://www.behance.net/gallery/98173325/Kiosk-Ordering-System-Flow",
    },
    {
      title: "Landing Page UI - Boomsocial ",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink:
        "https://www.behance.net/gallery/147051161/LANDING-PAGE-UI-BOOMSOCIAL",
      about:
        "An all-in-one social media management platform's landing page, with a strong focus on user experience. The design thoughtfully guides users through their journey—helping them discover the platform, connect with their challenges, and find the ideal solution, all in an intuitive and seamless flow.",
      stack: ["Figma"],
      img: "/Boomsocial.png",
      mobileLiveLink:
        "https://www.behance.net/gallery/147051161/LANDING-PAGE-UI-BOOMSOCIAL",
    },
    {
      title: "A Case Study - Netsmartz",
      // gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://www.behance.net/gallery/147050437/Product-Case-Study",
      about:
        "A case study showcasing how Netsmartz, New York-based software development company, optimized Microtech Operations, streamlining processes and boosting productivity. The design highlights key outcomes in a clear, engaging, and user-friendly layout.",
      stack: ["Figma"],
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
      <Title>What I’ve Been Crafting</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          // gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          mobileLiveLink={work.mobileLiveLink}
        />
      ))}

      <Timeline />
    </section>
  );
}
