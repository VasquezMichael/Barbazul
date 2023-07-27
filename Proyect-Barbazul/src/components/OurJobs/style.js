import styled from "styled-components";

export const Section = styled.section`
  background-color: #0f0f0f;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 50px;
  /* Primera opcion
  @media screen and (min-width: 690px) {
    padding: 60px;
    display: flex;
  } */

  @media screen and (min-width: 690px) {
    padding: 60px;
  }

  @media screen and (min-width: 1660px) {
    padding: 100px 200px 100px 200px;
  }
`;
