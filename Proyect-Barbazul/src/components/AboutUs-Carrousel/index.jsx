import Carrousel from "../Carrousel";
import AboutUs from "../About-us";
import { Container } from "./style";
const AboutUsWithCarrousel = () => {
  return (
    <Container>
      <div className="contenedor"></div>
      <AboutUs />
      <Carrousel />
    </Container>
  );
};

export default AboutUsWithCarrousel;
