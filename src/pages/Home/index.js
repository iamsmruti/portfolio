import React from "react";
import HelloText from "../../components/HelloText";
import HeroPage from "./sections/HeroPage";
import AboutPage from "./sections/AboutPage";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
    </div>
  );
};

export default Home;
