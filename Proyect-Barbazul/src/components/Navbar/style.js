import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 300px;
  height: 80px;
  background-color: #0f0f0f;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  font-family: Newsreader;
  margin-left: 30px;
  p {
    color: #fdcd52;
  }
  @media screen and (max-width: 690px) {
    margin-left: 20px;
    font-size: 1.7rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
  list-style: none;
  margin-right: 20px;

  @media screen and (max-width: 690px) {
    position: absolute;
    background-color: #0f0f0f;
    /* top: ${({ open }) => (open ? "80px" : "-550%")}; */
    top: 80px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 60vh;
    flex-direction: column;
    justify-content: center;
    transition: 0.9s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 18px;
  font-size: 1.3rem;
  @media screen and (max-width: 690px) {
    width: 100%;
    font-size: 1.1rem;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 690px) {
    display: flex;
    cursor: pointer;
    align-items: center;

    svg {
      fill: #fff;
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }
  }
`;
