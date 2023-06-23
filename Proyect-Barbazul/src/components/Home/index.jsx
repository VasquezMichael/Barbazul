import React from "react";
import Hero from "../Hero";
import Carrousel from "../Carrousel";
import CarrouselWithPrices from "../CarrouselWithPrices";
import AboutUs from "../AboutUs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Carrousel />
      <AboutUs />
      {/* <CarrouselWithPrices /> */}
    </>
  );
};

export default HomePage;
