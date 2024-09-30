import "./module.AboutInformationSection.css"
import resume from "../../../assets/resume.png"

import data from "../../../data/data.json"

import { useState } from "react";

import { Modal, Box, Typography } from '@mui/material';

// import { Link } from "react-router-dom"

// import { FaLinkedinIn } from "react-icons/fa";
// import { PiGithubLogoFill } from "react-icons/pi";
// import { IoMdMail } from "react-icons/io";

{/* <div className="social-links">
    <Link to="https://www.linkedin.com/in/matthew-iwane/" target="_blank"><FaLinkedinIn /></Link>
    <Link to="https://github.com/Matthew-Iwane" target="_blank"><PiGithubLogoFill /></Link>
    <Link to="mailto:mattiwane.jobs@gmail.com"><IoMdMail /></Link>
</div> */}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "8px",
    border: "#e7e7e7",
    p: 4,
};


const AboutInformationSection = () => {
    const [toggle, setToggle] = useState('');
    const handleOpen = (buttonName) => setToggle(buttonName);
    const handleClose = () => setToggle('');

    return (
        <div className="about-information-section">
            <div className="about-information-container">
                <div className="resume-image-container">
                    <img src={resume} alt="Matthew Iwane resume" id="resume" />
                    <a id="resume-button">View Resume</a>
                </div>

                <div className="resume-text-container">
                    <h2 className="resume-header">Companies I have worked for:</h2>
                    {data.experience.map((e) => (
                        <button onClick={() => handleOpen(e.company)} key={e.id} className="modal-item-button">
                            {e.company}
                        </button>
                    ))}
                    <Modal open={!!toggle} onClose={handleClose}>
                        <Box sx={style}>
                            <h2>{toggle}</h2>
                            <Typography id="modal-description" sx={{ mt: 2 }}>
                                {toggle && "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default AboutInformationSection