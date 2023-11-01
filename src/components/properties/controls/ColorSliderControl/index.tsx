import React from "react";
import * as S from "./style";

interface Props {
  color: string;
}

function ColorSliderControl({ color }: Props) {
  return (
    <S.Container>
      <S.ColorContainer>
        <S.Input defaultValue={33} />
        <S.Color color={color} />
      </S.ColorContainer>
      <S.Slider defaultValue={[33]} max={100} step={1} />
    </S.Container>
  );
}

export default ColorSliderControl;
