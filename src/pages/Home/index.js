import React from "react";
import HelloText from "../../components/HelloText";
import HeroPage from "./sections/HeroPage";
import AboutPage from "./sections/AboutPage";
import ExperiencePage from "./sections/ExperiencePage";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
    </div>
  );
};

export default Home;
