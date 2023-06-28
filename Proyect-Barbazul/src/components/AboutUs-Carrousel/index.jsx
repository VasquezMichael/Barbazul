import React from "react";
import AboutUs from "../AboutUs";
import Carrousel from "../Carrousel";
import { Container } from "./style";
const AboutUsWithCarrousel = () => {
  return (
    <Container>
      <Carrousel />
      <AboutUs />
    </Container>
  );
};

export default AboutUsWithCarrousel;
