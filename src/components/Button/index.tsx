import React from "react";
import * as S from "./style";

interface Props {
  Icon?: React.ReactNode;
  isIconBehindText?: boolean;
  type?: "button" | "submit" | "reset";
  appearance?: {
    type: S.ButtonStyleType;
    style?: {};
  };
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ Icon, isIconBehindText = false, type = "button", appearance, onClick, children }: Props) {
  return (
    <S.Container type={type} style={appearance?.style} onClick={onClick} appearance={appearance}>
      <S.IconWrapper>{!isIconBehindText && !!Icon && Icon}</S.IconWrapper>
      {children}
      <S.IconBehindWrapper>{isIconBehindText && Icon}</S.IconBehindWrapper>
    </S.Container>
  );
}

export default Button;
