import React from "react";
import * as S from "./style";

interface Props {
  isLoading?: boolean;
  Icon?: React.ReactNode;
  isIconBehindText?: boolean;
  type?: "button" | "submit" | "reset";
  appearance?: {
    type: S.ButtonStyleType;
    style?: Record<string, unknown>;
  };
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ Icon, isIconBehindText = false, type = "button", appearance, onClick, children, isLoading }: Props) {
  return (
    <S.Container type={type} style={appearance?.style} onClick={onClick} appearance={appearance} disabled={isLoading}>
      <S.IconWrapper>{!isIconBehindText && Boolean(Icon) && Icon}</S.IconWrapper>
      {children}
      <S.IconBehindWrapper>{isIconBehindText && Icon}</S.IconBehindWrapper>
    </S.Container>
  );
}

export default Button;
