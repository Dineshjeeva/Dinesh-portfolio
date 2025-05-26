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
          <p style={{fontSize:"12px",marginBottom:'2rem'}}>
            Get to <b>know</b> me!
          </p>
          <p>
            Front-End Developer | React.js | TypeScript | JavaScript | Redux
Motivated and detail-oriented Front-End Developer with 3 years of experience building responsive and dynamic web applications. Proficient in modern JavaScript frameworks, primarily React.js, with strong expertise in TypeScript, Redux for state management, and component-driven UI development. Adept at translating UI/UX designs into high-quality code, optimizing performance, and collaborating within Agile teams to deliver scalable, maintainable front-end solutions.
          </p>
        </div>
        <div class='btn-cont'>
  <a class='contact_me' style={{
    border:"1px solid"
  }} href='#'>
 Contact Me    
  </a>
</div>

<div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UX/UI Web-Design&#160;+ Mobile Design
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Annual package "Product+UX/UI+Graph designer&#160;2022"
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Graphic Design
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Motion Design
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
          Digital Marketing
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Interior Design
        </div>

        
      </a>
    </div>

  </div>
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
