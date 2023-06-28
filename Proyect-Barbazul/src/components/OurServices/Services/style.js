import styled from "styled-components";

export const ContainerServices = styled.div`
  font-family: Newsreader;
  li {
    list-style: none;
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .icon {
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    font-size: 25px;
    border-radius: 50%;
    border: 1.3px solid #fdcd52;
    margin: 0 15px 0px 0px;
  }

  .description {
    height: 100%;

    h3 {
      font-size: 1.3rem;
    }
    p {
      color: #8d8d8d;
      line-height: 1.3;
    }
  }
`;
