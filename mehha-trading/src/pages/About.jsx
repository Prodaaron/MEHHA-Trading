import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import founderImg from '../assets/the-founder-img-25v.jpg';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import AboutMehhaImg from '../assets/ta-img-25v.jpg'

// Reusable animations
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <div className="about-page">

      {/* ===========================
        HERO SECTION
      ============================ */}
      <motion.section
        className="about-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={fadeIn}>
          About <span>MEHHA Trading PLC</span>
        </motion.h1>

        <motion.p variants={fadeIn}>
          A trusted Ethiopian trading and manufacturing company built on unity,
          integrity, and sustainable growth.
        </motion.p>
      </motion.section>


      {/* ===========================
        FOUNDER SECTION
      ============================ */}
      <section className="about-section founder">
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn}>The Founder</motion.h2>

          <motion.p variants={fadeIn}>
            Mesfin Argaw, born on June 19, 1978 in Addis Ababa, is an entrepreneur
            with over 30 years of experience. Starting from a humble retail shop
            owned by his father, he transformed challenges into growth—leading the
            business from debt to stability and expansion.
          </motion.p>

          <motion.p variants={fadeIn}>
            His leadership journey evolved from retail to wholesale, and later into
            manufacturing with *Mes-Arg Plastic Shoe & Raw Materials*, before
            eventually founding MEHHA Trading PLC in 2017.
          </motion.p>

          <motion.p variants={fadeIn}>
            The name MEHHA represents family unity—each letter symbolizing the
            initials of his siblings. This philosophy continues to guide the company
            culture today.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={founderImg} alt="Founder of MEHHA" />
        </motion.div>
      </section>



      {/* ===========================
        COMPANY OVERVIEW SECTION
      ============================ */}
      <section className="about-section company">
        <motion.div
          className="about-text wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn}>About MEHHA Trading PLC</motion.h2>

          <motion.p variants={fadeIn}>
            Founded in 2017, MEHHA Trading PLC specializes in import, wholesale, and
            manufacturing—primarily focusing on chemical raw materials, PVC resins,
            synthetic fibers, and allied products.
          </motion.p>

          <motion.ul variants={fadeIn} className="service-list">
            <li>✔ Import & wholesale of chemical raw materials</li>
            <li>✔ Resin & synthetic fiber manufacturing</li>
            <li>✔ Supply of plastic materials & basic industrial shapes</li>
            <li>✔ Non-durable goods wholesale trade</li>
          </motion.ul>

          <motion.p variants={fadeIn}>
            The company also expands into real estate, including B+G+5 residential
            property known as Tirsit Apartment
          </motion.p>

          <motion.p variants={fadeIn}>
            MEHHA is built on the core values of unity, integrity, and sustainable
            growth — driving forward a vision to become one of Ethiopia’s leading
            trading and manufacturing enterprises.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={AboutMehhaImg} alt="MEHHA Building" />
        </motion.div>
      </section>
        
        <VisionSection />
        <MissionSection />
    </div>
  );
};

export default About;