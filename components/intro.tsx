"use client";

import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

import { useSectionVisibility } from "@/lib/hooks";

import Image from "next/image";
import Link from "next/link";

import profileImg from "@/public/aleks.jpeg";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionVisibility("Home", 0.5);
  const {setActiveSection, setTimePassedClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Image
            className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            src={profileImg}
            alt="Aleksandar Ilic profile picture"
            width="200"
            height="200"
            quality="95"
            priority={true}
          />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
      >
        Hello, I am Aleksandar Ilic. I love to code. I am a frontend web
        developer. Please look at my portfolio and the projects i created!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 outline-none rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimePassedClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group cursor-pointer flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack"
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:opacity-100 transition" />
        </a>
        <a
          className="cursor-pointer flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition borderBlack"
          href="https://linkedin.com/in/aleksandar-ilic-267a49260"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="cursor-pointer flex items-center gap-2 bg-white p-4 text-[1.35rem] text-gray-700 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition borderBlack"
          href="https://github.com/AleksandarI01"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
