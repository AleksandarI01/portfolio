"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      className="my-16 bg-gray-200 h-20 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    ></motion.div>
  );
}
