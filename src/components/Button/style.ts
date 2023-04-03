import { theme } from "@/styles/theme";
import styled from "styled-components";

interface Color {
  options?: {
    buttonColor?: string;
    textColor?: string;
    width?: string;
  };
}

export const Container = styled.div<Color>`
  padding: 0 10px;
  width: ${({ options }) => options?.width || "max-content"};
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ options }) => options?.buttonColor};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  color: ${({ options }) => options?.textColor};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  margin-right: 5px;
`;

export const IconBehindWrapper = styled.div`
  margin-left: 5px;
`;
