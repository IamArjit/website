import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
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
import gsap from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const linksRef = useRef([]);
  const iconsRef = useRef([]);
  const hamburgerIconRef = useRef(null);

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

  useEffect(() => {
    // GSAP Animation for Navbar Links
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );

    // GSAP Animation for Icons inside Links
    gsap.fromTo(
      iconsRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 }
    );

    // GSAP Animation for Hamburger Icon
    gsap.fromTo(
      hamburgerIconRef.current,
      { rotation: 0, opacity: 0 },
      { rotation: 360, opacity: 1, duration: 0.6 }
    );

    // GSAP Animation when the menu opens
    if (menuOpen) {
      gsap.to(navbarRef.current, { width: "200px", duration: 0.3 });
    } else {
      gsap.to(navbarRef.current, { width: "50px", duration: 0.3 });
    }
  }, [menuOpen]);

  return (
    <div className="navbar-container">
      <Link className="logo" to={"/"}>
        <img src="/logo.webp" alt="Logo" width={100} />
      </Link>

      <nav ref={navbarRef} className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          {routes.map((route, index) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                onClick={handleLinkClick}
                className="navbar-link"
                activeclassname="active-link"
              >
                <span
                  ref={(el) => (iconsRef.current[index] = el)} // Assign ref to the icon
                  className="icon"
                >
                  {route.icon}
                </span>
                <span ref={(el) => (linksRef.current[index] = el)}>
                  {route.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger icon */}
      <div
        ref={hamburgerIconRef}
        className="hamburger-icon"
        onClick={handleMenuToggle}
      >
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
