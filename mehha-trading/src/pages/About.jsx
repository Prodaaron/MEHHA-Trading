import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import founderImg from '../assets/the-founder-img-25v.jpg';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import AboutMehhaImg from '../assets/ta-img-25v.jpg'
import OurOffice from "../components/ourOffice";

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
            Mesfin Argaw, born on June 19, 1978, in Addis Ababa, Ethiopia, is a seasoned entrepreneur with over 30 years of experience in the business sector. His entrepreneurial journey began at a young age, managing his father Argaw Demeke’s retail business. Through his leadership, he successfully guided the family business out of debt and strengthened its operations, laying the foundation for future ventures.
          </motion.p>

          <motion.p variants={fadeIn}>
            Building on his early successes in retail, Mesfin expanded into the wholesale sector and, after years of experience as a distributor, established his own factory, Mes-Arg Plastic Shoe & Raw Materials.
          </motion.p>

          <motion.p variants={fadeIn}>
            In 2017, alongside his supportive wife Tirsit Getachew, Mesfin founded MEHHA Trading PLC. The name MEHHA reflects his core values: Family, Unity, and Growth. Each letter represents the initials of his siblings, symbolizing the importance of family in both his personal and professional life. Under his vision, MEHHA Trading PLC continues to grow, fostering a culture of collaboration, innovation, and excellence.
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
        <motion.div 
        className="our-office"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        >
          <OurOffice />
        </motion.div>
        
    </div>
  );
};

export default About;