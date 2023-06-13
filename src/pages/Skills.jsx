import React from "react";
import { motion as m } from "framer-motion";

export default function Skills() {
  return (
    <m.section
      id="skills"
      className="mt-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="text-right text-9xl mb-16 lg:text-7xl">Habilidades:</h1>
      <div className="text-4xl">
        <a
          href="https://www.credential.net/364c946b-e09b-46e4-a76c-395fa8bbb705#gs.tup7f1"
          target="_blank"
          className="flex flex-row-reverse items-center"
        >
          <div>
            <img
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69972975"
              alt="Módulo de Fundamentos"
              className="p-8"
            />
          </div>
          <div>
            <ul>
              <li>Unix & Bash</li>
              <li>Git</li>
              <li>JS Basic & DOM</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS ES6</li>
              <li>Higher Order Functions</li>
              <li>Unit Tests</li>
              <li>Agile</li>
            </ul>
          </div>
        </a>
        <a
          href="https://www.credential.net/0d75bf8a-46bb-43f3-9e3f-601cb78af493#gs.tup9s4"
          target="_blank"
          className="flex items-center border-y-2 border-solid border-secondary mb-6"
        >
          <div>
            <img
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69972630"
              alt="Módulo de Front-End"
              className="p-8"
            />
          </div>
          <div>
            <ul>
              <li>Life Cycle</li>
              <li>State and Events</li>
              <li>Controlled Components</li>
              <li>Router</li>
              <li>RTL Tests</li>
              <li>Redux</li>
              <li>Context API</li>
              <li>React Hooks</li>
              <li>Agile and soft skills</li>
            </ul>
          </div>
        </a>
        <a
          href="https://www.credential.net/907203fe-d7a3-4f33-a9ed-299a3acb570d#gs.tuowgt"
          target="_blank"
          className="flex flex-row-reverse items-center"
        >
          <div>
            <img
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/70405706"
              alt="Módulo de Back-End"
              className="p-8"
            />
          </div>
          <div>
            <ul>
              <li>Docker</li>
              <li>SQL and NoSQL</li>
              <li>Node.js and Express</li>
              <li>Mocha</li>
              <li>Chai and Sinon</li>
              <li>APIs</li>
              <li>REST</li>
              <li>JWT</li>
              <li>ORM</li>
              <li>TypeScript</li>
              <li>POO</li>
              <li>SOLID</li>
              <li>Concepts of CI/CD, VPS</li>
            </ul>
          </div>
        </a>
        <a
          href="https://www.credential.net/8e4f879f-562d-44a5-a225-0902792484cb#gs.12vfqw"
          target="_blank"
          className="flex items-center border-y-2 border-solid border-secondary mb-6"
        >
          <div>
            <img
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/75107243"
              alt="Módulo de Ciência da Computação"
              className="p-8"
            />
          </div>
          <div>
            <ul>
              <li>Python and OOP</li>
              <li>Algorithms and Complexity</li>
              <li>Data Structure and Problem Solving</li>
              <li>Agile and soft skills</li>
            </ul>
          </div>
        </a>
        <a
          href="https://www.credential.net/cfba4030-9183-4534-946f-5fc8acf83bfd#gs.12zcno"
          target="_blank"
          className="flex flex-row-reverse items-center"
        >
          <div>
            <img
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/75106471"
              alt="Módulo de Back-End"
              className="p-8"
            />
          </div>
          <div>
            <ul>
              <li>Fundamentals</li>
              <li>Front-End</li>
              <li>Back-End</li>
              <li>Computer Science</li>
              <li>Soft Skills</li>
              <li>Creativity</li>
              <li>Team Work</li>
              <li>Leadership</li>
            </ul>
          </div>
        </a>
      </div>
    </m.section>
  );
}
<div></div>;
// Python and OOP, Algorithms and Complexity, Data Structure and Problem Solving, agile and soft skills
