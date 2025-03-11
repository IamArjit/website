import React from "react";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Define the social icons array properly
  const socialIcons = [
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <img src="/logo.webp" alt="Logo" />
        <p>
          Astrologer Hanish Bagga, the esteemed founder and director of Acharya
          Ganesh, is celebrated for his innovative work in astrology, Vastu, and
          related fields. With over a decade of experience, Jyotish Hanish Bagga
          transitioned from a successful corporate career to pursue his passion
          in astrology, driven by a deeper calling.
        </p>
      </div>

      <div className="footer-section">
        <h3>Useful links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Top Services</h3>
        <p>Astro & Vastu</p>
        <p>Astrology</p>
        <p>Career Prediction</p>
        <p>Birth Chart Astrology</p>
        <p>Matchmaking</p>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Phone no. : +91 73000 04325</p>
        <p>Phone no. : +91 73000 04326</p>
        <p>
          Hall No. 201 Plot No. 959 Niti Khand 1, Opposite Orange County,
          Indirapuram Ghaziabad, 201014
        </p>
        <p>Birth Chart Astrology</p>

        {/* Social Icons */}
        <ul className="socials">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "20px" }}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
