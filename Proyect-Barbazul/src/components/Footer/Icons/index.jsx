import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
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
        <Link to="https://www.linkedin.com/feed/" target="_blank">
          <AiFillFacebook className="icon" />
        </Link>
        <Link to="https://www.instagram.com/__michaelsteven/" target="_blank">
          <AiFillInstagram className="icon" />
        </Link>
        <Link to="https://wa.link/xacqvq" target="_blank">
          <AiOutlineWhatsApp className="icon" />
        </Link>
      </div>
      <div className="lineRight"></div>
    </Container>
  );
};
