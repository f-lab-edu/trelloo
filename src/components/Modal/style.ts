import styled from "styled-components";

export const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.dimmedBackground};
`;

export const Container = styled.div`
  // temporal style
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: white;
  transform: translate(25vw, 25vh);
`;
