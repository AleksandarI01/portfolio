"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import { useSectionVisibility } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionVisibility("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionTitle>About me</SectionTitle>
      <p className="mb-3">
        After earning my Bachelor's degree within the study program "Software
        and Data Engineering", I decided to persue my passion for programming. I
        enrolled in a Full-Stack Web Development Bootcamp in Zürich. I always
        strive for improving my coding skills and to learn new technologies.
      </p>
      <p>
        In my free time I like hiking, cooking, playing video games and going
        out with friends.
      </p>
    </motion.section>
  );
}
