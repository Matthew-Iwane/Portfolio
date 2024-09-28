import HeroSection from "../components/home/hero/HeroSection";
import Projects from "../components/home/projects/ProjectSection";
import Experience from "../components/home/experience/Experience";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />      
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
