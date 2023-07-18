import React from "react";
import { Container } from "./style";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Icons = () => {
  return (
    <Container>
      <div className="lineLeft"></div>
      <div className="container-icons">
        <AiFillFacebook className="icon" />
        <AiFillInstagram className="icon" />
        <AiOutlineWhatsApp className="icon" />
      </div>
      <div className="lineRight"></div>
    </Container>
  );
};
