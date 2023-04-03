import React from "react";
import { theme } from "@/styles/theme";
import * as S from "./style";

interface Props {
  icon?: React.ReactNode;
  isIconBehindText?: boolean;
  type: "blue" | "gray" | "darkGray" | "transparent";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Button({ icon, isIconBehindText = false, type, onClick, children }: Props) {
  return (
    <S.Container onClick={onClick} options={buttonOptions[type]}>
      <S.IconWrapper>{!isIconBehindText && icon && icon}</S.IconWrapper>
      {children}
      <S.IconBehindWrapper>{isIconBehindText && icon}</S.IconBehindWrapper>
    </S.Container>
  );
}

export default Button;

const buttonOptions = {
  blue: {
    buttonColor: theme.color.buttonBlue,
    textColor: theme.color.white,
  },
  gray: {
    buttonColor: theme.color.buttonBackground,
    textColor: theme.color.black,
  },
  darkGray: {
    buttonColor: theme.color.cardEditorGray,
    textColor: theme.color.white,
  },
  transparent: {
    buttonColor: "transparent",
    textColor: theme.color.black,
  },
};
