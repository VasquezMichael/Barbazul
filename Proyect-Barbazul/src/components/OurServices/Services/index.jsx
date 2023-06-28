import React from "react";
import { ContainerServices } from "./style";

import { RxScissors } from "react-icons/rx";
import { TbMoustache } from "react-icons/tb";
import { GiRazor } from "react-icons/gi";
const Services = () => {
  return (
    <ContainerServices>
      <ul>
        <li>
          <div className="icon">
            <RxScissors />
          </div>
          <div className="description">
            <h3>Corte de cabello</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae deleniti
            </p>
          </div>
        </li>
        <li>
          <div className="icon">
            <TbMoustache />
          </div>
          <div className="description">
            <h3>Arreglo de barba</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae deleniti
            </p>
          </div>
        </li>
        <li>
          <div className="icon">
            <GiRazor />
          </div>
          <div className="description">
            <h3>Perfilado de cejas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae deleniti
            </p>
          </div>
        </li>
        {/* <li>
          <div className="icon">
            <RxScissors />
          </div>
          <div className="description">
            <h3>Rapado</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae deleniti
            </p>
          </div>
        </li> */}
      </ul>
    </ContainerServices>
  );
};

export default Services;
