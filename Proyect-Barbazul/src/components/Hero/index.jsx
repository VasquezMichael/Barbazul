import { Container, Title, Button } from "./style.js";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <Container className="Hero">
        <Title>Since 2010.</Title>
        <Button>
          <Link to="https://wa.link/xacqvq" target="_blank">
            RESERVA TU TURNO
          </Link>
        </Button>
      </Container>
    </>
  );
};

export default Hero;
