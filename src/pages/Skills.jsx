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
        {/* <div>
          <img
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69972630"
            alt="Módulo de Fundamentos"
            width="350"
            height="250"
          />
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
        <div>
          <img
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/70405706"
            alt="Módulo de Fundamentos"
            width="350"
            height="250"
          />
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
        </div> */}
      </div>
    </m.section>
  );
}
<div></div>;
