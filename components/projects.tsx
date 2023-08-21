import React from "react";
import SectionTitle from "./section-title";
import { projectsData } from "@/lib/data";

import Project from "./single-project";

export default function Projects() {
  return (
    <section>
      <SectionTitle>My Projects</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
