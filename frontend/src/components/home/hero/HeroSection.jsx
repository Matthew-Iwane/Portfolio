import astronaut from "../../../assets/astronaut.svg"
import "./module.HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="intro">
          <h1>My name is Matthew Iwane and I am a <span>Full Stack Developer</span></h1>
        </div>

        <img 
          src={astronaut} 
          alt="SVG of an astronaut" 
          className="astronaut"
        />
      </div>
  )
}

export default HeroSection