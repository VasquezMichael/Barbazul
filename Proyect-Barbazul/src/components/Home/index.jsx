import React from "react";
import Hero from "../Hero";
import AboutUsWithCarrousel from "../AboutUs-Carrousel";
import { Home } from "./style.js";
import OurServices from "../OurServices";
import OurTeam from "../OurTeam";
import OurJobs from "../OurJobs";
const HomePage = () => {
  return (
    <Home>
      <Hero />
      <AboutUsWithCarrousel />
      <OurServices />
      <OurTeam />
      <OurJobs />
    </Home>
  );
};

export default HomePage;
