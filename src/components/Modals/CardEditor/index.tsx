import React from "react";
import * as S from "./style";

export interface Props {
  text: string;
}

const CardEditor = ({ text }: Props) => {
  return (
    <S.Container>
      <S.Input>{text}</S.Input>
    </S.Container>
  );
};

export default CardEditor;
