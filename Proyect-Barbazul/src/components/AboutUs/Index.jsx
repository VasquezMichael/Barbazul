import React from "react";
import {
  ContainerAboutUs,
  Title,
  TitleAboutUs,
  Parragraf,
  ContainerButtons,
} from "./style";

import { Link } from "react-scroll";
const AboutUs = () => {
  return (
    <ContainerAboutUs>
      <Title>BARBERIA</Title>
      <TitleAboutUs>Barberia nos acompaña desde el año 2010</TitleAboutUs>
      <Parragraf>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut, dicta
        unde, placeat at magni tempora possimus voluptatibus odio inventore
        incidunt nulla eligendi soluta deserunt nobis quae eius? Enim, autem.
      </Parragraf>
      <Parragraf>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut, dicta
        unde, placeat at magni tempora possimus voluptatibus odio inventore
        incidunt nulla eligendi soluta deserunt nobis quae eius? Enim, autem.
      </Parragraf>

      <Parragraf>
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      </Parragraf>
      <ContainerButtons>
        <button className="Btn-servicios">
          <Link
            activeClass="active"
            to="servicios"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Nuestros servicios
          </Link>
        </button>
        <button className="Btn-barberos">
          <Link
            activeClass="active"
            to="our-team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Nuestros barberos
          </Link>
        </button>
      </ContainerButtons>
    </ContainerAboutUs>
  );
};

export default AboutUs;
