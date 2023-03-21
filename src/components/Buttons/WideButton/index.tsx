import React from "react";
import * as S from "./style";

export interface Props {
  text: string;
  icon: any;
}
function WideButton({ text, icon }: Props) {
  return (
    <S.Container>
      {icon && icon}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default WideButton;
