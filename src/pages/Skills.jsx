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
      <h1 className="text-right text-9xl mb-16">Habilidades:</h1>
      <div className="text-4xl">
        <div className="flex flex-row-reverse items-center">
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
        </div>
        <div className="flex items-center border-secondary border-y-2 mb-5">
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
        </div>
        <div className="flex flex-row-reverse items-center">
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
        </div>
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
