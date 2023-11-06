import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  name: string;
  id?: string;
  children: ReactNode;
}
function Property({ name, id, children }: Props) {
  return (
    <S.Container>
      <S.Label htmlFor={id ?? name}>{name}</S.Label>
      {children}
    </S.Container>
  );
}

export default Property;