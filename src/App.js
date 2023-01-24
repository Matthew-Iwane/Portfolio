import { Home } from "./components/Home.jsx";
import { NavBar } from "./components/NavBar.jsx"
import { SocialLinks } from "./components/SocialLinks.jsx"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
    </div>
  );
}

export default App;
