import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projetos</li>
        </Link>
        <Link to="/skills">
          <li>Habilidades</li>
        </Link>
        <Link to="/contacts">
          <li>Contato</li>
        </Link>
      </ul>
    </nav>
  );
}
