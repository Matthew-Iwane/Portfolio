import HeroSection from "../components/home/hero/HeroSection";
import Portfolio from "../components/home/portfolio/Portfolio";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />      
      <Portfolio />
    </div>
  );
};

export default Home;
