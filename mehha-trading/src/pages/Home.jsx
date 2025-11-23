import React from "react";
import "./home.css";
import HeroSection from "../components/Hero.jsx"; // capitalized component
import List from '../components/list.jsx';
import VisionSection from '../components/VisionSection.jsx'
import MissionSection from "../components/MissionSection.jsx";
import ShuffleSection from "../components/ShuffleSection.jsx";
import ListingSec from '../components/listing-sec.jsx';
import TextSlider from "../components/TextSlider";
import SecondSection from "../components/secondSection.jsx";
import WhyChooseMehha from "../components/WhyChooseMehha.jsx";


const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TextSlider />
      <SecondSection />
      <WhyChooseMehha />
      {/* <ShuffleSection /> */}
      {/* <List /> */}
      <VisionSection />
      <MissionSection />
    </div>
  );
};

export default Home;
