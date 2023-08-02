import styled from "styled-components";

export const ContainerAboutUs = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  font-family: Newsreader;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 690px) {
    width: 80%;
    height: 100%;
    justify-content: space-evenly;
    margin-left: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  border-bottom: 1px solid #fdcd52;
  width: 50%;
  margin-bottom: 25px;
`;
export const TitleAboutUs = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 5px;
`;
export const Parragraf = styled.p`
  line-height: 130%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;

  button {
    border: 1px solid #fff;
    padding: 5px;
    margin-right: 10px;
    width: 150px;
    font-size: 17.5px;
  }
  .Btn-servicios {
    background-color: #fdcd52;
    opacity: 0.8;
    color: #000;
    transition: opacity 0.5s ease;
    :hover {
      opacity: 1;
    }
  }
  .Btn-barberos {
    transition: all 0.5s ease;

    :hover {
      background-color: #000;
    }
  }
`;
