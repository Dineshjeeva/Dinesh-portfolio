import ProjectBox from "./ProjectBox";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        Featured <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={
            "https://atdigitals.com/wp-content/uploads/2024/07/playzoPD2.png"
          }
          projectName="Playzo33"
        />
        <ProjectBox
          projectPhoto={
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Black_Wolf_Supper_Club_in_Eugene%2C_Oregon_%2838111586836%29.jpg"
          }
          projectName="blackwolf supper club"
        />
      </div>
    </div>
  );
};

export default Projects;
