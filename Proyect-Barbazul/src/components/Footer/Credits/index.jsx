import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
const Credits = () => {
  return (
    <Container>
      <Link to="https://www.linkedin.com/feed/" target="_blank">
        <p>Diseñado y programado por Vasquez Michael</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          voluptatem fuga quis qui est recusandae quidem distinctio nesciunt
          numquam repellat ea modi corporis iusto similique enim reiciendis!
          Laudantium, dicta repellendus?
        </p>
      </Link>
    </Container>
  );
};

export default Credits;
