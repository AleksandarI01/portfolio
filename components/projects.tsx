"use client";

import React from "react";
import SectionTitle from "./section-title";
import { projectsData } from "@/lib/data";
import { useSectionVisibility } from "@/lib/hooks";

import Project from "./single-project";

export default function Projects() {
  const { ref } = useSectionVisibility("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionTitle>My Projects</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
