import "./module.AboutInformationSection.css"
import resume from "../../../assets/resume.png"
import resume_pdf from "../../../assets/resume_pdf.pdf"

// import data from "../../../data/data.json"

import { BsArrowUpRight } from "react-icons/bs";


import { motion } from "framer-motion"

import meta from "../../../assets/certifications/meta.png"
import deeplearningai from "../../../assets/certifications/deeplearningai.png"

const AboutInformationSection = () => {
    return (
        <div className="about-information-section">
            <div className="about-information-container">
                <div className="resume-image-container">
                    <motion.img
                        src={resume}
                        alt="Matthew Iwane resume"
                        id="resume"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className="resume-text-container">
                    <motion.a
                        href={resume_pdf}
                        target="_blank"
                        id="resume-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        View Resume <span><BsArrowUpRight /></span>
                    </motion.a>
                </div>
            </div>


            <div className="certification-section">
                <h2>Professional Certifications &#128196;</h2>
                
                <p><span>Click</span> on a <span>card</span> to <span>view</span> more about the <span>certificate</span>!</p>
                <div className="certification-cards-container">
                    <motion.a
                        className="certification-card"
                        target="_blank"
                        href="https://www.coursera.org/account/accomplishments/professional-cert/2YNFD9M9S8ZB"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={meta} alt="image of a programming tool icon" className="icon-img" />
                    </motion.a>

                    <motion.a
                        className="certification-card"
                        target="_blank"
                        href="https://www.coursera.org/account/accomplishments/specialization/SEBLCZQMNAVV"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={deeplearningai} alt="image of a programming tool icon" className="icon-img" />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
export default AboutInformationSection