"use client";

import React from "react";
import SectionTitle from "./section-title";

import { motion } from "framer-motion";
import { useSectionVisibility } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SendBtn from "./send-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionVisibility("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionTitle>Contact Me</SectionTitle>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can reach out to me using this form or by sending an email to:{" "}
        <a
          className="underline transition hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300"
          href="mailto:aleks.i6@hotmail.com"
        >
          aleks.i6@hotmail.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Your message has been sent successfully!");
        }}
      >
        <input
          name="sender"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="your E-Mail"
          maxLength={200}
          required
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Message"
          maxLength={5000}
          required
        />
        <SendBtn />
      </form>
    </motion.section>
  );
}
