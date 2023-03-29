import React from "react";
import { projects, projectDescriptions } from "../data/projects";
import recipes from "../../public/images/Recipes-App.png";
import trivia from "../../public/images/Trivia.png";
import wallet from "../../public/images/Wallet.png";

export default function ProjectCard() {
  const BASE_URL = "https://mcostalp.github.io/";
  const projectList = [recipes, wallet, trivia];
  return projects.map((project, i) => (
    <section className="mb-16 bg-slate-800 p-5 rounded-3xl">
      <a
        key={project}
        href={`${BASE_URL}${project.toLowerCase()}`}
        target="_blank"
        className="cursor-pointer"
      >
        <div className="flex flex-wrap items-center">
          <div className="basis-1/2">
            <img src={projectList[i]} alt={project} />
          </div>
          <div className="basis-1/2 text-5xl lg:text-4xl">
            <p className="text-7xl">{project}</p>
            <p className="">Descrição: {projectDescriptions[i]}</p>
            <p className="text-red-500">WIP</p>
          </div>
        </div>
      </a>
    </section>
  ));
}
