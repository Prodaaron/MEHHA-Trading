import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/">
          <img src={logo} alt="MEHHA Logo" className="logo" />
        </a>

        {/* Hamburger button */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>

          {/* Dropdown 1 */}
          <li className={`dropdown ${openDropdown === "companies" ? "open" : ""}`}>
            <span className="dropbtn" onClick={() => toggleDropdown("companies")}>
              Companies & Shares ▾
            </span>
            <ul className="dropdown-content">
              <li><Link to="/industries">Industries</Link></li>
              <hr />
              <li><Link to="/f&b">Food & Beverages</Link></li>
              <hr />
              <li><Link to="/education&services">Education Services</Link></li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className={`dropdown ${openDropdown === "trades" ? "open" : ""}`}>
            <span className="dropbtn" onClick={() => toggleDropdown("trades")}>
              International Trades ▾
            </span>
            <ul className="dropdown-content">
              <li><Link to="/exports">Exports</Link></li>
              <hr />
              <li><Link to="/imports">Imports</Link></li>
            </ul>
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}