
import './App.css';



import React from "react";
import "./App.css";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="app">

      <nav className="navbar">

        <h2 className="logo">Mohamed Musharaf</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      <section className="hero">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>Mohamed Musharaf A</h1>

          <TypeAnimation
            sequence={[
              " I am a MERN Stack Developer",
              2000,
              "I am a React Developer",
              2000,
              "I am a Full Stack Developer",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
            className="typing"
          />

          <p>
            Passionate Full Stack Developer focused on building modern,
            responsive, scalable web applications using MERN Stack.
          </p>

          <div className="hero-buttons">

            <button>Download Resume</button>

            <button className="outline">
              Hire Me
            </button>

          </div>

          <div className="social-icons">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </section>


      <section className="section" id="about">

        <h2>About Me</h2>

        <div className="glass-card">

          <p>
            Motivated and detail-oriented MERN Stack Developer with
            strong knowledge in React.js, Node.js, Express.js, and MongoDB.
            Passionate about building scalable full-stack applications and
            continuously learning modern technologies.
          </p>

        </div>

      </section>

      <section className="section" id="skills">

        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <FaReact />
            <h3>React.js</h3>
          </div>

          <div className="skill-card">
            <FaNodeJs />
            <h3>Node.js</h3>
          </div>

          <div className="skill-card">
            <SiExpress />
            <h3>Express.js</h3>
          </div>

          <div className="skill-card">
            <SiMongodb />
            <h3>MongoDB</h3>
          </div>

          <div className="skill-card">
            <FaHtml5 />
            <h3>HTML5</h3>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <h3>CSS3</h3>
          </div>

          <div className="skill-card">
            <FaGitAlt />
            <h3>Git & GitHub</h3>
          </div>

        </div>

      </section>


      <section className="section" id="projects">

        <h2>Projects</h2>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.03 }}
        >

          <h3>Fees Management System</h3>

          <p>
            Full-stack MERN application with Admin Login,
            Dashboard, Add Student Page, MongoDB Integration,
            and REST API architecture.
          </p>

          <div className="tech">

            <span>React</span>
            <span>Node</span>
            <span>Express</span>
            <span>MongoDB</span>

          </div>

        </motion.div>

      </section>


      <section className="section">

        <h2>Education</h2>

        <div className="glass-card">

          <h3>M.Com (General)</h3>
          <p>St. Joseph's College of Arts and Science</p>

          <br />

          <h3>B.Com (General)</h3>
          <p>Prist Deemed to be University</p>

        </div>

      </section>


      <section className="section" id="contact">

        <h2>Contact</h2>

        <div className="contact-box">

          <p>
            <FaEnvelope /> mohamedmusharaf2002@gmail.com
          </p>

          <p>
            <FaPhone /> +91 7448843901
          </p>

          <p>
            <FaMapMarkerAlt /> Tamil Nadu, India
          </p>

        </div>

      </section>


      <footer>
        <p>© 2026 Mohamed Musharaf A</p>
      </footer>

    </div>
  );
}

export default App;
