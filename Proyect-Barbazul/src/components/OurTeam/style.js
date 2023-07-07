import styled from "styled-components";

export const SectionTeam = styled.section`
  width: 100%;
  /* text-align: center; */
  padding: 20px;
`;

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 690px) {
    flex-direction: row;
    padding: 40px;
  }

  @media screen and (min-width: 1660px) {
    padding: 100px 200px 100px 200px;
  }
`;
