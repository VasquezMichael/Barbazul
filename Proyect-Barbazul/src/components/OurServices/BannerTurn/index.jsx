import React from "react";
import { BannerContainer } from "./style";
import { BsCalendar2Plus } from "react-icons/bs";
const BannerTurn = () => {
  return (
    <BannerContainer>
      <div className="Text">
        <div className="Text_turn">
          <BsCalendar2Plus />
          <h2>
            RESERVÁ TU TURNO
            <span> ONLINE</span>
          </h2>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit rem
          doloribus laudantium officia voluptates nulla sequi explicabo
        </p>
      </div>

      <div className="Btn">
        <button>RESERVAR TURNO</button>
      </div>
    </BannerContainer>
  );
};

export default BannerTurn;
