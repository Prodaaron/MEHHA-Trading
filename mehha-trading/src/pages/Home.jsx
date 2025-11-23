import React from "react";
import "./home.css";
import HeroSection from "../components/Hero.jsx"; // capitalized component
import List from '../components/list.jsx';
import VisionSection from '../components/VisionSection.jsx'
import MissionSection from "../components/MissionSection.jsx";
import ShuffleSection from "../components/ShuffleSection.jsx";
import ListingSec from '../components/listing-sec.jsx';
import TextSlider from "../components/TextSlider";


const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TextSlider />
      <ListingSec />
      <ShuffleSection />
      {/* <List /> */}
      <VisionSection />
      <MissionSection />
    </div>
  );
};

export default Home;
