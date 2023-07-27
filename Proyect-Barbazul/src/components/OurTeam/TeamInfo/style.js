import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Newsreader;
  margin-bottom: 25px;
  h2 {
    font-size: 2rem;
    border-bottom: 1px solid #fdcd52;
    width: 50%;
    margin-bottom: 25px;
  }
  p {
    line-height: 25px;
    font-size: 17px;
  }
  button {
    border: 1px solid #fff;
    padding: 5px;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    transition: all 0.6s ease;
    margin-top: 15px;
    width: 32%;
    :hover {
      background-color: #fdcd52;
      color: #000;
    }
  }
  @media screen and (min-width: 690px) {
    margin-right: 40px;
    button {
      width: 20%;
    }
  }
`;
