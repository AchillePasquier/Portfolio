import "./Projects.css";

import captureDeliveroo from "../../images/captureDeliveroo.png";
import captureNetflix from "../../images/captureNetflix.png";
import captureToDoList from "../../images/captureToDoList.png";
import captureTripAdvisor from "../../images/captureTripAdvisor.png";
import captureVinted from "../../images/captureVinted.png";

import signInAirbnb from "../../images/airbnb-signIn.png";
import homeAirbnb from "../../images/airbnb-home.png";
import roomAirbnb from "../../images/airbnb-room.png";

import startedVinted from "../../images/vintedreactnative/started-vinted-iphone14pro.png";
import registerVinted from "../../images/vintedreactnative/register-vinted-iphoneSE.png";
import homeVinted from "../../images/vintedreactnative/accueil-vinted-iphoneSE.png";
import productVinted from "../../images/vintedreactnative/product-vinted-iphone14pro.png";
import buyVinted from "../../images/vintedreactnative/buy-vinted-iphone14pro.png";
import sellVinted from "../../images/vintedreactnative/sell-vinted-iphoneSE.png";
import logOutVinted from "../../images/vintedreactnative/logout-vinted-iphoneSE.png";

const Projects = () => {
  return (
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
              <p>Complete full-stack project of a replica of the Vinted site</p>
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
                Imitation of the Netflix home page with the display of movies by
                category. Made using ReactJS and importing a database by a JSON
                file
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
                Replica of a page from the TripAdvisor site, using HTML and CSS
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-projects">
        <h3>Mobile Project</h3>
        <div className="airbnb">
          <a
            href="https://github.com/AchillePasquier/airbnb-reactnative"
            target="_blank"
            rel="noreferrer"
          >
            <div className="airbnb-images">
              <img
                src={signInAirbnb}
                alt="sign-in-airbnb"
                // data-aos="flip-up"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={homeAirbnb}
                alt="home-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="500"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={roomAirbnb}
                alt="room-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="1000"
                // data-aos-easing="ease-out-cubic"
              />
            </div>
          </a>
          <div className="airbnb-p">
            <p>
              Simplified replica of the Airbnb mobile app, using React-Native
              and an Express API.
            </p>
          </div>
        </div>
        <div className="airbnb">
          <a
            href="https://github.com/AchillePasquier/vinted-reactnative"
            target="_blank"
            rel="noreferrer"
          >
            <div className="airbnb-images">
              <img
                src={startedVinted}
                alt="sign-in-airbnb"
                // data-aos="flip-up"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={registerVinted}
                alt="home-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="500"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={homeVinted}
                alt="room-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="1000"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={productVinted}
                alt="sign-in-airbnb"
                // data-aos="flip-up"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={buyVinted}
                alt="home-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="500"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={sellVinted}
                alt="room-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="1000"
                // data-aos-easing="ease-out-cubic"
              />
              <img
                src={logOutVinted}
                alt="room-airbnb"
                // data-aos="flip-up"
                // data-aos-delay="1000"
                // data-aos-easing="ease-out-cubic"
              />
            </div>
          </a>
          <div className="airbnb-p">
            <p>
              Replica of the Vinted mobile app, using React-Native and an
              Express API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
