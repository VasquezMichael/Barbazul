import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  background-color: #0f0f0f;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: Newsreader;
  padding: 10px;
  .Text {
    width: 100%;
    .Text_turn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 20px;
      }
      span {
        color: #fdcd52;
      }
      svg {
        font-size: 25px;
        margin-right: 10px;
      }
    }
  }

  p {
    display: none;
  }

  button {
    border: 1px solid #fff;
    padding: 5px;
    font-size: 17.5px;
    background-color: #fdcd52;
    opacity: 0.8;
    color: #000;
    transition: opacity 0.5s ease;
    :hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: 690px) {
    flex-direction: row;
    justify-content: space-evenly;
    p {
      margin-top: 10px;
      display: block;
    }
    .Text {
      width: 50%;
      .Text_turn {
        justify-content: flex-start;
        h2 {
          font-size: 25px;
        }
        svg {
          font-size: 32px;
        }
      }
    }
    button {
      width: 200px;
    }
  }
`;
