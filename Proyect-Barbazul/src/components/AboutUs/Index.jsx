import React from "react";
import {
  ContainerAboutUs,
  Title,
  TitleAboutUs,
  Parragraf,
  ContainerButtons,
} from "./style";
const AboutUs = () => {
  return (
    <ContainerAboutUs>
      <Title>BARBERIA</Title>
      <TitleAboutUs>Barberia nos acompaña desde el año 2010</TitleAboutUs>
      <Parragraf>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        neque cumque labore facilis doloremque dolorum accusamus blanditiis fuga
        ut, placeat tenetur dolorem unde doloribus deserunt ipsam illo beatae
        quis fugiat.
      </Parragraf>
      <Parragraf>
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      </Parragraf>
      <ContainerButtons>
        <button className="Btn-servicios">Nuestros servicios</button>
        <button className="Btn-barberos">Nuestros barberos</button>
      </ContainerButtons>
    </ContainerAboutUs>
  );
};

export default AboutUs;
