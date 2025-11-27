// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "./navbar.css";
import logo from "../assets/logo.png";
import instaIcon from '../assets/instagram-svgrepo-com.svg';
import tiktokIcon from '../assets/tiktok-svgrepo-com.svg';
import facebook from '../assets/facebook-svgrepo-com.svg';
import mesargLogo from "../assets/Mes-Arg-Plast-Logo-Primary-transparent.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  // determine which logo to show
  const isMesArg = location.pathname.startsWith("/mes-arg-plast");
  const logoToShow = isMesArg ? mesargLogo : logo;

  const toggleMenu = (e) => {
    e?.stopPropagation();
    setIsOpen(prev => !prev);
    // close any dropdown when toggling main menu
    setOpenDropdown(null);
  };

  const toggleDropdown = (name, e) => {
    // stop document outside-click handler from firing
    e?.stopPropagation();
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  // Hide on scroll down, show on scroll up (keeps hamburger visible)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close when clicking / tapping outside nav
  useEffect(() => {
    const handleOutside = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    // pointerdown is more reliable for touch + click
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Close menu helper (for clicks on links)
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`navbar ${showNavbar ? "show" : "hide"}`}
      ref={navRef}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="upper-header">
        <div className="uh-left">
          <a href="/">MEHHA</a>
          <a href="/mes-arg-plast">Mes-Arg Plast</a>
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

      <div className="container" onClick={(e) => e.stopPropagation()}>
        <a href="/">
          <img src={logoToShow} alt="MEHHA Logo" className="logo" />
        </a>

        {/* Hamburger — keep it on top via CSS z-index */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          ref={hamburgerRef}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          role="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/industry">Companies & Shares</Link></li>

          <li className={`dropdown ${openDropdown === "trades" ? "open" : ""}`}>
            {/* Use a button-like span for mobile tap */}
            <span
              className="dropbtn"
              onClick={(e) => toggleDropdown("trades", e)}
              role="button"
              aria-expanded={openDropdown === "trades"}
            >
              International Trades ▾
            </span>

            <ul className={`dropdown-content ${openDropdown === "trades" ? "open" : ""}`}>
              <li onClick={closeMenu}><Link to="/exports">Exports</Link></li>
              <li onClick={closeMenu}><Link to="/imports">Imports</Link></li>
            </ul>
          </li>

          <li onClick={closeMenu}><Link to="/News">What's New?</Link></li>
          <li onClick={closeMenu}><Link to="/about">About</Link></li>
          <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
