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
          <h1>About Meß</h1>
          <p style={{ fontSize: "12px", marginBottom: '2rem' }}>
            Get to <b>know</b> me!
          </p>
          <p>
            Front-End Developer | React.js | TypeScript | JavaScript | Redux
            Motivated and detail-oriented Front-End Developer with 3 years of experience building responsive and dynamic web applications. Proficient in modern JavaScript frameworks, primarily React.js, with strong expertise in TypeScript, Redux for state management, and component-driven UI development. 

          </p>
          <br />
          <p >          Adept at translating UI/UX designs into high-quality code, optimizing performance, and collaborating within Agile teams to deliver scalable, maintainable front-end solutions.
</p>
        </div>
        <div class='btn-cont'>
          <a class='contact_me' style={{
            border: "1px solid"
          }} href='/Resume'>
            Contact Me
          </a>
        </div>

        <div class="ag-format-container">
          <div class="ag-courses_box">

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  React.js
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  JavaScript (ES6+)
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  TypeScript
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  HTML5 & CSS3
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  Redux Toolkit / State Management
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  WordPress Development
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  Shopify Customization
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  Git & Version Control
                </div>
              </a>
            </div>

          </div>
        </div>



      </div>


    </>
  );
};

export default About;
