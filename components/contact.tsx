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
      <p className="text-gray-700 -mt-6">
        You can get with me in contact through this form or write to my e-mail
        address:{" "}
        <a className="underline" href="mailto:aleks.i6@hotmail.com">
          aleks.i6@hotmail.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col"
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
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="your E-Mail"
          maxLength={200}
          required
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded borderBlack p-4"
          placeholder="Message"
          maxLength={5000}
          required
        />
        <SendBtn />
      </form>
    </motion.section>
  );
}
