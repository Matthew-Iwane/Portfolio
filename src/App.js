import { Home } from "./components/Home.jsx";
import { NavBar } from "./components/NavBar.jsx"
import { SocialLinks } from "./components/SocialLinks.jsx"
import { About } from "./components/About.jsx"
import { Portfolio } from "./components/Portfolio.jsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
