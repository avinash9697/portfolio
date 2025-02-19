import React from "react";
import "../styles/skills.css";
// import skill1 from "../images/skill1.png";

const Skills = () => {
  return (
    <div className="skill-main">
      <div className="hard-skills">
        <p className="animated-skill">HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>ReactJS</p>
        <p>Redux</p>
        <p>Styled Components</p>
        <p>NodeJS</p>
        <p>ExpressJS</p>
        <p>Python</p>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>RestfulAPI's</p>
        <p>Bootstrap</p>
        <p>MaterialUI</p>
        <p>Unit testing</p>
        <p style={{ width: "150px" }}>Integration testing</p>
        <p>GIT</p>
        <p>Docker</p>
        <p>Grafana</p>
      </div>
      {/* <img src={skill1} alt="skill" className="skill-img" /> */}
      <div className="soft-skills">
        <p>Decision Making</p>
        <p>Problem-Solving</p>
        <p>Time Management</p>
        <p>Adaptability</p>
        <p>Communication</p>
        <p>Team Management</p>
        <p>Observation</p>
        <p>Multi-Tasking</p>
      </div>
    </div>
  );
};

export default Skills;
