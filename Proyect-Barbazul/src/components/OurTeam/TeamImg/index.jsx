import React from "react";
import img from "../../../assets/teamBarber.jpg";
import { Container, ContainerImg } from "./style";
const TeamImage = () => {
  return (
    <Container>
      <ContainerImg>
        <img src={img} alt="" />
      </ContainerImg>
    </Container>
  );
};

export default TeamImage;
