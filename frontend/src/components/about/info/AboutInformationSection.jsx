import "./module.AboutInformationSection.css"
import resume from "../../../assets/resume.png"
import resume_pdf from "../../../assets/resume_pdf.pdf"

import data from "../../../data/data.json"

// import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";

import { Link } from "react-router-dom"

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

import meta from "../../../assets/certifications/meta.png"
import deeplearningai from "../../../assets/certifications/deeplearningai.png"

const AboutInformationSection = () => {
    return (
        <div className="about-information-section">
            <div className="about-information-container">
                <div className="resume-image-container">
                    <img src={resume} alt="Matthew Iwane resume" id="resume" />
                </div>
                <div className="resume-text-container">
                    <Link to={resume_pdf} target="_blank" id="resume-button">View Resume <span><BsArrowUpRight /></span></Link>
                    <p>View my resume by clicking this button or scroll down for more information about my resume!</p>
                </div>
            </div>

            <div className="accordion-container">
                <div className="company-information-container">
                    <h2 >Company Information &#128188;</h2>
                </div>

                <h2>Professional Certifications &#128196;</h2>
            </div>
            
            <div className="social-links-container">
                <h2>Social Links &#128173;</h2>
                <div className="social-links">
                    <Link to="https://www.linkedin.com/in/matthew-iwane/" target="_blank"><FaLinkedinIn /></Link>
                    <Link to="https://github.com/Matthew-Iwane" target="_blank"><PiGithubLogoFill /></Link>
                    <Link to="mailto:mattiwane.jobs@gmail.com"><IoMdMail /></Link>
                </div>
            </div>
        </div>
    )
}

export default AboutInformationSection