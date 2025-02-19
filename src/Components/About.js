import React from "react";
import "../styles/about.css";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-first">
        <div className="first-para">
          <p>
            <FaHandPointRight className="icon1" />
            My journey into the tech world has been an exciting adventure. I
            started my career with a Bachelor’s degree in Civil Engineering and
            spent three years working in the civil sector. While I enjoyed that
            chapter of my life, I felt a growing passion for technology that I
            couldn’t ignore. So, I took a leap of faith and transitioned into
            IT, and I’ve never looked back!
          </p>
          <p>
            <FaHandPointRight className="icon1" />
            For the past two years, I’ve been working as a Junior Engineer,
            diving deep into the MERN stack and picking up some Python skills
            along the way. I’ve worked on exciting projects that challenged me
            to learn and grow, and I’m always looking forward to taking on new
            opportunities where I can make an impact.
          </p>
          <p style={{ fontStyle: "italic" }}>
            "Beyond work, I love trekking—it’s my way of embracing challenges
            and reconnecting with nature."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
