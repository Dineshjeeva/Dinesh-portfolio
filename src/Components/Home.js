import { FaGithub, FaLinkedin } from "react-icons/fa";

import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import { GrMail } from "react-icons/gr";
import Lottie from "lottie-react";
import React from "react";
import SpaceBoy from "../LottieFiles/transparant.json";
import Tilt from "react-parallax-tilt";
import Typed from "./Typed.js";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          {/* <h1 className="first_image" style={{ fontSize: "150px" }}>
            Imagine
          </h1>
          <h1
            className="first_image"
            style={{ textAlign: "end", fontSize: "150px" }}
          >
            Develop
          </h1>
          <h1 className="first_image" style={{ fontSize: "150px" }}>
            Execute
          </h1> */}
          <h1>
            I'M <b>DINESH MANIKANDAN TS</b>
          </h1>
          <Typed />
          <div className="footerLinks">
            <div
              style={{
                borderRight: "1px solid",
                padding: "0 20px 0 0",
              }}
            >
              <a
                href="https://github.com/Dineshjeeva"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div
              style={{
                borderRight: "1px solid",
                padding: "0 20px 0 0",
              }}
            >
              <a
                href="https://www.linkedin.com/in/dineshinlink/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div
              style={{
                borderRight: "1px solid",
                padding: "0 20px 0 0",
              }}
            >
              <a
                href="mailTo:djeeva1515@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GrMail />
              </a>
            </div>
          </div>
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>
      <div class="container-running">
        <div class="text-running">
          WEB-DEVELOPMENT | DESIGN-THINKING | LANDING-PAGES | RESPONSIVE-DESIGN
          | WEB-DEVELOPMENT | DESIGN-THINKING | LANDING-PAGES |
          RESPONSIVE-DESIGN
        </div>
      </div>
    </div>
  );
};

export default Home;
