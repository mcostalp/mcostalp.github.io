import React from "react";
import { projects, projectDescriptions } from "../data/projects";

export default function ProjectCard() {
  const BASE_URL = "https://mcostalp.github.io/";
  return projects.map((project, i) => (
    <a
      key={project}
      href={`${BASE_URL}${project.toLowerCase()}`}
      target="_blank"
    >
      <span>{project}</span>
      <span>Descrição: {projectDescriptions[i]}</span>
    </a>
  ));
}
