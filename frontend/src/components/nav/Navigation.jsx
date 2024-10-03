import { NavLink } from "react-router-dom";
import "./module.Navigation.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react"

// import { animate, motion } from "framer-motion"


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {  
    setIsOpen(!isOpen)
  }

  // const SidebarVarients = {
  //   initial: {
  //     opacity: 0,
  //     x: 1000,
  //   },
  //   animate: {
  //     opacity: 1,
  //     x: 0,
  //   }
  // }

  return (
    <div className="nav-section">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <h3>Matthew Iwane</h3>
          <span>Developer</span>
        </NavLink>
        <nav className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>

        <nav 
          className="hamburger-menu"
          // variants={SidebarVarients}
          // initial="inital"
          // whileInView="animate"
        >
          {isOpen ? (
            <div className="sidebar-nav-container">
              <div className="sidebar-nav">
                <RxCross1 onClick={handleClick}  className="hamburger-menu-button"/>
                <div className="sidebar-nav-items">
                  <NavLink onClick={handleClick} to="/">Home</NavLink>
                  <NavLink onClick={handleClick} to="about">About</NavLink>
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
