import React from "react";
import * as S from "./style";

interface Props {
  children: string;
}

function MenuTitle({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}

export default MenuTitle;
