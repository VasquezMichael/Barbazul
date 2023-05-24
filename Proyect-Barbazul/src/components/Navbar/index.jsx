import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  LogoContainer,
  MobileIcon,
} from "./style.js";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaBars, FaTimes } from "react-icons/fa";
import "./Link.css";
import { useState } from "react";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <FaEarlybirds />
          <p>Barbazul</p>
        </LogoContainer>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Link className="Link" to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Link className="Link" to="/">
              Staff
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Link className="Link" to="/">
              Galeria
            </Link>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Link className="Link" to="/">
              Contacto
            </Link>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
