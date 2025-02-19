import React, { useState } from "react";
import "../styles/contact.css";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const submitForm = () => {
    console.log(name);
  };

  const handleViewResume = () => {
    window.open("/latest_resume.pdf", "_blank");
  };

  return (
    <div className="contact-main">
      <div className="first-div">
        <h1>Contact Me</h1>
        <p>Feel free to reach out!</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="mail-div">
              <IoIosMail className="icon-con" />
              <a
                href="mailto:avinashguntuboina7@gmail.com?subject=Hello%20Avinash&body=I%20wanted%20to%20reach%20out%20regarding..."
                className="mail-link"
              >
                avinashguntuboina7@gmail.com
              </a>{" "}
            </div>
            <div className="mail-div">
              <MdCall className="icon-con" />
              <p>+91 9392538076</p>
            </div>
            <div className="mail-div">
              <IoLocation className="icon-con" />
              <p>Bangalore, India</p>
            </div>
            <div className="social-links">
              <div>
                <a
                  href="https://www.linkedin.com/in/avinash-guntuboina-04889b191"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="linkedin-icon"
                >
                  <SiLinkedin size={35} color="#0077b5" />
                </a>
                <a
                  href="https://github.com/avinash9697"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="git-icon"
                >
                  <GrGithub size={35} />
                </a>
              </div>
              <button onClick={handleViewResume} className="download-resume">
                Download My resume
              </button>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089904427!2d77.4661265533684!3d12.953945614401421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1737616995067!5m2!1sen!2sin"
              width="300"
              height="250"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="second-div">
        <h2>Write to Me</h2>
        <form onSubmit={submitForm} className="form-ele">
          <input
            className="name-ele"
            type="text"
            placeholder="Enter your Name"
            onChange={changeName}
          />
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="email-ele"
          />
          <input
            type="textarea"
            placeholder="Your message Here"
            className="text-ele"
          />
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
