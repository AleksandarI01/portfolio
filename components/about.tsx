"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./section-title";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
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
