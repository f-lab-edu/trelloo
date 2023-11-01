import React from "react";
import * as S from "./style";

interface Props {
  color: string;
}

function ColorControl({ color = "lightgray" }: Props) {
  return <S.Button variant="outline" color={color} />;
}

export default ColorControl;
