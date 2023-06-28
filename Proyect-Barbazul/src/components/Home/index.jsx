import React from "react";
import Hero from "../Hero";
import AboutUsWithCarrousel from "../AboutUs-Carrousel";
import { Home } from "./style.js";
import OurServices from "../OurServices";
const HomePage = () => {
  return (
    <Home>
      <Hero />
      <AboutUsWithCarrousel />
      <OurServices />
    </Home>
  );
};

export default HomePage;
