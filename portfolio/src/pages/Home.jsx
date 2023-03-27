import React from "react";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.section
      className="hero-section pages_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="h1_right">Olá, eu sou o Luis Paulo</h1>
      <div>
        <span>{"<>"}</span>
        <p>Desenvolvedor</p>
        <p>apaixonado por tecnologia e sempre em busca de novos desafios.</p>
        <p>
          Profissional proativo, criativo e com uma habilidade especial para
          trabalhar em equipe, buscando sempre encontrar soluções eficientes
          para os desafios que enfrento.
        </p>
        <p>
          Estou sempre em busca de novos conhecimentos e desafios, e adoraria
          ter a oportunidade de contribuir com a minha paixão e habilidades para
          o seu próximo projeto. Juntos, podemos criar soluções inovadoras e
          impactantes que possam levar o seu negócio ao próximo nível.
        </p>
        <span>{"</>"}</span>
      </div>
    </m.section>
  );
}
