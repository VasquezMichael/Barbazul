import styled from "styled-components";
import hero from "../../assets/hero2.jpg";
import img1 from "../../assets/two-image1.jpg";
import img2 from "../../assets/two-image2.jpg";
import img3 from "../../assets/two-image3.jpg";
export const Container = styled.div`
  display: flex;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  width: 100%;
  height: 100vh;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: Newsreader;
  color: #fdcd52;
  margin-top: 10px;
  transition: all ease 0.5s;
  @media screen and (min-width: 690px) {
    font-size: 4rem;
  }
`;

export const Button = styled.button`
  background-color: #0f0f0f;
  padding: 15px;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  font-family: Newsreader;
  transition: all ease 0.5s;

  :hover {
    color: #fdcd52;
  }
  @media screen and (min-width: 690px) {
    width: 200px;
    font-size: 1rem;
  }
`;
