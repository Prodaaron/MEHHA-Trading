import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./navbar.css";
import logo from "../assets/logo.png";
import emailIcon from '../assets/email-svgrepo-com.svg';
import instaIcon from '../assets/instagram-svgrepo-com.svg';
import tiktokIcon from '../assets/tiktok-svgrepo-com.svg';
import facebook from '../assets/facebook-svgrepo-com.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // 👇 Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="upper-header">
        <div className="uh-left">
          <a href="">MEHHA</a>
          <a href="">Mes-Arg Plast</a>
          <a href="">Tirsit Apartment</a>
        </div>

        <div className="uh-right">
          <a href="https://web.facebook.com/mehha.trading/">
            <img className="social-icons facebook-icon" src={facebook} alt="mehha-facebook-icon" />
          </a>
          <a href="https://www.instagram.com/mehha.trading/">
            <img className='social-icons' src={instaIcon} alt="mehha-instagram-icon" />
          </a>
          <a href="https://www.tiktok.com/@mehha.trading">
            <img className='social-icons' src={tiktokIcon} alt="mehha-tiktok-icon" />
          </a>
          
        </div>
      </div>

      <div className="container">
        <a href="/">
          <img src={logo} alt="MEHHA Logo" className="logo" />
        </a>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/industry">Companies & Shares</Link></li>

          <li className={`dropdown ${openDropdown === "trades" ? "open" : ""}`}>
            <span className="dropbtn" onClick={() => toggleDropdown("trades")}>
              International Trades ▾
            </span>
            <ul className="dropdown-content">
              <li><Link to="/exports">Exports</Link></li>
              <li><Link to="/imports">Imports</Link></li>
            </ul>
          </li>

          <li><Link to="/News">What's New?</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
