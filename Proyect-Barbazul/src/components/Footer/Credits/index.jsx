import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
const Credits = () => {
  return (
    <Container>
      <Link to="https://www.linkedin.com/feed/" target="_blank">
        <p>Diseñado y programado por Vasquez Michael</p>
      </Link>
    </Container>
  );
};

export default Credits;
