// import { Link } from "react-router-dom"
// import astronaut from "../../../assets/astronaut.svg";\

import programming from "../../../assets/programming.svg"

import { RxDoubleArrowDown } from "react-icons/rx";

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

import "./module.HeroSection.css";
import "../../shared/module.Shared.css"

import { motion } from "framer-motion"

import { useState } from "react";
import gif from "../../../assets/gifs/dance.gif"

const HeroSection = () => {
  const [cursorCoord, setCursorCoord] = useState({ left: 0, top: 0 })

  function handleMouseMove(e) {
    setCursorCoord({ left: e.clientX })
  }

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="heading-container">
          <div className="heading" >
            <h1 className="hero-header" onMouseMove={handleMouseMove}>I&#8217;m <span >Matthew</span> &#128512;</h1>
            <img
              src={gif}
              alt="dancing marshmallow guy"
              id="dancing-marshmallow-gif"
              style={{ left: `${cursorCoord.left}px` }}
            />
          </div>
          <div className="subheading">
            <p>
              I am a <span>Full Stack Developer</span> who has been coding and
              working professionally for <span>4 years</span>. I love
              building web apps and on my free time I also enjoy learning about {" "}
              <span>machine learning</span> concepts as well. Enjoy my personal
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

        <motion.img 
          src={programming} 
          alt="image of a man sitting down programming" 
          className="hero-image" 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      <RxDoubleArrowDown className="arrow-down" />
    </div>
  );
};

export default HeroSection;
