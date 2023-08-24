"use client";

import React from "react";
import SectionTitle from "./section-title";
import { experiencesData } from "@/lib/data";

import { useSectionVisibility } from "@/lib/hooks";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionVisibility("Experience");
  const { colorTheme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionTitle>My experience</SectionTitle>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  colorTheme === "light"
                    ? "#F3F4F6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rbga(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  colorTheme === "light"
                    ? "0.4rem solid #9CA3AF"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  colorTheme === "light"
                    ? "white"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/60">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
