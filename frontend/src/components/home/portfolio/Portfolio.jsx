import { useState } from "react";
import Projects from "./projects/ProjectSection"
import Experience from "./experience/Experience";

import "./module.Portfolio.css"

const Portfolio = () => {
    const [toggleProjects, setToggleProjects] = useState(true);
    const [toggleExperience, setToggleExperience] = useState(false);

    function handleProjectsClick() {
        setToggleProjects(true)
        setToggleExperience(false)
    }

    function handleExperienceClick() {
        setToggleExperience(true)
        setToggleProjects(false)
    }

    return (
        <div className="portfolio-section">
            <div id="btn-text"><span id="click-text">Click</span> on a <span id="tab-text">tab below</span> to change the <span id="cards-text">cards!</span></div>
            <div className="portfolio-buttons">
                <div onClick={handleProjectsClick} className={toggleProjects ? "tab-active" : "not-active"}>Projects &#128640;</div>
                <div onClick={handleExperienceClick} className={toggleExperience ? "tab-active" : "not-active"}>Experience &#128187;</div>
            </div>
            {toggleProjects && <Projects />}
            {toggleExperience && <Experience />}
        </div>
    )
}

export default Portfolio