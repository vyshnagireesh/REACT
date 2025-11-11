import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          MyWebsite<span>.</span>
        </NavLink>

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Links */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-item" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-item" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-item" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-item" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
