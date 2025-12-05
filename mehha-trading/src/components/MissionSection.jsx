import React from "react";
import { motion } from "framer-motion";
import "./msec.css";

import secImage from "../assets/Ai-mission-2.png";
import pro from "../assets/give-heart.svg";
import prod from "../assets/give-gift-svgrepo-com.svg";
import dev from "../assets/growth-report-graph-svgrepo-com.svg";

// Reusable animation
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const MissionSection = () => {
  return (
    <section className="about-section mission">
      {/* LEFT TEXT */}
      <motion.div
        className="about-text wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn}>Our Mission</motion.h2>

        <motion.p variants={fadeIn}>
          MEHHA Trading PLC is committed to driving sustainable economic growth
          while delivering exceptional value to customers at home and abroad.
        </motion.p>

        <motion.ul variants={fadeIn} className="mission-list">
          <li>
            <img src={pro} alt="mission icon" />
            <span>
              Provide high-quality agricultural and industrial products to
              international and local markets.
            </span>
          </li>

          <li>
            <img src={prod} alt="mission icon" />
            <span>
              Leverage our diverse business expertise to create meaningful value
              for customers.
            </span>
          </li>

          <li>
            <img src={dev} alt="mission icon" />
            <span>
              Promote sustainable development and contribute to Ethiopia’s
              growing economy.
            </span>
          </li>
        </motion.ul>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src={secImage} alt="Mission Illustration" />
      </motion.div>
    </section>
  );
};

export default MissionSection;
