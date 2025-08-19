import React from "react";
import "./home.css";
import HeroSection from "../components/Hero.jsx"; // capitalized component
import List from '../components/list.jsx';
import VisionSection from '../components/VisionSection.jsx'
import MissionSection from "../components/MissionSection.jsx";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      {/* <List /> */}
      <VisionSection />
      <MissionSection />
    </div>
  );
};

export default Home;
