import "./module.ResumeInformationSection.css"
import resume from "../../../assets/resume.png"
import resume_pdf from "../../../assets/resume_pdf.pdf"
import { BsArrowUpRight } from "react-icons/bs";

// Framer Motion
import { motion } from "framer-motion"

// Certifications
import meta from "../../../assets/certifications/meta-cert.png"
import deeplearningai from "../../../assets/certifications/dlai.png"

const ResumeInformationSection = () => {
    return (
        <div className="resume-page-section">
            <h2>Resume + Certifications &#128196;</h2>
            <p><span>Click</span> on a <span>certificate</span> to <span>view</span> more <span>information</span>!</p>
            <div className="resume-information-container">
                <div className="resume-container">
                    <motion.img
                        src={resume}
                        alt="Matthew Iwane resume"
                        id="resume"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{
                            once: true
                        }}
                    />
                    <motion.a
                        href={resume_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="resume-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        View Resume <span><BsArrowUpRight /></span>
                    </motion.a>
                </div>

                <p id="cert-cards-desc"><span>Click</span> on a <span>certificate</span> to <span>view</span> more <span>info</span>!</p>

                <div className="certification-cards-container">
                    <motion.a
                        className="certification-card"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coursera.org/account/accomplishments/professional-cert/2YNFD9M9S8ZB"
                        whileHover={{ scale: 1.1, border: "1px solid #000" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{
                            once: true
                        }}
                    >
                        <img src={meta} alt="Meta Front-End Developer Certificate" className="icon-img" />
                    </motion.a>

                    <motion.a
                        className="certification-card"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coursera.org/account/accomplishments/specialization/SEBLCZQMNAVV"
                        whileHover={{ scale: 1.1, border: "1px solid #000" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{
                            once: true
                        }}
                    >
                        <img src={deeplearningai} alt="DeepLearning.AI Certificate" className="icon-img" />
                    </motion.a>
                </div>
            </div>

            {/* Additional Certifications */}
            <div className="additional-certifications-section">
                <h3>Additional Certifications</h3>
                <div className="additional-certs-container">
                    <motion.div
                        className="additional-cert-card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img 
                            src="/images/sf_admin_logo.png" 
                            alt="Salesforce Platform Administrator Certification" 
                            className="additional-cert-img"
                        />
                        <span className="cert-date">December 2025</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ResumeInformationSection