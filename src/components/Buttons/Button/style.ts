import { theme } from "@/styles/theme";
import styled from "styled-components";

interface Color {
  buttonColor?: string;
}

export const Container = styled.div<Color>`
  margin: 3px;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: ${({ buttonColor }) => (buttonColor === "gray" ? theme.color.buttonBackground : "transparent")};
  border-radius: ${({ theme }) => theme.borderRadius.button};
`;
