import React, { useEffect } from "react";
import "./Contact.css";
import instaIcon from '../assets/instagram-svgrepo-com.svg';
import tiktokIcon from '../assets/tiktok-svgrepo-com.svg';
import facebook from '../assets/facebook-svgrepo-com.svg';
import WeChat from '../assets/wechat-id.jpg'

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="contact-section fade-bg">
      <div className="contact-inner fade-up">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          We're always open for communication, partnerships, and collaboration.
        </p>

        {/* Social Media Section */}
        <div className="contact-social fade-up">
          <h3 className="contact-social-title">Social Media</h3>

          <div className="contact-social-wrapper">
            <a href="https://web.facebook.com/mehha.trading/" target="_blank">
              <img
                src={facebook}
                alt="Facebook"
                className="contact-icon"
              />
            </a>

            <a href="https://www.instagram.com/mehha.trading/" target="_blank">
              <img
                src={instaIcon}
                alt="Instagram"
                className="contact-icon"
              />
            </a>

            <a href="https://www.tiktok.com/@mehha.trading" target="_blank">
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="contact-icon"
              />
            </a>
          </div>
        </div>

        {/* Email Section */}
        <div className="contact-email fade-up">
          <h3>Email Us</h3>
          <p>Send us an email anytime and we’ll get back to you shortly.</p>

          <a href="mailto:mehha.trading@gmail.com" className="contact-email-link">
            mehha.trading@gmail.com
          </a>
        </div>

        {/* WeChat Section */}
        <div className="contact-wechat fade-up">
          <h3>WeChat</h3>
          <p>Scan the QR code below to connect with us directly.</p>

          <div className="wechat-qr-box">
            <img
              src={WeChat}
              className="wechat-qr-img"
              alt="WeChat QR Code"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;