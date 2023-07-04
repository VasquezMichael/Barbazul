import React from "react";
import Services from "./Services";
import Description from "./Description";
import { SectionServices } from "./style.js";
import BannerTurn from "./BannerTurn";
const OurServices = () => {
  return (
    <>
      <SectionServices>
        <Description />
        <Services />
      </SectionServices>
      <BannerTurn />
    </>
  );
};

export default OurServices;
