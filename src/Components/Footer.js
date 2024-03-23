import { FaGithub, FaLinkedin } from "react-icons/fa";

import { GrMail } from "react-icons/gr";
import React from "react";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2023 Dinesh</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/Dineshjeeva"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/dineshinlink"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:djeeva1515@gmail.com" target="_blank" rel="noreferrer">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
