import "./Skills.css";

import htmlIcon from "../../images/html.png";
import cssIcon from "../../images/css.png";
import javascriptIcon from "../../images/javascript.png";
import nodejsIcon from "../../images/nodejs.png";
import mongodbIcon from "../../images/mongodb.png";
import reactjsIcon from "../../images/reactjs.png";
import reactnativeIcon from "../../images/reactnative.png";
import stripeIcon from "../../images/stripe.webp";
import expressIcon from "../../images/express.png";
import expoIcon from "../../images/expo.png";

const Skills = () => {
  return (
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
            <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">
              <img src={reactjsIcon} alt="logo-react" />
            </a>
          </div>
          <div className="slide">
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
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
            <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">
              <img src={reactjsIcon} alt="logo-react" />
            </a>
          </div>
          <div className="slide">
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
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
  );
};

export default Skills;
