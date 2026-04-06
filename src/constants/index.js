import { a } from "maath/dist/objectSpread2-284232a6.esm";
import {
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  dagyang,
  notion,
  figmaproject,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Student",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];


const projects = [
  {
    name: "Dagyang",
    description:
      "Dagyang is a travel-focused web application designed to help users explore destinations and plan their trips efficiently.",

    image: dagyang
  },
  {
    name: "Notion",
    description:
      "A MERN based Notion puzzle project is a web application built using MongoDB, Express, React, and Node.js that challenges users with interactive logic and problem-solving tasks.",
    image: notion,
  },
  {
    name: "Figma Projects",
    description:
      "This Figma project is created specifically for activity purposes, focusing on practicing design principles and layout structuring.",
    image: figmaproject,
  },
];

export { services, technologies, projects };
