import { Link } from "react-router-dom"

import pfp from "../../../assets/pfp/pfp.jpg"
// import grad_pfp from "../../assets/pfp/grad_pfp.jpg"

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";


import "./module.AboutHeroSection.css"
import "../../shared/module.Shared.css"

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
                    <div className="social-links">
                    <Link to="https://www.linkedin.com/in/matthew-iwane/" target="_blank"><FaLinkedinIn /></Link>
                    <Link to="https://github.com/Matthew-Iwane" target="_blank"><PiGithubLogoFill /></Link>
                    <Link to="mailto:mattiwane.jobs@gmail.com"><IoMdMail /></Link>
                    </div>
                </div>
            </div>
            <img src={pfp} alt="image of Matthew Iwane profile" className="pfp-img"/>
        </div>
    </div>
  )
}

export default AboutHeroSection