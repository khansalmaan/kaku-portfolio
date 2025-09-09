"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  // Removed formDisplay state since contact form is removed

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const { formState, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

  // For email.js
  const formRef = useRef<HTMLFormElement>(null);

  // Removed onSubmit and form logic

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 pb-4 md:pb-10 lg:pb-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        <div
          className={` ${
            syne.className
          } flex justify-between items-center w-full duration-1000`}
        >
          <div className="inline w-full">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold pt-4 md:pt-10 lg:pt-12 "
            >
              GOT A PROJECT IN MIND?
            </AnimatedTitle>
            <span
              data-blobity
              onClick={() => {
                window.location.href = "mailto:asmitachandel11@gmail.com";
              }}
              className="text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden cursor-pointer"
            >
              CONTACT ME
            </span>
          </div>
          <button
            className={`text-base ml-auto mt-6 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 lg:mt-12 rounded-xl border-2 border-white leading-none ${
              viewCount <= 1 && "duration-500 delay-[1500ms]"
            } ${
              inView
                ? " opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            data-blobity-radius="12"
            onClick={() => {
              window.location.href = "mailto:asmitachandel11@gmail.com";
            }}
          >
            CONTACT&nbsp;ME
          </button>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 pb-4 md:pb-10 lg:pb-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        <div
          className={` ${
            syne.className
          } flex justify-between items-center w-full duration-1000`}
        >
          <div className="inline w-full">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold pt-4 md:pt-10 lg:pt-12 "
            >
              View My Resume
            </AnimatedTitle>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`text-base ml-auto mt-6 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 lg:mt-12 rounded-xl border-2 border-white leading-none ${
                viewCount <= 1 && "duration-500 delay-[1500ms]"
              } ${
                inView
                  ? " opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              data-blobity-radius="12"
            >
              Resume
            </button>
          </a>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}


    // const mailtoLink = `mailto:asmitachandel11@gmail.com?subject=New Contact Request from ${encodeURIComponent(