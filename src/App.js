import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import "./index.css";

//import profilePicture from "./images/PhotoPortfolio.png";
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
      <div className="Profile">
        <div className="profile-description">
          <h2>Hi 👋 I'm Achille</h2>
          <p>
            I'm a Full Stack Developper with an attraction for the Front End. I
            have an experience of building Web and Mobile applications with
            Javascript, Reactjs, Nodejs, React Native and some other libraries
            and frameworks.
          </p>
          <p className="icons">
            <FontAwesomeIcon icon={faGithub} className="github" />
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          </p>
          <section className="buttons">
            <a className="button" href="#">
              CONTACT ME
            </a>
            <a className="button" href="#">
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
      <div className="Skills">
        <h2>Skills 🎯</h2>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={htmlIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={cssIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={javascriptIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={reactjsIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={reactnativeIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={nodejsIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={mongodbIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={stripeIcon} alt="logo-react" className="bigger" />
            </div>
            <div className="slide">
              <img src={expressIcon} alt="logo-react" className="bigger" />
            </div>
            <div className="slide">
              <img src={expoIcon} alt="logo-react" />
            </div>

            <div className="slide">
              <img src={htmlIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={cssIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={javascriptIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={reactjsIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={reactnativeIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={nodejsIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={mongodbIcon} alt="logo-react" />
            </div>
            <div className="slide">
              <img src={stripeIcon} alt="logo-react" className="bigger" />
            </div>
            <div className="slide">
              <img src={expressIcon} alt="logo-react" className="bigger" />
            </div>
            <div className="slide">
              <img src={expoIcon} alt="logo-react" />
            </div>
          </div>
        </div>
      </div>
      <div className="Projects">
        <h2>Projects 🖥️</h2>
        <div className="web-projects">
          <h3>Web Projects 💻</h3>
          <div className="carousel-projects">
            <div className="vinted">
              <img src={captureVinted} alt="vinted" data-aos="fade-up" />
              <p>Complete full-stack project of a replica of the Vinted site</p>
            </div>

            <div className="deliveroo">
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
            </div>

            <div className="netflix">
              <img
                src={captureNetflix}
                alt="netflix"
                data-aos="fade-up"
                data-aos-delay="1000"
              />
              <p>
                Imitation of the Netflix home page with the display of movies by
                category. Made using ReactJS and importing a database by a JSON
                file
              </p>
            </div>

            <div className="todolist">
              <img
                src={captureToDoList}
                alt="todolist"
                data-aos="fade-up"
                data-aos-delay="1500"
              />
              <p>Website for creating a "Todolist", Made using ReactJS</p>
            </div>

            <div className="tripadvisor">
              <img
                src={captureTripAdvisor}
                alt="tripadvisor"
                data-aos="fade-up"
                data-aos-delay="2000"
              />
              <p>
                Replica of a page from the TripAdvisor site, using HTML and CSS
              </p>
            </div>
          </div>
        </div>
        <div className="mobile-projects">
          <h3>Mobile Project 📱</h3>
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
    </div>
  );
}

export default App;
