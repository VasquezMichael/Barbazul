import { Container } from "./style";
import { Link } from "react-router-dom";
const TeamInfo = () => {
  return (
    <Container>
      <h2>Equipo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate
        laudantium repellat sequi! A sequi quas quaerat aspernatur similique ut
        laborum hic at deserunt, mollitia repellat alias? Impedit, nisi veniam!
      </p>
      <Link to="https://wa.link/xacqvq" target="_blank">
        <button>Contactanos</button>
      </Link>
    </Container>
  );
};

export default TeamInfo;
