import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/transparent-logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-secondary text-white text-5xl rounded-xl">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl sd:items-center sd:flex sd:px-8">
        <div>
          <div className="flex items-center justify-between py-3 sd:py-5 sd:block">
            <a href="javascript:void(0)">
              <div className="bg-primary rounded-full">
                <img className="max-h-14 p-1" src={logo} alt="Logo" />
              </div>
            </a>
            <div className="sd:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 sd:block sd:pb-0 sd:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center text-5xl justify-center space-y-8 sd:flex sd:space-x-6 sd:space-y-0">
              <li className="text-white hover:text-primary">
                <a href="#projects">Projetos</a>
              </li>
              <li className="text-white hover:text-primary">
                <a href="#skills">Habilidades</a>
              </li>
              <li className="text-white hover:text-primary">
                <a href="#contacts">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="space-y-2">
    //   <ul className="flex gap-3 fixed top-0 bg-emerald-300 p-5 text-5xl">
    //     <Link to="/">
    //       <li>Home</li>
    //     </Link>
    //     <Link to="/projects">
    //       <li>Projetos</li>
    //     </Link>
    //     <Link to="/skills">
    //       <li>Habilidades</li>
    //     </Link>
    //     <Link to="/contacts">
    //       <li>Contato</li>
    //     </Link>
    //   </ul>
    // </nav>
  );
}
