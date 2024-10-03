import pfp from "../../../assets/pfp/pfp.jpg"
// import grad_pfp from "../../assets/pfp/grad_pfp.jpg"

import "./module.AboutHeroSection.css"
import "../../shared/module.Shared.css"

import { motion } from "framer-motion"

import look_gif from "../../../assets/gifs/look.gif"

// import { Link } from "react-router-dom"

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

import { useState } from "react";

const AboutHeroSection = () => {
    const [cursorCoord, setCursorCoord] = useState({ left: 0, top: 0 })

    function handleMouseMove(e) {
      setCursorCoord({ left: e.clientX })
    }
    return (
        <div className="about-hero-section">
            <div className="about-hero-container">
                <div className="heading-container">
                    <div className="about-heading" onMouseMove={handleMouseMove}>
                        <img
                            src={look_gif}
                            alt="dancing marshmallow guy"
                            id="thinking-emoji"
                            style={{ left: `${cursorCoord.left}px` }}
                        />
                        <h1><span>Job Related</span> Information</h1>
                    </div>
                    <div className="about-subheading">
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
                    src={pfp}
                    alt="image of Matthew Iwane profile"
                    className="pfp-img"
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

export default AboutHeroSection