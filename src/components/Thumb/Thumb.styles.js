import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animatethumb 0.5s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes animatethumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
