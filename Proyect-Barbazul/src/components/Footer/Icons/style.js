import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  .container-icons {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-evenly;
  }
  .lineLeft {
    flex-grow: 1;
    height: 1px;
    background-color: #fdcd52;
  }

  .lineRight {
    flex-grow: 1;
    height: 1px;
    background-color: #fdcd52;
  }
  .icon {
    font-size: 1.8rem;
    transition: all 0.1s ease;
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.2);
      color: #fdcd52;
    }
  }
`;
