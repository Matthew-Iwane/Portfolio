// import { Link } from "react-router-dom"

import astronaut from "../../../assets/astronaut.svg";
import { RxDoubleArrowDown } from "react-icons/rx";

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

import "./module.HeroSection.css";
import "../../shared/module.Shared.css"

import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="heading-container">
          <div className="heading">
            <h1>I&#8217;m Matthew &#128512;</h1>
          </div>
          <div className="subheading">
            <p>
              I am a <span>Full Stack Developer</span> who has been coding and
              working professionally for <span>3 years</span> now. I love
              building web apps and have also been enjoying studying{" "}
              <span>Machine Learning</span> concepts as well. Enjoy my personal
              portfolio!
            </p>

            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/matthew-iwane/"
                target="_blank"
                // transition={{ delay: 1 }}
                whileHover={{ translateY: "-10px" }}
              >
                <FaLinkedinIn />
              </motion.a>

              <motion.a
                href="https://github.com/Matthew-Iwane"
                target="_blank"
                whileHover={{ translateY: "-10px" }}
              >
                <PiGithubLogoFill />
              </motion.a>

              <motion.a
                href="mailto:mattiwane.jobs@gmail.com"
                whileHover={{ translateY: "-10px" }}
              >
                <IoMdMail />
              </motion.a>
            </div>
          </div>
        </div>

        <img src={astronaut} alt="SVG of an astronaut" className="astronaut" />
      </div>
      <RxDoubleArrowDown className="arrow-down" />
    </div>
  );
};

export default HeroSection;
