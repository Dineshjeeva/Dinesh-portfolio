import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import React from "react";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Playzo33Github: "",
    Playzo33Website: "https://playzo33.in",
  };

  const show = desc[projectName + "Github"] ? "inline-block" : "none";

  return (
    <div className="project-box">
      <div className="relative">
        <img
          className="project-image"
          src={projectPhoto}
          alt={`${projectName} display`}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{projectName}</h3>

        <div className="tech-stack">
          <span className="tech-chip">React JS</span>
          <span className="tech-chip">Web Application</span>
          <span className="tech-chip">TypeScript</span>
        </div>

        <p className="project-desc">{desc[projectName + "Desc"]}</p>

        <div className="action-buttons">
          {desc[projectName + "Github"] && (
            <a href={desc[projectName + "Github"]} className="github-button">
              <FaGithub /> GitHub
            </a>
          )}
          <a href={desc[projectName + "Website"]} className="demo-button">
            <CgFileDocument /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
