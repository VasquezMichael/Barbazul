import styled from "styled-components";

export const SectionServices = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 20px;

  @media screen and (min-width: 690px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    height: 450px;
  }
  @media screen and (min-width: 1660px) {
    padding: 100px 200px 100px 200px;
  }
`;
