import styled from "styled-components";

export const Button = styled.button<{ isHidden: boolean }>`
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
`;
