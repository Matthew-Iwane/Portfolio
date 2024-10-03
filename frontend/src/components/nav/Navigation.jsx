import { NavLink } from "react-router-dom";
import "./module.Navigation.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react"



export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {  
    setIsOpen(!isOpen)
  }

  return (
    <div className="nav-section">
      <div className="nav-container">
        <div className="logo">
          <h3>Matthew Iwane</h3>
          <span>Developer</span>
        </div>
        <nav className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>

        <nav className="hamburger-menu">
          {isOpen ? (
            <div className="sidebar-nav-container">
              <div className="sidebar-nav">
                <RxCross1 onClick={handleClick}  className="hamburger-menu-button"/>
                <div className="sidebar-nav-items">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="about">About</NavLink>
                </div>
              </div>
            </div>
          ) : (
            <RxHamburgerMenu onClick={handleClick} className="hamburger-menu-button"/>
          )}
        </nav>
      </div>
      
    </div>
  )
}
