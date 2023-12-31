import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../progress-bar/progressBar";
import "./nav.scss";
import { progressList } from "../../constants/navConstants";

function Nav() {
  return (
    <div className="sideNav">
      <aside className="nav d-flex">
        <div className="card">
          <div className="card-head">
            <div className="head-content d-flex flex-column align-center">
              <img
                className="profile-image"
                alt="Suryakant Tyagi Profile"
                src="./passport_photo.jpg"
              />
              <p className="profile-name text-center">Suryakant Tyagi</p>
              <p className="text-center">
                <a href="tel: +917089272128">
                  <FontAwesomeIcon icon={faMobile} /> +91 7089272128
                </a>
              </p>
              <p className="text-center">
                <a href="mailto: suryakant28.st@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> suryakant28.st@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="card-body">
            <div className="progress-list">
              {progressList.map((item, index) => {
                return <ProgressBar key={`${index}_progress`} {...item} />;
              })}
            </div>
            <div className="hr-line d-flex justify-center"></div>
            <div className="other-skills">
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  Bootstrap
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  React
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  Redux
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  React-Router
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  GraphQL
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  REST API
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  Emotion JS
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>{" "}
                  Styled Components
                </li>
              </ul>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-around">
              <a href="https://www.linkedin.com/in/suryakant-tyagi-638605b5/">
                <img src="./linkedin-400.png" alt="Linkedin" />
              </a>
              <a href="https://github.com/suryakanttyagi">
                <img src="./github-400.png" alt="Github" />
              </a>
              <a href="https://www.facebook.com/">
                <img src="./facebook-400.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com/">
                <img src="./twitter-400.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Nav;
