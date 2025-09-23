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
import under_construction from "../../../assets/under_construction.svg"


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
                        <h1><span>Page Under</span> Development</h1>
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
                    src={under_construction}
                    alt="two people working at a construction site"
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