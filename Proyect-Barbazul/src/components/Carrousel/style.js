import styled from "styled-components";

export const ContainerCarrousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: #0f0f0f;
  @media screen and (min-width: 690px) {
    width: 80%;
    height: 432px;
  }
`;

export const ContainerImg = styled.div`
  height: 300px;
  width: 100%;
  @media screen and (min-width: 690px) {
    flex-grow: 1;
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

export const ContainerButton = styled.div`
  position: relative;
  top: -15px;
  button {
    margin: 0 5px;
    color: #fff;
    font-weight: bold;
    :hover {
      color: #fdcd52;
    }
  }
`;
