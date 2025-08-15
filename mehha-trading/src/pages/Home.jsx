import React from "react";
import "./home.css";
import HeroSection from "../components/Hero.jsx"; // capitalized component

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
    </div>
  );
};

export default Home;
