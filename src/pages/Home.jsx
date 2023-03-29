import React from "react";
import { motion as m } from "framer-motion";
import heroImg from "../../public/images/hero.png";

export default function Home() {
  return (
    <m.section
      id="home"
      className="mt-80 md:mt-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="text-right text-9xl">Olá, eu sou o Luis Paulo</h1>
      <p className="text-right text-8xl">&#128075;</p>
      <div className="flex flex-wrap items-center mt-80">
        <div className="basis-1/2 p-8">
          <img src={heroImg} alt="Hero Image" />
        </div>
        <div className="basis-1/2 text-6xl lg:text-5xl">
          <span className="">{"<>"}</span>
          <p className=" text-secondary">Desenvolvedor</p>
          <p className="">
            Apaixonado por tecnologia e sempre em busca de novos desafios.
          </p>
          <span className="">{"</>"}</span>
        </div>
      </div>
    </m.section>
  );
}
