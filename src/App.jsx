import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const btnClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="max-w-5xl flex flex-col p-10">
      <Navbar />
      <div className="">
        <Home />
        <Projects />
        <Skills />
        <Contacts />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes> */}
      </div>
      {visible ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-secondary p-2 fixed bottom-12 left-1/2 rounded-full flex justify-center"
        >
          <button onClick={btnClick} className="text-8xl cursor-pointer flex">
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              className="text-primary"
            />
          </button>
        </m.div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
