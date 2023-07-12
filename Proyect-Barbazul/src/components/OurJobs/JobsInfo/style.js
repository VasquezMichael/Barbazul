import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Newsreader;

  @media screen and (min-width: 690px) {
    margin-bottom: 50px;
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Tittle = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fdcd52;
  width: 50%;
  margin-bottom: 25px;
  @media screen and (min-width: 690px) {
    font-size: 2.5rem;
  }
`;
