import React from "react";
import { Container } from "./style";
import logo from "../../../assets/logo.png";
const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="" className="img" />
    </Container>
  );
};

export default Logo;
