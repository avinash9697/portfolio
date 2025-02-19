import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="inside-div">
        <h1 className="main-head">
          <a href="#main">My Portfolio</a>
        </h1>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
