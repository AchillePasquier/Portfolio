import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import "./index.css";

import profilePicture from "./images/PhotoPortfolio.png";
import manOnTable from "./images/manOnTable.svg";
// import reactIcon from "./images/React-icon.png";
import htmlIcon from "./images/html.png";
import cssIcon from "./images/css.png";
import javascriptIcon from "./images/javascript.png";
import nodejsIcon from "./images/nodejs.png";
import mongodbIcon from "./images/mongodb.png";
import reactjsIcon from "./images/reactjs.png";
import reactnativeIcon from "./images/reactnative.png";
import stripeIcon from "./images/stripe.webp";
import expressIcon from "./images/express.png";
import expoIcon from "./images/expo.png";

import captureDeliveroo from "./images/captureDeliveroo.png";
import captureNetflix from "./images/captureNetflix.png";
import captureToDoList from "./images/captureToDoList.png";
import captureTripAdvisor from "./images/captureTripAdvisor.png";
import captureVinted from "./images/captureVinted.png";

// import gifAirbnb from "./images/demo-airbnb.gif";
import signInAirbnb from "./images/airbnb-signIn.png";
import homeAirbnb from "./images/airbnb-home.png";
import roomAirbnb from "./images/airbnb-room.png";

import CVAchillePasquier from "./documents/CV-AchillePasquier.pdf";

// import tornUp from "./images/torn-paper.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faCar, faBars, faXmark);

function App() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="Profile" id="profile">
        <div className="profile-description">
          <h2>Hi 👋 I'm Achille</h2>
          <p>
            I'm a Full Stack Developper with an attraction for the Front End. I
            have an experience of building Web and Mobile applications with
            Javascript, Reactjs, Nodejs, React Native and some other libraries
            and frameworks.
          </p>
          <p className="icons">
            <a
              href="https://github.com/AchillePasquier"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/achille-pasquier-3150a41b3/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            </a>
          </p>
          <section className="buttons">
            {/* <a className="button" href="#">
              CONTACT ME
            </a> */}
            <Link
              className="button"
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={800}
            >
              CONTACT ME
            </Link>
            <a className="button" href={CVAchillePasquier} download>
              SEE MY RESUME
            </a>
          </section>
        </div>
        <div className="profile-picture">
          <img
            src={manOnTable}
            alt="profilePitcure"
            className="profilePicture"
          />
          {/* <img src={tornUp} alt="tornUp" className="tornUp" /> */}
        </div>
      </div>
      <div className="Skills" id="skills">
        <h2>Skills 🎯</h2>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
              >
                <img src={htmlIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <img src={cssIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img src={javascriptIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://fr.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactjsIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactnativeIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src={nodejsIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://www.mongodb.com/fr-fr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mongodbIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a href="https://stripe.com/fr" target="_blank" rel="noreferrer">
                <img src={stripeIcon} alt="logo-react" className="bigger" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://expressjs.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={expressIcon} alt="logo-react" className="bigger" />
              </a>
            </div>
            <div className="slide">
              <a href="https://expo.dev/" target="_blank" rel="noreferrer">
                <img src={expoIcon} alt="logo-react" />
              </a>
            </div>

            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
              >
                <img src={htmlIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <img src={cssIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img src={javascriptIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://fr.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactjsIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactnativeIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src={nodejsIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://www.mongodb.com/fr-fr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mongodbIcon} alt="logo-react" />
              </a>
            </div>
            <div className="slide">
              <a href="https://stripe.com/fr" target="_blank" rel="noreferrer">
                <img src={stripeIcon} alt="logo-react" className="bigger" />
              </a>
            </div>
            <div className="slide">
              <a
                href="https://expressjs.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={expressIcon} alt="logo-react" className="bigger" />
              </a>
            </div>
            <div className="slide">
              <a href="https://expo.dev/" target="_blank" rel="noreferrer">
                <img src={expoIcon} alt="logo-react" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects" id="projects">
        <h2>Projects 💻</h2>
        <div className="web-projects">
          <h3>Web Projects</h3>
          <div className="carousel-projects">
            <div className="vinted">
              <a
                href="https://replique-vinted-achille.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={captureVinted} alt="vinted" data-aos="fade-up" />
                <p>
                  Complete full-stack project of a replica of the Vinted site
                </p>
              </a>
            </div>

            <div className="deliveroo">
              <a
                href="https://replique-deliveroo-achillepasquier.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={captureDeliveroo}
                  alt="deliveroo"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <p>
                  Replica of a restaurant page from the Deliveroo site, using
                  ReactJS and an Express API
                </p>
              </a>
            </div>

            <div className="netflix">
              <a
                href="https://replique-netflix-achillepasquier.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={captureNetflix}
                  alt="netflix"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                />
                <p>
                  Imitation of the Netflix home page with the display of movies
                  by category. Made using ReactJS and importing a database by a
                  JSON file
                </p>
              </a>
            </div>

            <div className="todolist">
              <a
                href="https://todolist-achillepasquier.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={captureToDoList}
                  alt="todolist"
                  data-aos="fade-up"
                  data-aos-delay="1500"
                />
                <p>Website for creating a "Todolist", Made using ReactJS</p>
              </a>
            </div>

            <div className="tripadvisor">
              <a
                href="https://replique-tripadvisor-achillepasquier.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={captureTripAdvisor}
                  alt="tripadvisor"
                  data-aos="fade-up"
                  data-aos-delay="2000"
                />
                <p>
                  Replica of a page from the TripAdvisor site, using HTML and
                  CSS
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-projects">
          <h3>Mobile Project</h3>
          <div className="airbnb">
            <div className="airbnb-images">
              <img
                src={signInAirbnb}
                alt="sign-in-airbnb"
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
              />
              <img
                src={homeAirbnb}
                alt="home-airbnb"
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-easing="ease-out-cubic"
              />
              <img
                src={roomAirbnb}
                alt="room-airbnb"
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-easing="ease-out-cubic"
              />
            </div>
            <div className="airbnb-p">
              <p>
                Simplified replica of the Airbnb mobile app, using React-Native
                and an Express API.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact" id="contact">
        <h2>Contact ☎️</h2>
        <div className="contact-2">
          <div className="contact-3">
            <img src={profilePicture} alt="achille" />
            <p className="email">acpasquier96@gmail.com</p>
            <p className="icons">
              <a
                href="https://github.com/AchillePasquier"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/achille-pasquier-3150a41b3/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
              </a>
            </p>
            <p></p>
          </div>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label for="name">Name :</label>
            <input type="text" name="name" />

            <label for="name">Email :</label>
            <input type="email" name="email" />

            <label for="name">Message :</label>
            <textarea name="message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <p className="footer">Made by Achille Pasquier</p>
      </div>
    </div>
  );
}

export default App;
