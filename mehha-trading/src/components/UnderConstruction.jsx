import React from "react";
import { motion } from "framer-motion";
import { Cone, HardHat, Wrench, Clock } from "lucide-react";
import "./under.css";

export default function UnderConstruction({
  title = "We're building this page",
  subtitle = "This page is under construction. Please check back soon.",
  contact = "Contact support",
  contactHref = "mailto:hello@example.com",
  showBack = true,
  backText = "Back to home",
  onBack = null,
}) {
  return (
    <div className="uc-wrapper">
      <div className="uc-card">
        {/* Accent bar */}
        <div className="uc-accent" />

        <div className="uc-content">
          {/* Icon cluster */}
          <div className="uc-icons">
            <motion.div
              className="uc-icon-box primary"
              animate={{ rotate: [0, -6, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <HardHat />
            </motion.div>
            <motion.div
              className="uc-icon-box secondary"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wrench />
            </motion.div>
            <motion.div
              className="uc-icon-box alternate"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cone />
            </motion.div>
          </div>

          {/* Headings */}
          <h1 className="uc-title">{title}</h1>
          <p className="uc-subtitle">{subtitle}</p>

          {/* Status pill */}
          <div className="uc-status">
            <Clock className="uc-status-icon" />
            <span>Estimated completion: soon</span>
          </div>

          {/* Actions */}
          <div className="uc-actions">
            {showBack && (
              <button
                onClick={onBack ?? (() => (window.location.href = "/"))}
                className="uc-btn primary"
              >
                {backText}
              </button>
            )}

            <a href={contactHref} className="uc-btn outline">
              {contact}
            </a>
          </div>
        </div>
      </div>

      {/* Subtle footer note */}
      <div className="uc-footer">
        <span>
          Need this live sooner? <a href={contactHref}>Get in touch</a>.
        </span>
      </div>
    </div>
  );
}