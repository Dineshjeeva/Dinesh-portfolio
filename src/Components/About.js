import Coder from "../LottieFiles/coder.json";
import Lottie from "lottie-react";
import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Dinesh Manikandan TS</b> and I am from{" "}
            <b>Madurai, India</b>. I'm a <b>Front-End Developer</b> specializing
            in <b>React JS</b>.
            <br />
            <br />I have experience building dynamic and visually engaging web
            applications using <b>React JS</b>, <b>TypeScript</b>, and{" "}
            <b>Redux</b>. I love to create original projects with beautiful
            designs — you can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me — links are in the
            footer.
            <br />
            Apart from coding, I love to do photography — you can check out some
            of my shots here
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Typescript" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
