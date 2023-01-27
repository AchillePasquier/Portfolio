import "./Contact.css";

import profilePicture from "../../images/PhotoPortfolio.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
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
  );
};

export default Contact;
