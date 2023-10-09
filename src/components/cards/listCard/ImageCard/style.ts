import styled from "styled-components";

export const Button = styled.button`
  position: relative;

  &:hover {
    & > img {
      opacity: 0.8;
    }

    & > div {
      visibility: visible;
    }
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const NameBackground = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 0;
  padding: 3px 6px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: left;
`;
