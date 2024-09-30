import { Link } from "react-router-dom"

import astronaut from "../../../assets/astronaut.svg";
import { RxDoubleArrowDown } from "react-icons/rx";

import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

import "./module.HeroSection.css";
import "../../shared/module.Shared.css"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="heading-container">
          <div className="heading">
            <h1>I&#8217;m Matthew &#128512;</h1>
          </div>
          <div className="subheading">
            <p>
              I am a <span>Full Stack Developer</span> who has been coding and
              working professionally for <span>3 years</span> now. I love
              building web apps and have also been enjoying studying{" "}
              <span>Machine Learning</span> concepts as well. Enjoy my personal
              portfolio!
            </p>

            <div className="social-links">
              <Link to="https://www.linkedin.com/in/matthew-iwane/" target="_blank"><FaLinkedinIn /></Link>
              <Link to="https://github.com/Matthew-Iwane" target="_blank"><PiGithubLogoFill /></Link>
              <Link to="mailto:mattiwane.jobs@gmail.com"><IoMdMail /></Link>
            </div>
          </div>
        </div>

        <img src={astronaut} alt="SVG of an astronaut" className="astronaut" />
      </div>
      <RxDoubleArrowDown className="arrow-down" />
    </div>
  );
};

export default HeroSection;
