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
      <div className=" flex">
        <div className="basis-1/2">
          <h2>Me encontre:</h2>
        </div>
        <div className="basis-1/2 ">
          <ul className="contact_ul">
            <li>LinkedIn</li>
            <li>Github</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
    </m.div>
  );
}
