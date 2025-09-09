"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/TC.png",
    jobTitle: "UI/UX Designer",
    company: "Totality Corp",
    jobType: "Full-time",
    duration: "Aug 2022 - Present",
    stuffIDid: [
      "Worked on game designs, creating immersive, user-centric interfaces.",
      "Redesigned the Totality website with a focus on responsive UI, improving user experience across devices.",
      "Collaborated closely with Tech Team, Project Managers, and the CTO to ensure design alignment with business goals and technical feasibility.",
      "Upskilled with AI tools in design, incorporating cutting-edge technology into my workflow.",
      "Contributed to the development of an AI image creator app, focusing on intuitive UX for creative users.",
      "Designed an ESG-based platform with a user-friendly interface to support sustainability goals.",
      "Worked on NFT-based projects, creating visually engaging and easy-to-navigate platforms for digital assets.",
      "Focused on creating intuitive, accessible UI/UX solutions to enhance user satisfaction and engagement across all projects.",
    ],
  },
  {
    companyImg: "/BT.png",
    jobTitle: "UI/UX Designer",
    company: "Bridging Technologies",
    jobType: "Full-time",
    duration: "Feb 2021 - Aug 2022",
    stuffIDid: [
      "Collaborated with an amazing design team in a product-focused organization.",
      "Contributed to creating user-centered designs, ensuring a seamless experience across platforms.",
      "Worked closely with cross-functional teams to align design solutions with business objectives and user needs.",
      "Focused on enhancing usability and visual appeal for a variety of products.",
    ],
  },
  {
    companyImg: "/IU.png",
    jobTitle: "UI/UX Designer Intern",
    company: "Idea Usher",
    jobType: "Internship",
    duration: "June 2020 - Feb 2021",
    stuffIDid: [
      "Assisted in designing intuitive and user-friendly interfaces for web and mobile applications.",
      "Collaborated with senior designers to create wireframes, prototypes, and user flows.",
      "Conducted user research and usability testing to refine designs based on feedback.",
      "Gained hands-on experience in design tools and techniques to improve user experience.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work Experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
