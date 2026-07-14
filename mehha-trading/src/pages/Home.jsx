import React from "react";
import "./home.css";
import HeroSection from "../components/Hero.jsx";
import TextSlider from "../components/textSlider.jsx";
import SecondSection from "../components/secondSection.jsx";
import ImportInfo from "../components/ImportInfo.jsx";
import WhyChooseMehha from "../components/WhyChooseMehha.jsx";
import ExportInfo from "../components/ExportInfo.jsx";
import PartnershipForm from "../components/PartnershipForm.jsx";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TextSlider />
      <SecondSection />
      <ImportInfo />
      <WhyChooseMehha />
      <ExportInfo />
      <PartnershipForm />
    </div>
  );
};

export default Home;
