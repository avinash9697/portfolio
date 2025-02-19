import React from "react";
import "../styles/experience.css";
import skill1 from "../images/skill1.png";
import { FaHandPointRight } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="exper-main">
      <img src={skill1} alt="skill1" className="skill-img" />
      <div className="experience-content">
        <div className="exper-head">
          <h3>Software Engineer</h3>
          <hr />
          <h4>Nuron Networks India Pvt. Ltd</h4>
          <hr />
          <p>Feb 2023 - Present</p>
        </div>
        <div className="points-div">
          <ul className="exp-list">
            <li>
              <FaHandPointRight className="icon1" />
              Interacted with the solutions team to discuss workflows and
              requirements, and implemented them following proper approvals,
              ensuring technical solutions aligned with business goals.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Developed and implemented database schema models for web
              applications, ensuring efficient data management and storage.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Collaborated with graphic designers to create interactive and
              engaging user interfaces, enhancing user satisfaction.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Performed development, testing, and debugging of software
              applications to ensure high performance and reliability.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Involved in comprehensive code reviews to maintain code quality
              and adherence to best practices.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Participated in Agile ceremonies including daily stand-ups, sprint
              planning, and project phase meetings to ensure project alignment
              and progress.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Provided ongoing technical support, troubleshooting, and issue
              resolution to minimize downtime and enhance user experience.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Contributed to an innovative project to restrict device
              connections to Wi-Fi networks, ensuring equal bandwidth
              consumption among users.
            </li>
            <li>
              <FaHandPointRight className="icon1" />
              Contributed to other projects, such as a voice bot and analysis
              applications dealing with the organization's sensitive data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
