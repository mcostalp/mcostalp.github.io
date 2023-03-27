import React from "react";
import { motion as m } from "framer-motion";

export default function Contacts() {
  return (
    <m.div
      id="contact"
      className="pages_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h1 className="h1_right">Vamos conversar!</h1>
      </div>
      <div>
        <div className="contact_div">
          <h2>Me encontre:</h2>
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
