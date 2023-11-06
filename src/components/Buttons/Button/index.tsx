import React from "react";
import { Button as AntdButton } from "antd";
import * as S from "./style";

interface Props {
  icon?: React.ReactNode;
  isIconBehindText?: boolean;
  buttonColor?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function Button({ icon, isIconBehindText = false, buttonColor, onClick, children }: Props) {
  return (
    <S.Container onClick={onClick} buttonColor={buttonColor}>
      <AntdButton icon={!isIconBehindText && icon} type={buttonColor === "blue" ? "primary" : "text"}>
        {children}
        {isIconBehindText && icon}
      </AntdButton>
    </S.Container>
  );
}

export default Button;
