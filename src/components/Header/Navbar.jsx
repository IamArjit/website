import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Courses", path: "/courses", icon: <FaBook /> },
    { name: "Blog", path: "/blog", icon: <BsFileEarmarkPost /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/logo.webp" alt="Logo" width={100} />
      </div>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                onClick={handleLinkClick}
                className="navbar-link"
                activeClassName="active-link"
              >
                <span className="icon">{route.icon}</span>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger icon */}
      <div className="hamburger-icon" onClick={handleMenuToggle}>
        {menuOpen ? (
          <FaTimes style={{ color: "rgb(230, 149, 1)", fontSize: "25px" }} />
        ) : (
          <FaBars style={{ color: "rgb(230, 149, 1)", fontSize: "25px" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
