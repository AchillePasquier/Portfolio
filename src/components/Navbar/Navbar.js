import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

import { MenuItems } from "./MenuItem";

import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faCar, faBars, faXmark);

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header className="header" data-aos="fade-up">
      <nav className="NavbarItems">
        <Link
          to="profile"
          spy={true}
          smooth={true}
          offset={-180}
          duration={800}
        >
          <h1 className="title">Achille Pasquier</h1>
        </Link>
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
                {/* <a className={item.cName} href={item.url}>
                  {item.title}
                </a> */}
                <Link
                  className={item.cName}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={800}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
