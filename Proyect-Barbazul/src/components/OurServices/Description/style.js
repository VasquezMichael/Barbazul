import styled from "styled-components";
export const ContainerDescriptions = styled.div`
  font-family: Newsreader;
  width: 100%;
  margin-bottom: 25px;
  h2 {
    font-size: 2.2rem;
    border-bottom: 1.4px solid #fdcd52;
    width: 50%;
    margin-bottom: 20px;
  }
  #Span {
    margin-top: 10px;
    color: #fdcd52;
  }
  @media screen and (min-width: 690px) {
    margin-right: 20px;
    width: 80%;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }
    #Span {
      margin-top: 20px;
    }
  }
`;
