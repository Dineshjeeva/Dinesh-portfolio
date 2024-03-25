import { DiJavascript1, DiNodejs } from "react-icons/di";
import {
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

import React from "react";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Typescript: "TS",
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
