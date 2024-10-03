import { NavLink } from "react-router-dom";
import "./module.Navigation.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react"

import { motion } from "framer-motion"


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

  const sidebar = {
    open: () => ({
      clipPath: `circle(1000px at 100vw 0)`,
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 1,
      },
    }),
    closed: {
      clipPath: "circle(0px at 100vw 0)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

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

        <motion.nav
          className="hamburger-menu"
          animate={isOpen ? "open" : "closed"}
        // variants={SidebarVarients}
        // initial="inital"
        // whileInView="animate"
        >
          <div className="sidebar-nav-container">
            <div className="hamburger-menu-button-div">
              {!isOpen && <RxHamburgerMenu onClick={handleClick} className="hamburger-menu-button" />}
            </div>
            <motion.div className="sidebar-nav background" variants={sidebar}>
              <div className="sidebar-nav-items">
                {isOpen && <RxCross1 onClick={handleClick} className="hamburger-menu-button-cross" />}
                <NavLink onClick={handleClick} to="/">Home</NavLink>
                <NavLink onClick={handleClick} to="about">About</NavLink>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}
