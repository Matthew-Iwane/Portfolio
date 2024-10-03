import pfp from "../../../assets/pfp/pfp.jpg"
// import grad_pfp from "../../assets/pfp/grad_pfp.jpg"

import "./module.AboutHeroSection.css"
import "../../shared/module.Shared.css"

import { motion } from "framer-motion"


// import { Link } from "react-router-dom"

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";


const AboutHeroSection = () => {
    return (
        <div className="about-hero-section">
            <div className="about-hero-container">
                <div className="heading-container">
                    <div className="about-heading">
                        <h1>My <span>job related</span> information...</h1>
                    </div>
                    <div className="about-subheading">
                        <p>
                            Below you will find all my information regarding job-related information. Anything from my <span>resume</span>,
                            to <span>social links</span>, to other <span>tech-related</span> things about me will all provided below. Take a look!
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