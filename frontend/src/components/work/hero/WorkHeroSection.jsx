// CSS
import "./module.WorkHeroSection.css"
import "../../shared/module.Shared.css"

// Framer Motion
import { motion } from "framer-motion"

// GIF
import look_gif from "../../../assets/gifs/look.gif"

// React Icons
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

// React Imports
import { useState } from "react";

// Images
import code_thinking from "../../../assets/code_thinking.svg"


export const HeroSection = () => {

  const [cursorCoord, setCursorCoord] = useState({ left: 0, top: 0 })

  function handleMouseMove(e) {
    setCursorCoord({ left: e.clientX })
  }

  return (
       <div className="resume-hero-section">
            <div className="resume-hero-container">
                <div className="heading-container">
                    <div className="resume-heading" onMouseMove={handleMouseMove}>
                        <img
                            src={look_gif}
                            alt="dancing marshmallow guy"
                            id="thinking-emoji"
                            style={{ left: `${cursorCoord.left}px` }}
                        />
                        <h1><span>Job Related</span> Information</h1>
                    </div>
                    <div className="resume-subheading">
                        <p>
                            This section provides more information regarding my qualifications as a developer.
                            Anything from my <span>resume</span>, to <span>social links</span>, to other <span>tech-related</span> things about me are provided below. Take a look!
                        </p>
                    </div>
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

                <motion.img
                    src={code_thinking}
                    alt="man sitting next to a big computer"
                    className="code-thinker-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </div>
        </div>
  )
}

export default HeroSection