import styled from "styled-components";

export const ContainerCarrousel = styled.div`
  width: 100%;
  height: 350px;
  background-color: #0f0f0f;
  position: relative;
  display: flex;
`;

export const ContainerButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  bottom: 25px;

  button {
    margin: 0 5px;
    color: #fff;
    font-weight: bold;

    :hover {
      color: #fdcd52;
    }
  }
`;

export const CarrouselImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 0;
  transition: 1s;

  &.loaded {
    opacity: 1;
  }
`;
