import { theme } from "@/styles/theme";
import styled from "styled-components";

export type ButtonStyleType = "transparent" | "darkGray" | "gray" | "blue" | "black";

interface Color {
  appearance?: {
    type: ButtonStyleType;
  };
}

const buttonColor = {
  transparent: {
    backgroundColor: "transparent",
    color: theme.color.black,
  },
  darkGray: {
    backgroundColor: theme.color.cardEditorGray,
    color: theme.color.white,
  },
  gray: {
    backgroundColor: theme.color.buttonBackground,
    color: theme.color.black,
    hoverBackgroundColor: theme.color.hoverPointGray,
  },
  blue: {
    backgroundColor: theme.color.buttonBlue,
    color: theme.color.white,
  },
  black: {
    backgroundColor: theme.color.black,
    color: theme.color.white,
  },
};

export const Container = styled.button<Color>`
  padding: 0 10px;
  width: "max-content";
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ appearance }) => (appearance ? buttonColor[appearance.type].backgroundColor : "transparent")};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  color: ${({ appearance }) => (appearance ? buttonColor[appearance.type].color : "black")};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 5px;
`;

export const IconBehindWrapper = styled.div`
  margin-left: 5px;
`;
