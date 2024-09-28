import astronaut from "../../../assets/astronaut.svg";
import arrow_down from "../../../assets/arrow_down.svg"
import "./module.HeroSection.css";

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
          </div>
        </div>

        <img src={astronaut} alt="SVG of an astronaut" className="astronaut" />
      </div>
      <img src={arrow_down} alt="Arrow pointing down" className="arrow-down"/>
    </div>
  );
};

export default HeroSection;
