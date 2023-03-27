import React from "react";
import { motion as m } from "framer-motion";

export default function Skills() {
  return (
    <m.section
      id="skills"
      className="pages_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="h1_right">Certificados de habilidades:</h1>
      <div id="cert_cards">
        <div>
          <img
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69972975"
            alt="Módulo de Fundamentos"
            width="350"
            height="250"
          />
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
        <div>
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
        </div>
      </div>
    </m.section>
  );
}
<div></div>;
