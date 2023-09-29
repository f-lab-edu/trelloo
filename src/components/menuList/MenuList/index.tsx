import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

function MenuList({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}

export default MenuList;
