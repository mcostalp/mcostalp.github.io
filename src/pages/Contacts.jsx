import React from "react";
import { motion as m } from "framer-motion";

export default function Contacts() {
  return (
    <m.div
      id="contacts"
      className="mt-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h1 className="text-right text-9xl">Vamos conversar!</h1>
      </div>
      <div className="flex my-20">
        <div className="basis-1/2">
          <h2 className="text-right text-6xl">Onde me encontar?</h2>
        </div>
        <div className="basis-1/2 ">
          <ul className="text-right text-5xl flex flex-col gap-5">
            <a href="https://www.linkedin.com/in/mcostalp/">
              <li
                className="hover:text-secondary cursor-pointer"
                target="_blank"
              >
                LinkedIn
              </li>
            </a>
            <a href="https://github.com/mcostalp">
              <li
                className="hover:text-secondary cursor-pointer"
                target="_blank"
              >
                Github
              </li>
            </a>
            <a href="https://wa.me/5512996406690">
              <li
                className="hover:text-secondary cursor-pointer"
                target="_blank"
              >
                WhatsApp
              </li>
            </a>
          </ul>
        </div>
      </div>
    </m.div>
  );
}
