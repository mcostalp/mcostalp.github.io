import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="content">
        {/* <Home />
      <Projects />
      <Skills />
      <Contacts /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
