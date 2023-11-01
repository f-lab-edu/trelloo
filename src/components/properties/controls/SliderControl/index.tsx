import React from "react";
import * as S from "./style";

function SliderControl() {
  return (
    <S.Container>
      <S.Input defaultValue={33} />
      <S.Slider defaultValue={[33]} max={100} step={1} />
    </S.Container>
  );
}

export default SliderControl;
