"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

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
        Debitis, impedit libero deleniti ad quas, deserunt autem, eveniet in
        natus voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        impedit libero deleniti ad quas, deserunt autem, eveniet in natus
        voluptate maxime suscipit quaerat numquam dicta itaque enim mollitia
        doloremque nesciunt.
      </p>
    </motion.section>
  );
}
