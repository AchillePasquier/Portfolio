import { Link } from "react-scroll";

import manOnTable from "../../images/manOnTable.svg";
import CVAchillePasquier from "../../documents/CV-AchillePasquier.pdf";

import "./Profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="Profile" id="profile">
      <div className="profile-description">
        <h2>Hi 👋 I'm Achille</h2>
        <p>
          I'm a Full Stack Developper with an attraction for the Front End. I
          have an experience of building Web and Mobile applications with
          Javascript, Reactjs, Nodejs, React Native and some other libraries and
          frameworks.
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
        <img src={manOnTable} alt="profilePitcure" className="profilePicture" />
        {/* <img src={tornUp} alt="tornUp" className="tornUp" /> */}
      </div>
    </div>
  );
};

export default Profile;
