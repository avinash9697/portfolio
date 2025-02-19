import React, { useRef } from "react";
import "../styles/project.css";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const Projects = () => {
  const containerRef = useRef(null);

  const scrollProjects = (direction) => {
    const container = containerRef.current;
    // const scrollAmount = container.offsetWidth; // Scroll by the width of the visible area
    const scrollAmount = 450;
    if (direction === "right") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "left") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="projects-main">
      <div className="main-con" ref={containerRef}>
        <button
          className="scroll-button left"
          onClick={() => scrollProjects("right")}
        >
          <FaAngleDoubleLeft
            style={{ fontSize: "16px", backgroundColor: "transparent" }}
          />
        </button>
        <div className="project1">
          <div style={{ marginBottom: "20px" }} className="inside-div1">
            <h3>Metaverse: Geospatial Insights Application</h3>
            <p>
              An application that provides detailed insights into service areas
              through geographical data. It helps assess service feasibility and
              analyze region-specific data, streamlining the customer onboarding
              process
            </p>
          </div>
          <ul>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Implemented geospatial data analysis for customer locations.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Integrated geocoding and reverse geocoding to map customer
                addresses accurately.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Developed geofencing features to check if customers fall within
              service zones.
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Implemented geospatial data analysis for customer locations.
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Created APIs to fetch customer data by region, state, city, or
              zone, with additional filters for detailed insights.
            </li>
          </ul>
          <p style={{ marginTop: "20px" }}>
            The purpose of application is to assist our organization in
            understanding customer locations, determining service feasibility,
            and analyzing region-wise data during the onboarding process.
          </p>
        </div>
        <div className="project1">
          <div style={{ marginBottom: "10px" }}>
            <h3>Wi-Fi sharing Application</h3>
            <p>
              An application for onboarding customers with device and bandwidth
              limits, ensuring fair Wi-Fi usage. It includes renewal options and
              payment integration for adding devices, offering flexibility and
              ease of use.
            </p>
          </div>
          <ul>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Onboarded customers with configurable device and bandwidth
                limits using pfSense.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Enabled payment integration for customers to add more devices as
                needed.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Designed detailed dashboards for various roles, managed via RBAC
              (Role-Based Access Control), to provide insights into data usage,
              connected devices, and other critical metrics.
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Made it easier to manage customers and gain clear insights into
              Wi-Fi usage with user-friendly interfaces and real-time data.
            </li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            The purpose of application is to provide an efficient and equitable
            Wi-Fi management system, ensuring fair bandwidth distribution while
            offering flexibility for users to expand their connections as
            needed.
          </p>
        </div>
        <div className="project1">
          <div style={{ marginBottom: "30px" }}>
            <h3>Plan Management System</h3>
            <p>
              An application designed to make managing customer plans simple and
              efficient, providing the management team with clear insights and
              effective tools to handle plans effortlessly.
            </p>
          </div>
          <ul>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Developed features for creating, updating, and managing customer
                plans smoothly and accurately.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              <span style={{ lineHeight: "1.5" }}>
                Designed interactive dashboards to provide detailed insights
                into each plan, including metrics such as the number of assigned
                customers, usage trends, and overall performance.
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <TbPointFilled
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginRight: "5px",
                  flexShrink: 0,
                }}
              />
              Provided management teams with intuitive features to monitor,
              analyze, and enhance plan performance with ease.
            </li>
          </ul>
          <p style={{ marginTop: "30px" }}>
            The purpose of this application is to provide insights into the
            available plans, track how many users are assigned to each plan, and
            offer detailed information to help manage and optimize plan
            allocations effectively.
          </p>
        </div>
        <div className="project1">
          <h3 style={{ marginBottom: "20px" }}>Personal Projects</h3>
          <div>
            <h4 style={{ marginBottom: "10px" }}>E-commerce Platform</h4>
            <p style={{ background: "transparent" }}>
              A full-stack e-commerce platform built using the MERN stack.
            </p>
            <ul style={{ marginTop: "10px" }}>
              <li style={{ marginLeft: "20px" }}>
                Implemented Context API for state management across the
                application.
              </li>
              <li style={{ marginLeft: "20px" }}>
                Designed and integrated RESTful APIs for data communication
                between the frontend and backend.
              </li>
              <li style={{ marginLeft: "20px" }}>
                Developed user authentication and authorization for secure
                transactions.
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4 style={{ marginBottom: "10px" }}>YouTube Clone</h4>
            <p style={{ background: "transparent" }}>
              A web application replicating the core features of YouTube.
            </p>
            <ul style={{ marginTop: "10px" }}>
              <li style={{ marginLeft: "20px" }}>
                Utilized React for an interactive and responsive UI.
              </li>
              <li style={{ marginLeft: "20px" }}>
                Integrated YouTube Google APIs to fetch and display video
                content dynamically.
              </li>
            </ul>
          </div>
        </div>
        <div className="button-container">
          <button
            className="scroll-button right"
            onClick={() => scrollProjects("left")}
          >
            <FaAnglesRight
              style={{ fontSize: "16px", backgroundColor: "transparent" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
