import React from "react";
import { Button as B } from "antd";
import * as S from "./style";

interface Props {
  icon?: React.ReactNode;
  isIconBehindText?: boolean;
  buttonColor?: string;
  children?: React.ReactNode;
  onClick?: any;
}
function Button({ icon, isIconBehindText = false, buttonColor, onClick, children }: Props) {
  return (
    <S.Container onClick={onClick} buttonColor={buttonColor}>
      <B icon={!isIconBehindText && icon} type={buttonColor === "blue" ? "primary" : "text"}>
        {children}
        {isIconBehindText && icon}
      </B>
    </S.Container>
  );
}

export default Button;
