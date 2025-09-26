import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <div className='about'>
      {/* Page Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        About Us
      </motion.h1>

      {/* Founder Section */}
      <motion.div
        className='a-sections'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3>Mesfin Argaw - The Founder</h3>
        <div className='a-info'>
          <motion.div variants={fadeInUp}>
            <p>
              Mesfin Argaw, born on June 19, 1978, in Addis Ababa, Ethiopia, is a seasoned entrepreneur with over 30 years of experience in the business sector. His entrepreneurial journey began at a young age, managing his father Argaw Demeke’s retail business. Through his leadership, he successfully guided the family business out of debt and strengthened its operations, laying the foundation for future ventures.
            </p>
            <p>
              Building on his early successes in retail, Mesfin expanded into the wholesale sector and, after years of experience as a distributor, established his own factory, Mes-Arg Plastic Shoe & Raw Materials.
            </p>
            <p>
              In 2017, alongside his supportive wife Tirsit Getachew, Mesfin founded MEHHA Trading PLC. The name MEHHA reflects his core values: Family, Unity, and Growth. Each letter represents the initials of his siblings, symbolizing the importance of family in both his personal and professional life. Under his vision, MEHHA Trading PLC continues to grow, fostering a culture of collaboration, innovation, and excellence.
            </p>
          </motion.div>

          <motion.img
            src=""
            alt="the founder mesfin argaw"
            variants={fadeInUp}
          />
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className='a-sections'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3>Education Background</h3>
        <div className='a-info'>
          <motion.div variants={fadeInUp}>
            <p>
              Mesfin Argaw attended General Wingate School (a national public school in Ethiopia) and completed his diploma in Electricity in 1999. Learning and working at the same time helped him gain time management skills, a deep understanding of trade, business management, and market dynamics.
            </p>
            <p>
              Tirsit Getachew, the Deputy Manager of MEHHA Trading PLC, also attended General Wingate School and holds a diploma in Secretarial Science and Office Management obtained in 1999. Her leadership and administrative skills play a vital role in the company’s operational efficiency.
            </p>
          </motion.div>

          <motion.img
            src=""
            alt="Education background"
            variants={fadeInUp}
          />
        </div>
      </motion.div>

      {/* About Company Section */}
      <motion.div
        className='a-sections'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3>About MEHHA Trading PLC</h3>
        <div className='a-info'>
          <motion.div variants={fadeInUp}>
            <p>
              Founded in 2017, MEHHA Trading PLC is a diversified company engaged in import, wholesale, and manufacturing. Over the years, MEHHA has built a strong reputation in Ethiopia’s business sector, particularly in the trade and supply of chemical and allied products.
            </p>

            <p>The company specializes in:</p>
            <ul>
              <li>Importing and wholesaling chemical raw materials</li>
              <li>Resin, synthetic fibers, and filament manufacturing</li>
              <li>Non-durable goods and wholesale trade</li>
              <li>Plastic materials and basic shapes</li>
              <li>Polyvinyl chloride (PVC) resins</li>
            </ul>

            <p>
              Driven by a commitment to quality, reliability, and growth, MEHHA Trading PLC continues to strengthen its position as a trusted supplier and manufacturing partner, serving a wide range of industries and contributing to Ethiopia’s economic development.
            </p>

            <p>
              Beyond MEHHA Trading PLC, the company’s shareholders are actively engaged in other business ventures, particularly in the real estate sector. Their portfolio includes:
            </p>

            <ul>
              <li>
                A B+G+5 mixed-use building in Nifas Silk Lafto, featuring 12 modern apartment units and commercial rental spaces.
              </li>
              <li>
                A 3B+G+14 high-rise development under Yegemiya Trading PLC, comprising residential apartments and commercial facilities.
              </li>
            </ul>

            <p>
              These projects reflect the shareholders’ commitment to long-term investment, economic growth, and sustainable urban development in Ethiopia.
            </p>

            <p>
              At its core, MEHHA Trading PLC is built on the values of family, unity, and growth. With a strong foundation in trade, manufacturing, and diversified investments, the company continues to expand its presence across multiple sectors. Guided by visionary leadership and driven by a commitment to quality and innovation, MEHHA strives to create lasting value for its customers, partners, and the wider community—while contributing to the sustainable development of Ethiopia’s economy.
            </p>
          </motion.div>

          <motion.img
            src="./Main.png"
            alt="About MEHHA Trading PLC"
            variants={fadeInUp}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
