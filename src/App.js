import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";
import "./index.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
