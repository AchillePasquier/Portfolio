import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { MenuItems } from "./MenuItem";

import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header className="header" data-aos="fade-up">
      <nav className="NavbarItems">
        <h1 className="title">Achille Pasquier</h1>
        <div
          className="menu-icon"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <FontAwesomeIcon icon={clicked ? "xmark" : "bars"} />
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
