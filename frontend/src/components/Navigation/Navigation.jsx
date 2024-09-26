import { NavLink } from "react-router-dom";
import "./module.Navigation.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h3>Matthew Iwane</h3>
        <span>Developer</span>
      </div>
      <nav className="nav-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </div>
  )
}
