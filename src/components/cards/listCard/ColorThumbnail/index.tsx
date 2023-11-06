import React from "react";
import * as S from "./style";

interface Props {
  color: string;
}

function ColorThumbnail({ color }: Props) {
  return <S.Thumbnail color={color}></S.Thumbnail>;
}

export default ColorThumbnail;
