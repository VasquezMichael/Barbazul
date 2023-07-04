import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #0f0f0f;
  padding: 20px;
  @media screen and (min-width: 690px) {
    display: flex;
    justify-content: center;
    padding: 50px;
    align-items: center;
    height: 550px;
  }

  @media screen and (min-width: 1660px) {
    padding: 100px 200px 100px 200px;
  }
`;
