import { Link } from "react-router-dom";
import "../App.css";
import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/">
          <img src={logo} alt="MEHHA Logo" className="logo" />
        </a>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          
          {/* Dropdown */}
          <li className="dropdown">
            <span className="dropbtn">Companies & Shares ▾</span>
            <ul className="dropdown-content">
              <li><Link to="/industries">Industries</Link></li>
              <hr />
              <li><Link to="/f&b">Food & Beverages</Link></li>
              <hr />
              <li><Link to="/education&services">Education Services</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="dropbtn">International Trades ▾</span>
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
