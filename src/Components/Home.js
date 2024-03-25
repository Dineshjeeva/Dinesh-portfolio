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
          <h1>Hi There!</h1>
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
                href="www.linkedin.com/in/dineshinlink"
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
          WEB-DEVELOPMENT | DESIGN THINKING | LANDING-PAGES | RESPONSIVE DESIGN
          | WEB-DEVELOPMENT | DESIGN THINKING | LANDING-PAGES | RESPONSIVE
          DESIGN
        </div>
      </div>

      {/* <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>C++</b> and know a bit of <b>Python</b> and
            am working on a few projects in the <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> Typescript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div> */}
    </div>
  );
};

export default Home;
