import React from "react";
import HeroPage from "./sections/HeroPage";
import AboutPage from "./sections/AboutPage";
import ExperiencePage from "./sections/ExperiencePage";
import ProjectsPage from "./sections/ProjectsPage";
import SkillsPage from "./sections/SkillsPage";
import ContactPage from "./sections/ContactPage";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </div>
  );
};

export default Home;
