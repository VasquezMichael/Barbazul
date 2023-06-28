import React from "react";
import Services from "./Services";
import Description from "./Description";
import { SectionServices } from "./style.js";
const OurServices = () => {
  return (
    <SectionServices>
      <Description />
      <Services />;
    </SectionServices>
  );
};

export default OurServices;
