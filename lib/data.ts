import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import dayventureImg from "@/public/dayventure.png";
import foodDeliveryImg from "@/public/foodDelivery.png";
// import underConstructionImg from "@/public/underConstruction.png";

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
    title: "Bachelor of Software Engineering, University Singidunum",
    location: "Belgrade, Serbia",
    description:
      'Successfully completed my bachelor studies within the study program "Software and Data Engineering" with a total of 240 ECTS credits and the grade point average of 8.38/10.',
    icon: React.createElement(LuGraduationCap),
    date: "October 2017 - April 2022",
  },
  {
    title: "Constructor Learning Full-Stack Bootcamp",
    location: "Zurich, Switzerland",
    description:
      "Successfully completed this bootcamp with a total of around 480 hours in the field of Full-Stack Web Development.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - July 2023",
  },
  {
    title: "Master of Science in Informatics, University Singidunum",
    location: "Belgrade, Serbia",
    description:
      'Upon successful graduation, I will obtain a total of 60 ECTS credits within the study program "Contemporary Information Technologies".',
    icon: React.createElement(LuGraduationCap),
    date: "November 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DayVenture",
    description:
      "Final Group Project from the Full-Stack Bootcamp I attended. Discover day trips curated by local experts or create your own travel itinerary with your friends.",
    tags: ["React", "Django", "Postgres", "Docker", "Google Maps API"],
    imageUrl: dayventureImg,
    link: "https://github.com/AleksandarI01/dayventure",
  },
  {
    title: "Food Delivery Shop",
    description:
      "Frontend Project about a Food Delivery App. I am right now working on it. Stay tuned for updates.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: foodDeliveryImg,
    link: "https://github.com/AleksandarI01/food-delivery-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
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
