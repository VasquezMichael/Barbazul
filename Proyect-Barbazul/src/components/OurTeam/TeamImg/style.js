import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  @media screen and (min-width: 690px) {
    width: 60%;
    font-size: 1rem;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 450px;
  background-color: #f9faff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
  }
`;
