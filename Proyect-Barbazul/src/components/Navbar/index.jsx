import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  LogoContainer,
  MobileIcon,
} from "./style.js";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaBars } from "react-icons/fa";
import "./Link.css";
import React from "react";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <FaEarlybirds />
          <p>Barbazul</p>
        </LogoContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <Menu>
          <MenuItem>
            <Link className="Link" to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="Link" to="/">
              Staff
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="Link" to="/">
              Galeria
            </Link>
          </MenuItem>
          <MenuItem>
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
