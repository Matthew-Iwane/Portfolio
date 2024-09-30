import "./module.AboutInformationSection.css"
import resume from "../../../assets/resume.png"

const AboutInformationSection = () => {
  return (
    <div className="about-information-section">
        <div className="about-infomation-container">
            <div className="resume-container">
                <img src={resume} alt="Matthew Iwane resume" id="resume"/>
                <div className="resume-text-container">
                    <h3 className="resume-header">Work Experience</h3>
                    <ul>
                        <li>
                            Open Source Recruiter
                            <ul>
                                <li>2024</li>
                                <li>Software Engineer</li>
                            </ul>
                        </li>
                        <li>SkillYah</li>
                        <li>FORGE Design Studios</li>
                        <li>SkyIT GBCS Group</li>
                    </ul>
                    <button>View Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutInformationSection