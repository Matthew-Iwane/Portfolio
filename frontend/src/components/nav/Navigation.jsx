import { NavLink } from "react-router-dom";
import "./module.Navigation.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";

import { motion } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const sidebar = {
    open: () => ({
      clipPath: `circle(1000px at 100vw 0)`,
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 1,
      },
      opacity: 1,
    }),
    closed: {
      clipPath: "circle(0px at 100vw 0)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      transitionEnd: {
        opacity: 0,
      },
      opacity: 1,
    },
  };

  return (
    <div className="nav-section">
      {/* Web Navigation Menu */}
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <h3>Matthew Iwane</h3>
          <span>Developer</span>
        </NavLink>
        <nav className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="resume">Resume</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="work">Work</NavLink>
        </nav>

        {/* Hamburger Menu Navigation Menu */}
        <motion.nav
          className="hamburger-menu"
          animate={isOpen ? "open" : "closed"}
          // variants={SidebarVarients}
          // initial="inital"
          // whileInView="animate"
        >
          <div className="sidebar-nav-container">
            <div className="hamburger-menu-button-div">
              {!isOpen && (
                <RxHamburgerMenu
                  onClick={handleClick}
                  className="hamburger-menu-button"
                />
              )}
            </div>
            <motion.div className="sidebar-nav background" variants={sidebar}>
              {isOpen && (
                <RxCross1
                  onClick={handleClick}
                  className="hamburger-menu-button-cross"
                />
              )}
              <div className="sidebar-nav-items">
                <NavLink onClick={handleClick} to="/">
                  Home
                </NavLink>
                <NavLink onClick={handleClick} to="resume">
                  Resume
                </NavLink>
                <NavLink onClick={handleClick} to="about">
                  About
                </NavLink>
                <NavLink onClick={handleClick} to="work">
                  Work
                </NavLink>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};
