import HeroSection from "../components/home/hero/HeroSection";
import Projects from "../components/home/projects/ProjectSection";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />      
      <Projects />
    </div>
  );
};

export default Home;
