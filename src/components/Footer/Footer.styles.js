import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--darkGrey);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background: var(--lightGrey);
  width: 500px;
  border-radius: 20px;
  padding: 5px;

  h1 {
    font-size: var(--fontBig);
    margin: 0;
    margin-bottom: 5px;
  }

  h2 {
    font-size: var(--fontMed);
    margin: 0;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    h1,
    h2 {
      font-size: var(--fontSmall);
    }
  }
`;
