import "./module.AboutInformationSection.css"
import resume from "../../../assets/resume.png"

import data from "../../../data/data.json"

import { useState } from "react";

import {
    Box,
    Typography,
    Modal
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    border: '1px solid #000',
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const AboutInformationSection = () => {
    const [toggle, setToggle] = useState('');
    const handleOpen = (buttonName) => setToggle(buttonName);
    const handleClose = () => setToggle('');

    return (
        <div className="about-information-section">
            <div className="about-infomation-container">
                <div className="resume-container">
                    <img src={resume} alt="Matthew Iwane resume" id="resume" />
                    <button>View Resume</button>

                    <div className="resume-text-container">
                        <h2 className="resume-header">Companies I have worked for:</h2>
                        {data.experience.map((e) => (
                            <button onClick={() => handleOpen(e.company)} key={e.id}>
                                {e.company}
                            </button>
                        ))}
                        <Modal open={!!toggle} onClose={handleClose}>
                            <Box sx={style}>
                                {/* Conditionally render modal content */}
                                <h2>{toggle}</h2>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {/* Here you can put specific content based on the selected company */}
                                    {toggle && "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInformationSection