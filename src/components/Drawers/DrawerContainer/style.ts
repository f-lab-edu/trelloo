import styled from "styled-components";

export const Container = styled.div<{
  isOpened: boolean;
  isOpenedFromLeft: boolean;
}>`
  position: absolute;
  top: 0;
  right: ${({ isOpenedFromLeft }) => (isOpenedFromLeft ? "" : "0")};
  left: ${({ isOpenedFromLeft }) => (isOpenedFromLeft ? "0" : "")};
  width: 300px;
  height: 100%;
  transform: ${({ isOpened, isOpenedFromLeft }) =>
    isOpened ? `translateX(${isOpenedFromLeft ? "-" : ""}100%)` : ""};
  transition: transform 0.1s ease-in;
  background-color: aliceblue;
`;
