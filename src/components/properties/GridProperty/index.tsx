import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  name: string;
  children: ReactNode;
}

function GridProperty({ name, children }: Props) {
  return (
    <S.Container>
      {children}
      {name}
    </S.Container>
  );
}

export default GridProperty;
