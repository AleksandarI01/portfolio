import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import dayventureImg from "@/public/dayventure.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Software Engineering, Software and Data Engineering",
    location: "Belgrade, Serbia",
    description: "I graduated with an average of 8.38.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2017 - April 2022",
  },
  {
    title: "Constructor Learning Full-Stack Bootcamp",
    location: "Zurich, Switzerland",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, impedit libero deleniti ad quas, deserunt autem, eveniet in natus voluptate maxime suscipit quaerat numquam dicta itaque enim mollitia doloremque nesciunt.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - July 2023",
  },
  {
    title:
      "Master of Science in Informatics, Contemporary Information Technology",
    location: "Belgrade, Serbia",
    description: "This is the description for the master studies.",
    icon: React.createElement(LuGraduationCap),
    date: "November 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DayVenture",
    description: "Final Group Project from the Full-Stack Bootcamp I visited.",
    tags: ["React", "Django", "Postgres", "Docker"],
    imageUrl: dayventureImg,
  },
  {
    title: "TESTT",
    description: "Final Group Project from the Full-Stack Bootcamp I visited.",
    tags: ["React", "Django", "Postgres", "Docker"],
    imageUrl: dayventureImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Django REST Framework",
  "Docker",
  "C",
  "C++",
  "C#",
] as const;
