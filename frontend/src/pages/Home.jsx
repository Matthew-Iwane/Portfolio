import HeroSection from "../components/home/HeroSection";
import Projects from "../components/home/ProjectSection";

import "../components/home/module.Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />      
      <Projects />
    </div>
  );
};

export default Home;
