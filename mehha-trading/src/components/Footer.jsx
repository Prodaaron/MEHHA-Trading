import React, { useState } from "react";
import { db } from "../services/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./footer.css";
import emailIcon from '../assets/email-svgrepo-com.svg';
import instaIcon from '../assets/instagram-svgrepo-com.svg';
import tiktokIcon from '../assets/tiktok-svgrepo-com.svg';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletterSubscribers"), formData);
      alert("Subscribed successfully!");
      setFormData({ firstName: "", lastName: "", email: "" });
    } catch (error) {
      console.error("Error adding subscriber: ", error);
      alert("Failed to subscribe. Try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/exports">Exports</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About us</a></li>
          </ul>
          <div>
            <h4>Contact Us</h4>
            <a className="email" href="mailto:mehha.trading@gmail.com"> <img className='social-icons' src={emailIcon} alt="" />mehha.trading@gmail.com</a>
            {/* <div className="social-links">
              <a href="">
                <img className='social-icons' src={instaIcon} alt="" />
              </a>
              <a href="">
                <img className='social-icons' src={tiktokIcon} alt="" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <input
            className="firstname"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
            className="lastname"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MEHHA Trading PLC. All rights reserved.</p>
      </div>

      {/* Wave Animation */}
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,140 900,-40 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
        <svg className="wave second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,-20 900,180 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
        <svg className="wave third" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,30 C300,110 900,-50 1200,70 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;