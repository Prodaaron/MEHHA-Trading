import React, { useState } from "react";
import { db } from "../services/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./footer.css";

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
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
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
    </footer>
  );
};

export default Footer;