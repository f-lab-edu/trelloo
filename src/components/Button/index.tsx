import React from "react";
import { theme } from "@/styles/theme";
import * as S from "./style";

interface Props {
  Icon?: React.ReactNode;
  isIconBehindText?: boolean;
  type?: "button" | "submit" | "reset";
  appearance?: {
    type: S.ButtonStyleType;
  };
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ Icon, isIconBehindText = false, type = "button", appearance, onClick, children }: Props) {
  return (
    <S.Container type={type} onClick={onClick} appearance={appearance}>
      <S.IconWrapper>{!isIconBehindText && !!Icon && Icon}</S.IconWrapper>
      {children}
      <S.IconBehindWrapper>{isIconBehindText && Icon}</S.IconBehindWrapper>
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
