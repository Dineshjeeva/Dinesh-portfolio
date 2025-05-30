import { BsCodeSlash, BsPerson } from "react-icons/bs";

import { AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
        style={{
          color: "white",
        }}
      >
        <span
          style={{
            color: "#9067C6",
            textDecoration: "underline",
          }}
        >
          D
        </span>
        inesh
      </h1>

      

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Project">
            <BsCodeSlash /> Project
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Resume">
            <CgFileDocument /> Resume
          </Link>
        </li>
      </ul>
      <div class='btn-cont'>
  <a class='btn' href='#'>
Contact Me    <span class='line-1'></span>
    <span class='line-2'></span>
    <span class='line-3'></span>
    <span class='line-4'></span>
  </a>
</div>


      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
