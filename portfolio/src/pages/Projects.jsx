import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion as m } from "framer-motion";

export default function Projects() {
  return (
    <m.div
      id="projects"
      className="pages_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="h1_right">Projetos:</h1>
      <div>
        <ProjectCard />
      </div>
    </m.div>
  );
}
