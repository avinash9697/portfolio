import React, { useRef } from "react";
import "../styles/Main.css";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import test from "../images/test.png";

const Main = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sub-main">
      <div id="main" className="main-page">
        <div className="first-section">
          <h2 className="intro-heading">Hi, I'm Avinash Guntuboina</h2>
          <h1 className="desig">Software Engineer</h1>
          <button className="reach-out" onClick={scrollToContact}>
            Reach out
          </button>
        </div>
        <div className="second-section">
          <img src={test} className="image1" alt="test" />
        </div>
      </div>
      <div className="section-div">
        <section id="about">
          <About />
        </section>
        <section className="skill-section" id="skills">
          <Skills />
        </section>
        <section id="experience" className="experience-section">
          <div className="color-div"></div>
          <Experience />
        </section>
        <section id="projects" className="projects-section">
          <Projects />
          <div className="color-div2"></div>
        </section>
      </div>
      <section id="contact" ref={contactRef} className="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
