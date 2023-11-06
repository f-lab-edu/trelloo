import React from "react";
import { Button as AntdButton } from "antd";
import * as S from "./style";

interface Props {
  icon?: React.ReactNode;
  isIconBehindText?: boolean;
  options?: {
    buttonColor?: string;
    textColor?: string;
    width?: string;
  };

  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function Button({ icon, isIconBehindText = false, options, onClick, children }: Props) {
  return (
    <S.Container onClick={onClick} options={options}>
      <S.IconWrapper>{!isIconBehindText && icon && icon}</S.IconWrapper>
      {children}
      <S.IconBehindWrapper>{isIconBehindText && icon}</S.IconBehindWrapper>
    </S.Container>
  );
}

export default Button;
