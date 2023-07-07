import React from "react";
import Hero from "../Hero";
import AboutUsWithCarrousel from "../AboutUs-Carrousel";
import { Home } from "./style.js";
import OurServices from "../OurServices";
import OurTeam from "../OurTeam";
const HomePage = () => {
  return (
    <Home>
      <Hero />
      <AboutUsWithCarrousel />
      <OurServices />
      <OurTeam />
    </Home>
  );
};

export default HomePage;
