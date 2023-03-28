import React from "react";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.section
      className="mt-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="text-right text-9xl">Olá, eu sou o Luis Paulo</h1>
      <p className="text-right text-8xl">&#128075;</p>
      <div className="flex flex-wrap items-center mt-80">
        <div className="basis-1/2 p-8">
          <img src="public/images/SXJD8621.JPG" alt="Hero Image" />
        </div>
        <div className="basis-1/2">
          <span className="text-6xl">{"<>"}</span>
          <p className="text-6xl text-secondary">Desenvolvedor</p>
          <p className="text-6xl">
            Apaixonado por tecnologia e sempre em busca de novos desafios.
          </p>
          <span className="text-6xl">{"</>"}</span>
        </div>
      </div>
    </m.section>
  );
}
