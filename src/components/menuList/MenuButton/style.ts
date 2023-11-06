import styled from "styled-components";

export const Container = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
