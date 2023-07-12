import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  .Swiper-Container {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  .Swiper-img-container {
    width: 60%;
    height: 300px;
    padding: 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  .slider-controler .slider-arrow::after {
    color: #fdcd52;
    opacity: 0.8;
    font-size: 2rem;
  }
  .slider-arrow {
    transition: transform 0.3s ease;
    :hover {
      transform: scale(1.2);
    }
  }

  /* Primera opcion 
  @media screen and (min-width: 690px) {
    margin-top: 0px;

    .Swiper-img-container {
      height: 400px;
    }
  } */

  @media screen and (min-width: 690px) {
    margin-top: 0px;

    .Swiper-img-container {
      width: 35%;
      height: 400px;
    }
  }
`;
